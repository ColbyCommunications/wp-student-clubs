import React from 'react';
import { render } from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { Provider } from 'react-redux';
import { createLogger } from 'redux-logger';

import { fetchCategories } from './actions';
import rootReducer from './reducers';
import ColbyStudentClubs from './components/colby-student-clubs';

function init() {
  document.querySelectorAll('[data-student-clubs]').forEach((container) => {
    const middlewares = [thunkMiddleware];

    if (window.location.href.indexOf('localhost') !== -1) {
      middlewares.push(createLogger());
    }

    const store = createStore(rootReducer, applyMiddleware(...middlewares));

    store.dispatch(fetchCategories());

    render(
      <Provider store={store}>
        <ColbyStudentClubs pageOne={container.innerHTML} />
      </Provider>,
      container
    );
  });
}

window.addEventListener('load', init);
