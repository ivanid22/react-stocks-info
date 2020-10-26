const filterStocks = (stocks, exchange, max = 100) => {
  let filteredStocks;
  if (exchange.toUpperCase() === 'ALL') filteredStocks = [...stocks];
  else filteredStocks = stocks.filter(item => item.exchangeShortName === exchange);

  if (filteredStocks.length <= max) return filteredStocks;
  return filteredStocks.slice(0, max - 1);
};

export default filterStocks;
