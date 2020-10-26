import React, { useState } from 'react';
import Autosuggest from 'react-autosuggest';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchStocksSearchResults } from '../../actions/stocks';
import './SearchBar.css';

const getSuggestionValue = suggestion => suggestion.companyName;
const renderSuggestion = suggestion => (
  <div>
    {`${suggestion.companyName} - ${suggestion.exchangeShortName}`}
  </div>
);

const SearchBar = ({ stocksPool, submitSearch }) => {
  const [searchValue, setSearchValue] = useState('');
  const [suggestions, setSuggestions] = useState([]);

  const onChange = (event, { newValue }) => {
    setSearchValue(newValue);
  };

  const onSuggestionsClearRequested = () => {
    setSuggestions([]);
  };

  const getSuggestions = value => {
    if (value.length === 0) return [];
    const inputValue = value.trim();
    return stocksPool.filter(stock => {
      const substr = stock.companyName.toLowerCase().slice(0, inputValue.length);
      return substr === value;
    });
  };

  const onSuggestionsFetchRequested = ({ value }) => {
    setSuggestions(getSuggestions(value));
  };

  const onSuggestionSelected = (event, { suggestionValue }) => {
    submitSearch(suggestionValue);
    setSearchValue('');
  };

  const onKeyDown = event => {
    if (event.key === 'Enter' && (searchValue.length > 0)) {
      submitSearch(searchValue);
      setSearchValue('');
    }
  };

  const inputProps = {
    placeholder: 'Enter a stock name',
    value: searchValue,
    onKeyDown,
    onChange,
  };


  return (
    <Autosuggest
      suggestions={suggestions}
      onSuggestionsFetchRequested={onSuggestionsFetchRequested}
      onSuggestionsClearRequested={onSuggestionsClearRequested}
      getSuggestionValue={getSuggestionValue}
      renderSuggestion={renderSuggestion}
      onSuggestionSelected={onSuggestionSelected}
      inputProps={inputProps}
    />
  );
};

SearchBar.propTypes = {
  stocksPool: PropTypes.arrayOf(PropTypes.object).isRequired,
  submitSearch: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  stocksPool: state.stocks,
});

const mapDispatchToProps = dispatch => ({
  submitSearch: term => dispatch(fetchStocksSearchResults(term, 10)),
});

export default connect(mapStateToProps, mapDispatchToProps)(SearchBar);
