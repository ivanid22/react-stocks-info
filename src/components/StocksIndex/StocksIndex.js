import { render } from '@testing-library/react';
import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types'
import StocksIndexItem from '../StocksIndexItem/StocksIndexItem';
import setFilter from '../../actions/filter';
import filterStocks from '../../filters/stocks';
import StocksFilterSelect from '../StocksFilterSelect/StocksFilterSelect';

const renderStocks = stocks => stocks.map(stocksItem => <StocksIndexItem key={`${stocksItem.symbol}-${stocksItem.exchangeShort}`} stockDetails={stocksItem} />);
const filterOptions = ['ALL', 'NYSE', 'DOW', 'NASDAQ'];

const StocksIndex = ({ stocks, setFilter }) => {

  const onFilterChange = event => {
    setFilter(event.target.value);
  };

  return(
    <div>
      <StocksFilterSelect onChange={onFilterChange} options={filterOptions} />
      {renderStocks(stocks)}
    </div>
  );
};

StocksIndex.propTypes = {
  stocks: PropTypes.arrayOf(PropTypes.object).isRequired,
  setFilter: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  stocks: filterStocks(state.stocks, state.filter),
});

const mapDispatchToProps = dispatch => ({
  setFilter: filter => dispatch(setFilter(filter)),
});

export default connect(mapStateToProps, mapDispatchToProps)(StocksIndex);
