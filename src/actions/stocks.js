import axios from 'axios';

export const ActionType = {
  SET_STOCKS: 'SET_STOCKS',
};

export const setStocks = stocks => ({
  type: ActionType.SET_STOCKS,
  stocks,
});

const { REACT_APP_API_URL, REACT_APP_API_KEY } = process.env;

const getSymbolsString = symbolsArray => {
  if (symbolsArray.length < 1) return '';
  return symbolsArray.reduce((commaSeparatedSymbols, symbol) => (`${commaSeparatedSymbols},${symbol}`));
};

export const fetchStocksSearchResults = (searchTerm, limit = 10) => {
  return dispatch => {
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
      }).catch(error => {
        dispatch(setStocks([]));
      });
    }).catch(error => {
      console.log(error.message);
    });
  };
};
