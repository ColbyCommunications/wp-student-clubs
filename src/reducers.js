import { combineReducers } from 'redux';

import {
  REQUEST_CATEGORIES,
  RECEIVE_CATEGORIES,
  SET_ACTIVE_CATEGORY,
  REQUEST_PAGE,
  RECEIVE_PAGE,
} from './actions';

/* Reducer for requesting, receiving, and setting acive categories. */
function categories(
  state = {
    fetching: false,
    categories: [],
    activeCategory: null,
  },
  action
) {
  switch (action.type) {
    case REQUEST_CATEGORIES:
      return Object.assign({}, state, { fetching: true, categories: [] });
    case RECEIVE_CATEGORIES:
      return Object.assign({}, state, {
        fetching: false,
        categories: action.categories,
        activeCategory: action.categories[0].id,
      });
    case SET_ACTIVE_CATEGORY:
      return Object.assign({}, state, {
        activeCategory: action.category,
      });
    default:
      return state;
  }
}

/* Reducer for requesting and receiving pages in a category. */
function page(
  state = {
    fetchingPage: false,
    posts: [],
  },
  action
) {
  switch (action.type) {
    case REQUEST_PAGE:
      return Object.assign({}, state, { fetchingPage: true });
    case RECEIVE_PAGE:
      return Object.assign({}, state, {
        fetchingPage: false,
        posts: action.posts,
      });
    default:
      return state;
  }
}

export default combineReducers({ categories, page });
