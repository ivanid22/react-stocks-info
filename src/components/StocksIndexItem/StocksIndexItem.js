import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import styles from './StocksIndexItem.module.scss';

const StocksIndexItem = ({ stockDetails }) => {
  return (
    <Link
      className={styles.containerAnchor}
      to={`/stock/${stockDetails.exchangeShortName}/${stockDetails.symbol}`}
    >
      <div className={styles.stocksItemContainer}>
        <img
          src={stockDetails.image}
          className={styles.coverImage}
          alt="stock cover"
        />
        <div className={styles.fieldsContainer}>
          <p
            className={styles.itemLink}
          >
            {stockDetails.companyName}
          </p>
          <p>{stockDetails.symbol}</p>
          <p>{stockDetails.exchangeShortName}</p>
        </div>
      </div>
    </Link>
  );
};

StocksIndexItem.propTypes = {
  stockDetails: PropTypes.shape({
    companyName: PropTypes.string,
    symbol: PropTypes.string,
    exchangeShortName: PropTypes.string,
    image: PropTypes.string,
  }).isRequired,
};

export default StocksIndexItem;
