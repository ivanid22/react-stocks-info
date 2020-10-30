import stocksReducer from '../stocksReducer';
import { setStocks } from '../../actions/stocks';

describe('stocksReducer', () => {
  const testStocks = [
    {
      companyName: 'companyOne',
      exchangeShortName: 'exchangeOne',
    },
    {
      companyName: 'companyTwo',
      exchangeShortName: 'exchangeTwo',
    },
  ];

  it('should set the stocks state when passed a SET_STOCKS action', () => {
    expect(stocksReducer([], setStocks(testStocks))).toEqual(testStocks);
  });

  it('should return an empty stocks array by default', () => {
    expect(stocksReducer(undefined, { action: 'UNKNOWN_ACTION' })).toEqual([]);
  });
});
