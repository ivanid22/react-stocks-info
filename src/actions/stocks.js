import axios from 'axios';
import setApplicationState from './applicationState';

export const ActionType = {
  SET_STOCKS: 'SET_STOCKS',
};

export const setStocks = stocks => ({
  type: ActionType.SET_STOCKS,
  stocks,
});

const { REACT_APP_API_URL, REACT_APP_API_KEY } = process.env;

export const getSymbolsString = symbolsArray => {
  if (symbolsArray.length < 1) return '';
  return symbolsArray.reduce((commaSeparatedSymbols, symbol) => (`${commaSeparatedSymbols},${symbol}`));
};

export const fetchStocksDetails = symbolsArray => dispatch => {
  const requestString = `${REACT_APP_API_URL}/profile/${getSymbolsString(symbolsArray)}`;
  axios({
    method: 'GET',
    url: requestString,
    params: {
      apikey: REACT_APP_API_KEY,
    },
  }).then(finalResponse => {
    dispatch(setStocks(finalResponse.data));
    dispatch(setApplicationState('IDLE'));
  }).catch(() => {
    dispatch(setStocks([]));
  });
};

export const fetchStocksSearchResults = (searchTerm, limit = 200) => dispatch => {
  dispatch(setApplicationState('FETCHING_DATA'));
  const requestString = `${REACT_APP_API_URL}/search`;
  axios({
    method: 'GET',
    url: requestString,
    params: {
      query: searchTerm || '',
      limit: limit.toString(),
      apikey: REACT_APP_API_KEY,
    },
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
  }).then(response => {
    const symbolsArray = response.data.map(stock => stock.symbol);
    dispatch(fetchStocksDetails(symbolsArray));
  });
};
