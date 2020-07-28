import React, { useState } from 'react';
import Autosuggest from 'react-autosuggest';

const getSuggestionValue = (suggestion) => suggestion.name;

const renderSuggestion = (suggestion) => <div>{suggestion.name}</div>;

const ReactAutoSuggest = ({ data, value, placeholder, onChange }) => {
  const [valueState, setValueState] = useState(value);
  const [dataState] = useState(data || []);
  const [suggestions, setSuggestions] = useState([]);

  const getSuggestions = (val) => {
    if (val) {
      const inputValue = val.trim().toLowerCase();
      const inputLength = inputValue.length;

      return inputLength === 0
        ? []
        : dataState.filter(
            (d) => d.name.toLowerCase().slice(0, inputLength) === inputValue
          );
    }
    return dataState;
  };

  const changeInput = (event, { newValue }) => {
    setValueState(newValue);
    onChange(newValue);
  };

  const onSuggestionsFetchRequested = ({ value: val }) => {
    setSuggestions(getSuggestions(val));
  };

  const onSuggestionsClearRequested = () => {
    setSuggestions([]);
  };

  const inputProps = {
    placeholder: placeholder || '',
    value: valueState,
    onChange: changeInput,
  };

  return (
    <Autosuggest
      suggestions={suggestions}
      onSuggestionsFetchRequested={onSuggestionsFetchRequested}
      onSuggestionsClearRequested={onSuggestionsClearRequested}
      getSuggestionValue={getSuggestionValue}
      renderSuggestion={renderSuggestion}
      inputProps={inputProps}
      theme={{
        container: 'autosuggest',
        input: 'form-control',
        inputOpen: 'react-autosuggest__input--open',
        suggestionsContainer: 'react-autosuggest__suggestions-container',
        suggestionsContainerOpen:
          'react-autosuggest__suggestions-container--open',
        suggestionsList: `react-autosuggest__suggestions-list ${
          suggestions.length ? 'show' : ''
        }`,
        suggestionFocused: 'active',
        suggestion: 'react-autosuggest__suggestion',
      }}
    />
  );
};

export default ReactAutoSuggest;
