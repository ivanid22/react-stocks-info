import React from 'react';
import PropTypes from 'prop-types';
import styles from './StocksFilterSelect.module.scss';

const renderOptions = options => options.map(option => (
  <option key={`${option}-key`} className={styles.option}>
    { option }
  </option>
));

const StocksFilterSelect = ({ onChange, options }) => (
  <select className={styles.select} onChange={onChange}>
    { renderOptions(options) }
  </select>
);

StocksFilterSelect.propTypes = {
  onChange: PropTypes.func.isRequired,
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default StocksFilterSelect;
