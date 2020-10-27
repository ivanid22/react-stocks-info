import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import rootReducer from './reducers/index';
import { fetchStocksSearchResults, fetchTest } from './actions/stocks';
import App from './App';

const store = createStore(rootReducer, applyMiddleware(thunk));

//store.dispatch(fetchStocksSearchResults('', 200));
store.dispatch(fetchTest());

window.store = store;

store.subscribe(() => {
  console.log(store.getState());
});

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'),
);
