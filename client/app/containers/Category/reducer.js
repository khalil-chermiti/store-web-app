/*
 *
 * Category reducer
 *
 */

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
  CATEGORY_EDIT_ITEM_CHANGE,
  FETCH_CATEGORY_MENU_ITEM,
  REMOVE_CATEGORY_ITEM
} from './constants';

const initialState = {
  categories: [],
  categoriesMenuItems: [],
  storeCategories: [],
  category: {
    _id: ''
  },
  categoryItem: {
    _id: ''
  },
  categoryFormData: {
    name: '',
    description: '',
    products: [],
    isActive: true
  },
  categoryItemFormData: {
    name: '',
    isActive: true,
    categories: []
  },
  categoriesSelect: [],
  formErrors: {},
  editFormErrors: {},
  isLoading: false
};

const categoryReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_CATEGORIES:
      return {
        ...state,
        categories: action.payload
      };
    case FETCH_STORE_CATEGORIES:
      return {
        ...state,
        storeCategories: action.payload
      };

    case FETCH_STORE_CATEGORIES_SELECT:
      return {
        ...state,
        categoriesSelect: action.payload
      };
    case FETCH_STORE_CATEGORIES_ITEMS:
      return {
        ...state,
        categoriesMenuItems: action.payload
      };
    case FETCH_CATEGORY:
      return {
        ...state,
        category: action.payload
      };
    case FETCH_CATEGORY_MENU_ITEM:
      return {
        ...state,
        categoryItem: action.payload
      };
    case ADD_CATEGORY:
      return {
        ...state,
        categories: [...state.categories, action.payload]
      };
    case ADD_CATEGORY_ITEM:
      return {
        ...state,
        categoriesMenuItems: [...state.categories, action.payload]
      };

    case REMOVE_CATEGORY_ITEM:
      const indexOfElement = state.categoriesMenuItems.findIndex(
        b => b._id === action.payload
      );
      return {
        ...state,
        categoriesMenuItems: [
          ...state.categoriesMenuItems.slice(0, indexOfElement),
          ...state.categoriesMenuItems.slice(indexOfElement + 1)
        ]
      };

    case REMOVE_CATEGORY:
      const index = state.categories.findIndex(b => b._id === action.payload);
      return {
        ...state,
        categories: [
          ...state.categories.slice(0, index),
          ...state.categories.slice(index + 1)
        ]
      };
    case CATEGORY_CHANGE:
      return {
        ...state,
        categoryFormData: { ...state.categoryFormData, ...action.payload }
      };
    case CATEGORY_EDIT_ITEM_CHANGE:
      return {
        ...state,
        categoryItem: { ...state.categoryItem, ...action.payload }
      };
    case CATEGORY_ITEM_CHANGE:
      return {
        ...state,
        categoryItemFormData: {
          ...state.categoryItemFormData,
          ...action.payload
        }
      };
    case CATEGORY_EDIT_CHANGE:
      return {
        ...state,
        category: {
          ...state.category,
          ...action.payload
        }
      };
    case SET_CATEGORY_FORM_ERRORS:
      return {
        ...state,
        formErrors: action.payload
      };
    case SET_CATEGORY_FORM_EDIT_ERRORS:
      return {
        ...state,
        editFormErrors: action.payload
      };
    case SET_CATEGORIES_LOADING:
      return {
        ...state,
        isLoading: action.payload
      };
    case RESET_CATEGORY:
      return {
        ...state,
        categoryFormData: {
          name: '',
          description: '',
          products: [],
          isActive: true
        },
        categoryItemFormData: {
          name: '',
          isActive: true,
          categories: []
        },
        category: {
          _id: ''
        },
        formErrors: {},
        editFormErrors: {}
      };
    default:
      return state;
  }
};

export default categoryReducer;
