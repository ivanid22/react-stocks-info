import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import rootReducer from './reducers/index';
import { fetchStocksSearchResults } from './actions/stocks';
import './index.css';
import App from './App';

const store = createStore(rootReducer, applyMiddleware(thunk));
const { REACT_APP_API_KEY, REACT_APP_API_URL } = process.env;
const searchTerm = 'AABC';
const limit = null;

store.subscribe(() => {
  console.log(store.getState());
});

store.dispatch(fetchStocksSearchResults(null, 10));

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'),
);
