import axios from 'axios';
import setApplicationState from '../actions/applicationState';

export const ActionType = {
  SET_STOCKS: 'SET_STOCKS',
};

export const setStocks = stocks => ({
  type: ActionType.SET_STOCKS,
  stocks,
});

const testStocks = [
  {
    symbol: 'TC1',
    price: '1',
    companyName: 'Test Company 1',
    exchange: 'Nasdaq Global Select',
    exchangeShortName: 'NASDAQ',
    currency: 'USD',
  },
  {
    symbol: 'TC2',
    price: '1',
    companyName: 'Test Company 2',
    exchange: 'Nasdaq Global Select',
    exchangeShortName: 'NASDAQ',
    currency: 'USD',
  },
  {
    symbol: 'TC3',
    price: '1',
    companyName: 'Test Company 3',
    exchange: 'Nasdaq Global Select',
    exchangeShortName: 'NASDAQ',
    currency: 'USD',
  },
  {
    symbol: 'TC4',
    price: '1',
    companyName: 'Test Company 4',
    exchange: 'Nasdaq Global Select',
    exchangeShortName: 'NASDAQ',
    currency: 'USD',
  },
  {
    symbol: 'TC5',
    price: '1',
    companyName: 'Test Company 5',
    exchange: 'Nasdaq Global Select',
    exchangeShortName: 'NASDAQ',
    currency: 'USD',
  },
];

const { REACT_APP_API_URL, REACT_APP_API_KEY } = process.env;

const getSymbolsString = symbolsArray => {
  if (symbolsArray.length < 1) return '';
  return symbolsArray.reduce((commaSeparatedSymbols, symbol) => (`${commaSeparatedSymbols},${symbol}`));
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
    const secondRequestString = `${REACT_APP_API_URL}/profile/${getSymbolsString(symbolsArray)}`;
    axios({
      method: 'GET',
      url: secondRequestString,
      params: {
        apikey: REACT_APP_API_KEY,
      },
    }).then(finalResponse => {
      dispatch(setStocks(finalResponse.data));
      dispatch(setApplicationState('IDLE'));
    }).catch(() => {
      dispatch(setStocks([]));
    });
  });
};

export const fetchTest = () => dispatch => {
  dispatch(setApplicationState('FETCHING_DATA'));
  setTimeout(() => {
    dispatch(setStocks(testStocks));
    dispatch(setApplicationState('IDLE'));
  }, 2000);
};
