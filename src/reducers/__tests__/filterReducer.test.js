import filterReducer from '../filterReducer';
import setFilter from '../../actions/filter'

describe('filterReducer', () => {
  it('should set filter state when passed a SET_FILTER action', () => {
    expect(filterReducer('', setFilter('TEST_FILTER'))).toEqual('TEST_FILTER');
  });

  it('should return a filter state of ALL by default', () => {
    expect(filterReducer(undefined, { type: 'UNKNOWN_ACTION' })).toEqual('ALL');
  });
});
