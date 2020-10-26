import React from 'react';
import PropTypes from 'prop-types'
import styles from './StocksIndexItem.module.css';

const StocksIndexItem = ({ stockDetails }) => {
  return (
    <div className={styles.stocksItemContainer}>
      <p>{stockDetails.companyName}</p>
      <p>{stockDetails.symbol}</p>
      <p>{stockDetails.exchangeShortName}</p>
      <p>{`${stockDetails.price} ${stockDetails.currency}`}</p>
    </div>
  );
};

StocksIndexItem.propTypes = {
  stockDetails: PropTypes.shape({
    name: PropTypes.string,
    symbol: PropTypes.string,
    exchangeShortName: PropTypes.string,
    price: PropTypes.number,
    currency: PropTypes.string,
  }).isRequired,
};

export default StocksIndexItem;
