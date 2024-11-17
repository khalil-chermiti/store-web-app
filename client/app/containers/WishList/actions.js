/*
 *
 * WishList actions
 *
 */

import { success, warning } from 'react-notification-system-redux';
import axios from 'axios';

import { FETCH_WISHLIST, SET_WISHLIST_LOADING } from './constants';
import handleError from '../../utils/error';
import { API_URL } from '../../constants';

function addToWishlist(productId) {
  // Retrieve the current wishlist from localStorage
  let wishlist = JSON.parse(localStorage.getItem('wishlist')) || [];

  // Check if the product is already in the wishlist
  if (!wishlist.includes(productId)) {
    wishlist.push(productId); // Add the new product ID
    localStorage.setItem('wishlist', JSON.stringify(wishlist)); // Update localStorage
  }
}

function removeFromWishlist(productId) {
  // Retrieve the current wishlist from localStorage
  let wishlist = JSON.parse(localStorage.getItem('wishlist')) || [];

  // Filter out the product to remove
  wishlist = wishlist.filter(id => id !== productId);

  // Update localStorage with the new wishlist
  localStorage.setItem('wishlist', JSON.stringify(wishlist));
}

function getWishlist() {
  return JSON.parse(localStorage.getItem('wishlist')) || [];
}

export const updateWishlist = (isLiked, productId) => {
  return async (dispatch, getState) => {
    if (isLiked) addToWishlist(productId);
    else removeFromWishlist(productId);

    const successfulOptions = {
      title: `Product was ${isLiked ? 'added to' : 'removed from'} wishlist`,
      position: 'tr',
      autoDismiss: 1
    };

    dispatch(success(successfulOptions));
    dispatch(fetchWishlist());
  };
};

// fetch wishlist api
export const fetchWishlist = () => {
  return async (dispatch, getState) => {
    try {
      dispatch({ type: SET_WISHLIST_LOADING, payload: true });

      const productIds = getWishlist();

      const response = await axios.post(`${API_URL}/wishlist/list`, {
        productIds: productIds
      });

      dispatch({ type: FETCH_WISHLIST, payload: response.data.wishlist });
    } catch (error) {
      handleError(error, dispatch);
    } finally {
      dispatch({ type: SET_WISHLIST_LOADING, payload: false });
    }
  };
};
