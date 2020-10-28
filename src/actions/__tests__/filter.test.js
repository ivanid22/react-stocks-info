import setFilter from '../filter';

describe('setFilter', () => {
  it('should generate a setFilter action', () => {
    expect(setFilter('TEST_FILTER')).toEqual({
      type: 'SET_FILTER',
      filter: 'TEST_FILTER',
    });
  });
});
