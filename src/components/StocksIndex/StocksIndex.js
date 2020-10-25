import { render } from '@testing-library/react';
import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types'
import StocksIndexItem from '../StocksIndexItem/StocksIndexItem';

const renderStocks = stocks => stocks.map(stocksItem => <StocksIndexItem key={`${stocksItem.symbol}-${stocksItem.exchangeShort}`} stockDetails={stocksItem} />)

const StocksIndex = ({ stocks }) => {
  return(
    <div>
      {renderStocks(stocks)}
    </div>
  );
};

StocksIndex.propTypes = {
  stocks: PropTypes.arrayOf(PropTypes.object).isRequired,
};

const mapStateToProps = state => ({
  stocks: state.stocks,
});

export default connect(mapStateToProps)(StocksIndex);
