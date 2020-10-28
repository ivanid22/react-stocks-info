import { getSymbolsString, setStocks } from '../stocks';

describe('getSymbolsString', () => {
  const testData = ['one', 'two', 'three'];

  it('should return a comma separated string with symbols from argument', () => {
    expect(getSymbolsString(testData)).toEqual('one,two,three');
  });

  it('should return an empty string when an empty array is passed', () => {
    expect(getSymbolsString([])).toEqual('');
  });
});

describe('setStocks', () => {
  it('should create an action object with type SET_STOCKS', () => {
    expect(setStocks([])).toEqual({
      type: 'SET_STOCKS',
      stocks: [],
    });
  });
});
