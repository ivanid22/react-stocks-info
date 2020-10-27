import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import rootReducer from './reducers/index';
import { fetchStocksSearchResults } from './actions/stocks';
import App from './App';

const store = createStore(rootReducer, applyMiddleware(thunk));

store.dispatch(fetchStocksSearchResults('', 200));
// store.dispatch(fetchTest());

window.store = store;

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'),
);
