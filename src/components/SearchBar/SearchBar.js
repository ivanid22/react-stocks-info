import React, { useState } from 'react';
import Autosuggest from 'react-autosuggest';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { useHistory } from 'react-router';
import { fetchStocksSearchResults } from '../../actions/stocks';
import './SearchBar.css';

const getSuggestionValue = suggestion => suggestion.companyName;
const renderSuggestion = suggestion => (
  <div>
    {`${suggestion.companyName} - ${suggestion.exchangeShortName}`}
  </div>
);

const SearchBar = ({ stocksPool, submitSearch, hideSearchBar }) => {
  const [searchValue, setSearchValue] = useState('');
  const [suggestions, setSuggestions] = useState([]);
  const history = useHistory();

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

  const onSuggestionSelected = (event, { suggestion }) => {
    history.push(`/stock/${suggestion.exchangeShortName}/${suggestion.symbol}`);
    setSearchValue('');
  };

  const onKeyDown = event => {
    switch (event.key) {
      case 'Enter':
        if (searchValue.length > 0) submitSearch(searchValue);
        hideSearchBar();
        setSearchValue('');
        history.push('/');
        break;
      case 'Escape':
        setSearchValue('');
        hideSearchBar();
        break;
      default:
    }
  };

  const onBlur = () => {
    hideSearchBar();
    setSearchValue('');
  };

  const inputProps = {
    placeholder: 'Enter a stock name',
    value: searchValue,
    onKeyDown,
    onChange,
    onBlur,
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
  hideSearchBar: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  stocksPool: state.stocks,
});

const mapDispatchToProps = dispatch => ({
  submitSearch: term => dispatch(fetchStocksSearchResults(term)),
});

export default connect(mapStateToProps, mapDispatchToProps)(SearchBar);
