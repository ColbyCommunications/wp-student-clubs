import React from 'react';
import { render } from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { Provider } from 'react-redux';

import { fetchPage } from './actions';
import rootReducer from './reducers';
import AppContainer from './containers/app-container';
import renderSingleCategory from './renderSingleCategory';

const REST_BASE = '//www.colby.edu/studentactivities/wp-json/wp/v2/';

function renderClubs(container, categories) {
  const initialState = {
    categories: { categories },
    page: { pageOne: container.innerHTML },
  };

  const activeCategory = container.getAttribute('data-category');
  if (activeCategory) {
    initialState.categories.activeCategory = Number(activeCategory);
  }

  const middlewares = [thunkMiddleware];

  const store = createStore(
    rootReducer,
    initialState,
    applyMiddleware(...middlewares)
  );

  if (activeCategory) {
    store.dispatch(fetchPage(Number(activeCategory)));
  }

  render(
    <Provider store={store}>
      <AppContainer />
    </Provider>,
    container
  );
}

const initSingleCategory = (container) => {
  fetch(
    `${REST_BASE}student-organization/?categories=${container.dataset
      .categories}&orderby=title&order=asc`
  )
    .then((response) => response.json())
    .then((items) => renderSingleCategory(container, items));
};

function initApp(container) {
  if (container.dataset.categories) {
    initSingleCategory(container);
    return;
  }

  fetch(`${REST_BASE}categories?per_page=99&exclude=1&hide_empty=true`)
    .then((response) => response.json())
    .then((categories) => renderClubs(container, categories));
}

function init() {
  Array.prototype.forEach.call(
    document.querySelectorAll('[data-student-clubs]'),
    initApp
  );
}

window.addEventListener('load', init);
