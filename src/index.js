import React from 'react';
import { render } from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { Provider } from 'react-redux';

import { fetchPage } from './actions';
import rootReducer from './reducers';
import AppContainer from './containers/app-container';
import renderSingleCategory from './renderSingleCategory';

function renderClubs({ container, categories, endpoint }) {
  const initialState = {
    categories: { categories },
    page: { pageOne: container.innerHTML },
  };

  const activeCategory = container.getAttribute('data-category');
  if (activeCategory) {
    initialState.categories.activeCategory = Number(activeCategory);
  }

  const middlewares = [thunkMiddleware];

  const store = createStore(rootReducer, initialState, applyMiddleware(...middlewares));

  if (activeCategory) {
    store.dispatch(endpoint, fetchPage(Number(activeCategory)));
  }

  render(
    <Provider store={store}>
      <AppContainer endpoint={endpoint} />
    </Provider>,
    container,
  );
}

const initSingleCategory = async ({ container, categories, endpoint }) => {
  const response = await fetch(`${endpoint}/?categories=${categories}&orderby=title&order=asc&per_page=99`);
  const items = await response.json();
  if (items) {
    renderSingleCategory(container, items);
  }
};

const initApp = async (container) => {
  const endpoint = container.getAttribute('data-endpoint');
  const categoriesEndpoint = container.getAttribute('data-categories-endpoint');
  const categories = container.getAttribute('data-categories');

  if (!endpoint) {
    return;
  }

  if (categories) {
    initSingleCategory({ container, categories, endpoint });
    return;
  }

  if (!categoriesEndpoint) {
    return;
  }

  const response = await fetch(`${categoriesEndpoint}?per_page=99&exclude=1&hide_empty=true`);
  const receivedCategories = await response.json();

  if (receivedCategories) {
    renderClubs({ container, categories: receivedCategories, endpoint });
  }
};

const init = () => {
  [...document.querySelectorAll('[data-student-clubs]')].forEach(initApp);
};

window.addEventListener('load', init);
