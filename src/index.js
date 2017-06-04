import React from 'react';
import { render } from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { Provider } from 'react-redux';
import { createLogger } from 'redux-logger';
import { BrowserRouter, Route } from 'react-router-dom';

import { fetchPage } from './actions';
import rootReducer from './reducers';
import AppContainer from './containers/app-container';

const REST_BASE = 'http://www.colby.edu/studentactivities/wp-json/wp/v2/';

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

  if (window.location.href.indexOf('localhost') !== -1) {
    middlewares.push(createLogger());
  }

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
      <BrowserRouter basename="/wp/communitylife/student-organizations">
        <Route component={AppContainer} />
      </BrowserRouter>
    </Provider>,
    container
  );
}

function initCategories(container) {
  fetch(`${REST_BASE}categories?per_page=99&exclude=1&hide_empty=true`)
    .then((response) => response.json())
    .then((categories) => renderClubs(container, categories));
}

function init() {
  document.querySelectorAll('[data-student-clubs]').forEach(initCategories);
}

window.addEventListener('load', init);
