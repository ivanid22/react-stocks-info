const filterStocks = (stocks, exchange) => {
  if (exchange.toUpperCase() === 'ALL') return stocks;
  return stocks.filter(item => item.exchangeShortName === exchange);
};

export default filterStocks;
