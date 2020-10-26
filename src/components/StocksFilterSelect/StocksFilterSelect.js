import React from 'react';
import PropTypes from 'prop-types';

const renderOptions = options => options.map(option => (
  <option key={`${option}-key`}>
    { option }
  </option>
));

const StocksFilterSelect = ({ onChange, options }) => (
  <select onChange={onChange}>
    { renderOptions(options) }
  </select>
);

StocksFilterSelect.propTypes = {
  onChange: PropTypes.func.isRequired,
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default StocksFilterSelect;
