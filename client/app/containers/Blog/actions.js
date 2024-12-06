import { goBack } from "connected-react-router";
import { success } from "react-notification-system-redux";
import axios from "axios";

import {
  ADD_BLOG,
  BLOG_CHANGE,
  FETCH_BLOGS,
  SET_BLOG_TO_EDIT,
  BLOG_EDIT_CHANGE,
  REMOVE_BLOG,
} from "./constants";

import { API_URL } from "../../constants";

export const blogChange = (key, value) => {
  console.log(key, value);
  return {
    type: BLOG_CHANGE,
    payload: { key, value },
  };
};

export const addBlog = () => {
  return async (dispatch, getState) => {
    const blog = getState().blog.blogFormData;
    try {
      const response = await axios.post(`${API_URL}/blog/add`, blog);

      dispatch({
        type: ADD_BLOG,
        payload: response.data.blog,
      });

      dispatch(
        success({ title: "Success", message: "Blog added successfully" }),
      );
      dispatch(goBack());
    } catch (error) {
      console.error(error);
    }
  };
};

export const fetchBlogs = () => {
  return async (dispatch) => {
    try {
      const response = await axios.get(`${API_URL}/blog`);

      dispatch({
        type: FETCH_BLOGS,
        payload: response.data.blogs,
      });
    } catch (error) {
      console.error(error);
    }
  };
};

export const setBlogToEdit = (blog) => {
  return {
    type: SET_BLOG_TO_EDIT,
    payload: blog,
  };
};

export const blogEditChange = (key, value) => {
  return {
    type: BLOG_EDIT_CHANGE,
    payload: { key, value },
  };
};

export const updateBlog = () => {
  return async (dispatch, getState) => {
    const blog = getState().blog.blog;
    try {
      const response = await axios.put(`${API_URL}/blog/${blog._id}`, blog);

      dispatch({
        type: ADD_BLOG,
        payload: response.data.blog,
      });

      dispatch(
        success({ title: "Success", message: "Blog updated successfully" }),
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
        payload: blog,
      });

      dispatch(
        success({ title: "Success", message: "Blog deleted successfully" }),
      );
      dispatch(goBack());
    } catch (error) {
      console.error(error);
    }
  };
};
