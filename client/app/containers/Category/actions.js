/*
 *
 * Category actions
 *
 */

import { goBack } from 'connected-react-router';
import { success } from 'react-notification-system-redux';
import axios from 'axios';

import {
  FETCH_CATEGORIES,
  FETCH_STORE_CATEGORIES,
  FETCH_CATEGORY,
  CATEGORY_CHANGE,
  CATEGORY_EDIT_CHANGE,
  SET_CATEGORY_FORM_ERRORS,
  SET_CATEGORY_FORM_EDIT_ERRORS,
  ADD_CATEGORY,
  REMOVE_CATEGORY,
  SET_CATEGORIES_LOADING,
  RESET_CATEGORY,
  CATEGORY_ITEM_CHANGE,
  ADD_CATEGORY_ITEM,
  FETCH_STORE_CATEGORIES_ITEMS,
  FETCH_STORE_CATEGORIES_SELECT,
  FETCH_CATEGORY_MENU_ITEM,
  CATEGORY_EDIT_ITEM_CHANGE,
  REMOVE_CATEGORY_ITEM
} from './constants';

import handleError from '../../utils/error';
import { formatSelectOptions, unformatSelectOptions } from '../../utils/select';
import { allFieldsValidation } from '../../utils/validation';
import { API_URL } from '../../constants';

export const categoryChange = (name, value) => {
  let formData = {};
  formData[name] = value;

  return {
    type: CATEGORY_CHANGE,
    payload: formData
  };
};

export const categoryEditItemChange = (name, value) => {
  let formData = {};
  formData[name] = value;

  return {
    type: CATEGORY_EDIT_ITEM_CHANGE,
    payload: formData
  };
};

export const categoryItemChange = (name, value) => {
  let formData = {};
  formData[name] = value;

  return {
    type: CATEGORY_ITEM_CHANGE,
    payload: formData
  };
};

export const categoryEditChange = (name, value) => {
  let formData = {};
  formData[name] = value;

  return {
    type: CATEGORY_EDIT_CHANGE,
    payload: formData
  };
};

export const categorySelect = value => {
  return {
    type: CATEGORY_SELECT,
    payload: value
  };
};

export const resetCategory = () => {
  return async (dispatch, getState) => {
    dispatch({ type: RESET_CATEGORY });
  };
};

// fetch store categories api
export const fetchStoreCategories = () => {
  return async (dispatch, getState) => {
    try {
      const response = await axios.get(`${API_URL}/category/menu`);

      dispatch({
        type: FETCH_STORE_CATEGORIES,
        payload: response.data.categories
      });
    } catch (error) {
      handleError(error, dispatch);
    }
  };
};

// fetch store categories api
export const fetchStoreCategoriesSelect = () => {
  return async (dispatch, getState) => {
    try {
      const response = await axios.get(`${API_URL}/category/list`);

      const formattedCategories = formatSelectOptions(response.data.categories);

      dispatch({
        type: FETCH_STORE_CATEGORIES_SELECT,
        payload: formattedCategories
      });
    } catch (error) {
      handleError(error, dispatch);
    }
  };
};

// fetch store categories api
export const fetchStoreCategoriesItems = () => {
  return async (dispatch, getState) => {
    try {
      const response = await axios.get(`${API_URL}/category/menu/list`);

      dispatch({
        type: FETCH_STORE_CATEGORIES_ITEMS,
        payload: response.data.categories
      });
    } catch (error) {
      handleError(error, dispatch);
    }
  };
};

// fetch categories api
export const fetchCategories = () => {
  return async (dispatch, getState) => {
    try {
      dispatch({ type: SET_CATEGORIES_LOADING, payload: true });
      const response = await axios.get(`${API_URL}/category`);

      dispatch({
        type: FETCH_CATEGORIES,
        payload: response.data.categories
      });
    } catch (error) {
      handleError(error, dispatch);
    } finally {
      dispatch({ type: SET_CATEGORIES_LOADING, payload: false });
    }
  };
};

// fetch category api
export const fetchCategory = id => {
  return async (dispatch, getState) => {
    try {
      const response = await axios.get(`${API_URL}/category/${id}`);

      response.data.category.products = formatSelectOptions(
        response.data.category.products
      );

      dispatch({
        type: FETCH_CATEGORY,
        payload: response.data.category
      });
    } catch (error) {
      handleError(error, dispatch);
    }
  };
};

export const fetchCategoryMenuItem = id => {
  return async (dispatch, getState) => {
    try {
      const response = await axios.get(`${API_URL}/category/menu/${id}`);

      response.data.category.categories = formatSelectOptions(
        response.data.category.categories
      );

      dispatch({
        type: FETCH_CATEGORY_MENU_ITEM,
        payload: response.data.category
      });
    } catch (error) {
      handleError(error, dispatch);
    }
  };
};

