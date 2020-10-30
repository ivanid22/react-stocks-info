import filterStocks from '../stocks';

describe('filterStocks', () => {
  const stocks = [
    {
      companyName: 'first',
      exchangeShortName: 'NYSE',
    },
    {
      companyName: 'second',
      exchangeShortName: 'XETRA',
    },
    {
      companyName: 'third',
      exchangeShortName: 'NYSE',
    },
    {
      companyName: 'fourth',
      exchangeShortName: 'XETRA',
    },
    {
      companyName: 'fifth',
      exchangeShortName: 'NYSE',
    },
  ];

  it('should return an array with stocks filtered by exchange name', () => {
    expect(filterStocks(stocks, 'XETRA')).toEqual([
      {
        companyName: 'second',
        exchangeShortName: 'XETRA',
      },
      {
        companyName: 'fourth',
        exchangeShortName: 'XETRA',
      },
    ]);
  });

  it('should return a filtered array with max length provided', () => {
    expect(filterStocks(stocks, 'XETRA', 1)).toEqual([
      {
        companyName: 'second',
        exchangeShortName: 'XETRA',
      },
    ]);
  });
});
