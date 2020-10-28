import axios from 'axios';
import thunk from 'redux-thunk';
import configureMockStore from 'redux-mock-store';
import { getSymbolsString, setStocks } from '../stocks';
import { faItalic } from '@fortawesome/free-solid-svg-icons';

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
