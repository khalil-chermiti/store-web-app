import { goBack } from 'connected-react-router';
import { success } from 'react-notification-system-redux';
import axios from 'axios';

import {
  ADD_BLOG,
  BLOG_CHANGE,
  FETCH_BLOGS,
  SET_BLOG_TO_EDIT,
  BLOG_EDIT_CHANGE,
  REMOVE_BLOG
} from './constants';

import { API_URL } from '../../constants';

export const blogChange = (key, value) => {
  console.log(key, value);
  return {
    type: BLOG_CHANGE,
    payload: { key, value }
  };
};

export const addBlog = () => {
  return async (dispatch, getState) => {
    const blog = getState().blog.blogFormData;

    try {
      // 1. Extract images from content
      const content = blog.content;
      const imageRegex = /<img[^>]+src="([^">]+)"/g; // Regex to find all images in the content
      const base64Images = [];
      let match;

      while ((match = imageRegex.exec(content)) !== null) {
        const src = match[1];
        if (src.startsWith('data:image/')) {
          base64Images.push(src); // Collect Base64 images
        }
      }

      // 2. Upload images to the server
      const imageUploadPromises = base64Images.map(async base64 => {
        const file = base64ToBlob(base64); // Convert Base64 to Blob
        const formData = new FormData();
        formData.append('images', file);

        const response = await axios.post(`${API_URL}/image/upload`, formData, {
          headers: { 'Content-Type': 'multipart/form-data' }
        });

        return response.data.files[0].fileUrl; // Get uploaded image URL
      });

      const uploadedImageUrls = await Promise.all(imageUploadPromises);

      // 3. Replace Base64 images in content with URLs
      let updatedContent = content;
      base64Images.forEach((base64, index) => {
        updatedContent = updatedContent.replace(
          base64,
          uploadedImageUrls[index]
        );
      });

      // 4. Update the blog data with new content
      const updatedBlog = { ...blog, content: updatedContent };

      // 5. Send blog data to the server
      const response = await axios.post(`${API_URL}/blog/add`, updatedBlog);

      dispatch({
        type: ADD_BLOG,
        payload: response.data.blog
      });

      dispatch(
        success({ title: 'Success', message: 'Blog added successfully' })
      );
      dispatch(goBack());
    } catch (error) {
      console.error(error);
    }
  };
};

function base64ToBlob(base64) {
  const byteString = atob(base64.split(',')[1]);
  const mimeType = base64.match(/data:(.*?);/)[1];
  const buffer = new ArrayBuffer(byteString.length);
  const byteArray = new Uint8Array(buffer);

  for (let i = 0; i < byteString.length; i++) {
    byteArray[i] = byteString.charCodeAt(i);
  }

  return new Blob([buffer], { type: mimeType });
}

export const fetchBlogs = () => {
  return async dispatch => {
    try {
      const response = await axios.get(`${API_URL}/blog`);

      dispatch({
        type: FETCH_BLOGS,
        payload: response.data.blogs
      });
    } catch (error) {
      console.error(error);
    }
  };
};

export const setBlogToEdit = blog => {
  return {
    type: SET_BLOG_TO_EDIT,
    payload: blog
  };
};

export const blogEditChange = (key, value) => {
  return {
    type: BLOG_EDIT_CHANGE,
    payload: { key, value }
  };
};

export const updateBlog = () => {
  return async (dispatch, getState) => {
    const blog = getState().blog.blog;
    try {
      const response = await axios.put(`${API_URL}/blog/${blog._id}`, blog);

      dispatch({
        type: ADD_BLOG,
        payload: response.data.blog
      });

      dispatch(
        success({ title: 'Success', message: 'Blog updated successfully' })
      );
      dispatch(goBack());
    } catch (error) {
      console.error(error);
    }
  };
};

export const deleteBlog = () => {
  return async (dispatch, getState) => {
    const blog = getState().blog.blog;
    try {
      await axios.delete(`${API_URL}/blog/${blog._id}`);

      dispatch({
        type: REMOVE_BLOG,
        payload: blog
      });

      dispatch(
        success({ title: 'Success', message: 'Blog deleted successfully' })
      );
      dispatch(goBack());
    } catch (error) {
      console.error(error);
    }
  };
};
