/*
 *
 * Blog reducer
 *
 */

import {
  ADD_BLOG,
  FETCH_BLOG,
  BLOG_CHANGE,
  FETCH_BLOGS,
  REMOVE_BLOG,
  UPDATED_BLOG,
  SET_BLOG_TO_EDIT,
  BLOG_EDIT_CHANGE
} from './constants';

const initialState = {
  blogs: [],
  blog: {
    _id: ''
  },
  formErrors: {},
  editFormErrors: {},
  blogFormData: {
    title: '',
    image: {},
    content: ' '
  }
};

const blogReducer = (state = initialState, action) => {
  switch (action.type) {
    case BLOG_CHANGE:
      return {
        ...state,
        blogFormData: {
          ...state.blogFormData,
          [action.payload.key]: action.payload.value
        }
      };
    case FETCH_BLOGS:
      return {
        ...state,
        blogs: action.payload
      };
    case FETCH_BLOG:
      return {
        ...state,
        blog: action.payload
      };
    case ADD_BLOG:
      return {
        ...state,
        blogs: [...state.blogs, action.payload]
      };
    case REMOVE_BLOG:
      const index = state.blogs.findIndex(b => b._id === action.payload);
      return {
        ...state,
        blogs: [...state.blogs.slice(0, index), ...state.blogs.slice(index + 1)]
      };

    case SET_BLOG_TO_EDIT:
      return {
        ...state,
        blog: action.payload
      };
    case UPDATED_BLOG:
      return {
        ...state,
        blogs: state.blogs.map(b =>
          b._id === action.payload._id ? action.payload : b
        )
      };

    case BLOG_EDIT_CHANGE:
      return {
        ...state,
        blog: {
          ...state.blog,
          [action.payload.key]: action.payload.value
        }
      };
    default:
      return state;
  }
};

export default blogReducer;