// add category api
export const addCategory = () => {
  return async (dispatch, getState) => {
    try {
      const rules = {
        name: 'required',
        description: 'required', //        description: 'required|max:200',
        products: 'required'
      };

      const category = getState().category.categoryFormData;

      const newCategory = {
        name: category.name,
        description: category.description,
        products: unformatSelectOptions(category.products)
      };

      const { isValid, errors } = allFieldsValidation(newCategory, rules, {
        'required.name': 'Name is required.',
        'required.description': 'Description is required.',
        'max.description':
          'Description may not be greater than 200 characters.',
        'required.products': 'Products are required.'
      });

      if (!isValid) {
        return dispatch({ type: SET_CATEGORY_FORM_ERRORS, payload: errors });
      }

      const response = await axios.post(`${API_URL}/category/add`, newCategory);

      const successfulOptions = {
        title: `${response.data.message}`,
        position: 'tr',
        autoDismiss: 1
      };

      if (response.data.success === true) {
        dispatch(success(successfulOptions));
        dispatch({
          type: ADD_CATEGORY,
          payload: response.data.category
        });
        dispatch(resetCategory());
        dispatch(goBack());
      }
    } catch (error) {
      handleError(error, dispatch);
    }
  };
};

export const addCategoryItem = () => {
  return async (dispatch, getState) => {
    try {
      const category = getState().category.categoryItemFormData;

      const newCategory = {
        name: category.name,
        isActive: category.isActive,
        categories: category.categories.map(c => c.value)
      };

      const response = await axios.post(`${API_URL}/category/menu/add`, {
        ...newCategory
      });

      const successfulOptions = {
        title: `${response.data.message}`,
        position: 'tr',
        autoDismiss: 1
      };

      if (response.data.success === true) {
        dispatch(success(successfulOptions));
        dispatch({
          type: ADD_CATEGORY_ITEM,
          payload: response.data.category
        });
        dispatch(resetCategory());
        dispatch(goBack());
      }
    } catch (error) {
      handleError(error, dispatch);
    }
  };
};
// update category api
export const updateCategory = () => {
  return async (dispatch, getState) => {
    try {
      const rules = {
        name: 'required',
        slug: 'required|alpha_dash',
        description: 'required', //        description: 'required|max:200',
        products: 'required'
      };

      const category = getState().category.category;

      const newCategory = {
        name: category.name,
        slug: category.slug,
        description: category.description,
        products: category.products && unformatSelectOptions(category.products)
      };

      const { isValid, errors } = allFieldsValidation(newCategory, rules, {
        'required.name': 'Name is required.',
        'required.slug': 'Slug is required.',
        'alpha_dash.slug':
          'Slug may have alpha-numeric characters, as well as dashes and underscores only.',
        'required.description': 'Description is required.',
        'max.description':
          'Description may not be greater than 200 characters.',
        'required.products': 'Products are required.'
      });

      if (!isValid) {
        return dispatch({
          type: SET_CATEGORY_FORM_EDIT_ERRORS,
          payload: errors
        });
      }

      const response = await axios.put(`${API_URL}/category/${category._id}`, {
        category: newCategory
      });

      const successfulOptions = {
        title: `${response.data.message}`,
        position: 'tr',
        autoDismiss: 1
      };

      if (response.data.success === true) {
        dispatch(success(successfulOptions));
        dispatch(resetCategory());
        dispatch(goBack());
      }
    } catch (error) {
      handleError(error, dispatch);
    }
  };
};

export const updateCategoryMenu = () => {
  return async (dispatch, getState) => {
    try {
      const categoryItem = getState().category.categoryItem;

      const newCategory = {
        _id: categoryItem._id,
        name: categoryItem.name,
        isActive: categoryItem.isActive,
        categories: unformatSelectOptions(categoryItem.categories)
      };

      const response = await axios.put(
        `${API_URL}/category/menu/${categoryItem._id}`,
        {
          category: newCategory
        }
      );

      const successfulOptions = {
        title: `${response.data.message}`,
        position: 'tr',
        autoDismiss: 1
      };

      if (response.data.success === true) {
        dispatch(success(successfulOptions));
        dispatch(resetCategory());
        dispatch(goBack());
      }
    } catch (error) {
      handleError(error, dispatch);
    }
  };
};

// activate category api
export const activateCategory = (id, value) => {
  return async (dispatch, getState) => {
    try {
      const response = await axios.put(`${API_URL}/category/${id}/active`, {
        category: {
          isActive: value
        }
      });

      const successfulOptions = {
        title: `${response.data.message}`,
        position: 'tr',
        autoDismiss: 1
      };

      if (response.data.success === true) {
        dispatch(success(successfulOptions));
      }
    } catch (error) {
      handleError(error, dispatch);
    }
  };
};

// delete category api
export const deleteCategory = id => {
  return async (dispatch, getState) => {
    try {
      const response = await axios.delete(`${API_URL}/category/delete/${id}`);

      const successfulOptions = {
        title: `${response.data.message}`,
        position: 'tr',
        autoDismiss: 1
      };

      if (response.data.success == true) {
        dispatch(success(successfulOptions));
        dispatch({
          type: REMOVE_CATEGORY,
          payload: id
        });
        dispatch(goBack());
      }
    } catch (error) {
      handleError(error, dispatch);
    }
  };
};

export const deleteCategoryItem = id => {
  return async (dispatch, getState) => {
    try {
      const response = await axios.delete(
        `${API_URL}/category/menu/delete/${id}`
      );

      const successfulOptions = {
        title: `${response.data.message}`,
        position: 'tr',
        autoDismiss: 1
      };

      if (response.data.success == true) {
        dispatch(success(successfulOptions));
        dispatch({
          type: REMOVE_CATEGORY_ITEM,
          payload: id
        });
        dispatch(goBack());
      }
    } catch (error) {
      handleError(error, dispatch);
    }
  };
};
