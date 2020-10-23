import React, { useState } from 'react';
import Autosuggest from 'react-autosuggest';
import './SearchBar.css';

const testSuggestions = [
  {
    symbol: 'MELI',
    name: 'Mercadolibre',
    exchange: 'NASDAQ',
  },
  {
    symbol: 'GOOGL',
    name: 'Alphabet',
    exchange: 'NASDAQ',
  },
  {
    name: 'Altest',
  },
];

const getSuggestions = value => {
  if (value.length === 0) return [];
  const inputValue = value.trim().toLowerCase();

  return testSuggestions.filter(stock => {
    const substr = stock.name.toLowerCase().slice(0, inputValue.length);
    return substr === value;
  });
};

const getSuggestionValue = suggestion => suggestion.name;
const renderSuggestion = suggestion => (
  <div>
    {suggestion.name}
  </div>
);

const SearchBar = () => {
  const [searchValue, setSearchValue] = useState('');
  const [suggestions, setSuggestions] = useState([]);

  const onSuggestionsClearRequested = () => {
    setSuggestions([]);
  };

  const onSuggestionsFetchRequested = ({ value }) => {
    setSuggestions(getSuggestions(value));
  };

  const onChange = (event, { newValue }) => {
    setSearchValue(newValue);
  };

  const inputProps = {
    placeholder: 'Enter a stock name',
    value: searchValue,
    onChange,
  };

  return (
    <Autosuggest
      suggestions={suggestions}
      onSuggestionsFetchRequested={onSuggestionsFetchRequested}
      onSuggestionsClearRequested={onSuggestionsClearRequested}
      getSuggestionValue={getSuggestionValue}
      renderSuggestion={renderSuggestion}
      inputProps={inputProps}
    />
  );
};

export default SearchBar;
