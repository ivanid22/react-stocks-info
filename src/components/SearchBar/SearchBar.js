import React, { useState, useEffect } from 'react';
import Autosuggest from 'react-autosuggest';
import axios from 'axios';
import './SearchBar.css';

const getSuggestionValue = suggestion => suggestion.name;
const renderSuggestion = suggestion => (
  <div>
    {`${suggestion.name} - ${suggestion.exchange}`}
  </div>
);

const SearchBar = () => {
  const [searchValue, setSearchValue] = useState('');
  const [suggestions, setSuggestions] = useState([]);

  const onChange = (event, { newValue }) => {
    setSearchValue(newValue);
  };

  const inputProps = {
    placeholder: 'Enter a stock name',
    value: searchValue,
    onChange,
  };

  useEffect(() => {
    // Fetch suggestions from API whenever the search value changes
    axios.get(`${process.env.REACT_APP_API_URL}/search`, {
      params: {
        query: inputProps.value,
        limit: 10,
        apikey: process.env.REACT_APP_API_KEY,
      },
    }).then(response => {
      console.log('response ', response);
      setSuggestions(response.data.map(item => (
        {
          name: item.name,
          exchange: item.exchangeShortName,
        }
      )));
    });
  }, [inputProps.value]);

  const onSuggestionsClearRequested = () => {
    setSuggestions([]);
  };

  const getSuggestions = value => {
    if (value.length === 0) return [];
    const inputValue = value.trim().toLowerCase();
    return suggestions.filter(stock => {
      const substr = stock.name.toLowerCase().slice(0, inputValue.length);
      return substr === value;
    });
  };

  const onSuggestionsFetchRequested = ({ value }) => {
    setSuggestions(getSuggestions(value));
  };

  const onSuggestionSelected = (event, { suggestion, suggestionValue }) => {
    
  }

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

export default SearchBar;
