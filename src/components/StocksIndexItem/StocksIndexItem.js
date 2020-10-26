import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import styles from './StocksIndexItem.module.css';

const StocksIndexItem = ({ stockDetails }) => {

  return (
    <div className={styles.stocksItemContainer}>
      <Link to={`/stock/${stockDetails.exchangeShortName}/${stockDetails.symbol}`}>
        {stockDetails.companyName}
      </Link>
      <p>{stockDetails.symbol}</p>
      <p>{stockDetails.exchangeShortName}</p>
      <p>{`${stockDetails.price} ${stockDetails.currency}`}</p>
    </div>
  );
};

StocksIndexItem.propTypes = {
  stockDetails: PropTypes.shape({
    companyName: PropTypes.string,
    symbol: PropTypes.string,
    exchangeShortName: PropTypes.string,
    price: PropTypes.number,
    currency: PropTypes.string,
  }).isRequired,
};

export default StocksIndexItem;
