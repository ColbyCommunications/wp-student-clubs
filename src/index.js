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
    const loggerMiddleware = createLogger();

    const store = createStore(
      rootReducer,
      applyMiddleware(thunkMiddleware, loggerMiddleware)
    );

    store.dispatch(fetchCategories());

    render(
      <Provider store={store}>
        <ColbyStudentClubs />
      </Provider>,
      container
    );
  });
}

window.addEventListener('load', init);
