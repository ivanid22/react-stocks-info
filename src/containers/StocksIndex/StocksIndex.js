import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import StocksIndexItem from '../../components/StocksIndexItem/StocksIndexItem';
import setFilter from '../../actions/filter';
import filterStocks from '../../filters/stocks';
import StocksFilterSelect from '../../components/StocksFilterSelect/StocksFilterSelect';
import Spinner from '../../components/Spinner/Spinner';

const renderStocks = stocks => stocks.map(stocksItem => <StocksIndexItem key={`${stocksItem.symbol}-${stocksItem.exchangeShort}`} stockDetails={stocksItem} />);
const filterOptions = ['ALL', 'NYSE', 'DOW', 'NASDAQ', 'LSE', 'XETRA'];

const StocksIndex = ({ stocks, setFilter, applicationState }) => {
  const onFilterChange = event => {
    setFilter(event.target.value);
  };

  return (
    <div>
      <StocksFilterSelect onChange={onFilterChange} options={filterOptions} />
      {applicationState === 'FETCHING_DATA' ? <Spinner /> : renderStocks(stocks) }
    </div>
  );
};

StocksIndex.propTypes = {
  stocks: PropTypes.arrayOf(PropTypes.object).isRequired,
  setFilter: PropTypes.func.isRequired,
  applicationState: PropTypes.string.isRequired,
};

const mapStateToProps = state => ({
  stocks: filterStocks(state.stocks, state.filter),
  applicationState: state.applicationState,
});

const mapDispatchToProps = dispatch => ({
  setFilter: filter => dispatch(setFilter(filter)),
});

export default connect(mapStateToProps, mapDispatchToProps)(StocksIndex);
