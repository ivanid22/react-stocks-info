import axios from 'axios';

export const ActionType = {
  SET_STOCKS: 'SET_STOCKS',
};

export const setStocks = stocks => ({
  type: ActionType.SET_STOCKS,
  stocks,
});

const { REACT_APP_API_URL, REACT_APP_API_KEY } = process.env;

export const fetchStocksSearchResults = (searchTerm, limit) => {
  return dispatch => {
    const requestString = `${REACT_APP_API_URL}/search?query=${searchTerm || ''}&limit=${limit || '100'}&apikey=${REACT_APP_API_KEY}`;
    axios({
      method: 'GET',
      url: requestString,
      params: {
        q: 'Paris',
        appid: '97c94feb17a879afad3f559073cb4200',
      },
      headers: {
        Accept: 'application/json',
        'Accept-Encoding': 'gzip, deflate, br',
        Connection: 'keep-alive',
        'User-Agent': 'PostmanRuntime/7.26.5',
        'Content-Type': 'application/json',
      },
    }).then(response => {
        console.log(response.data);
    }).catch(error => {
        console.log(error.message);
    })
  };
};
