import React, { useState } from "react";
import "./Autocomplete.css";

interface AutocompleteProps {
  options: string[];
}

const Autocomplete: React.FC<AutocompleteProps> = ({ options }) => {
  const [inputValue, setInputValue] = useState("");
  const [filteredOptions, setFilteredOptions] = useState<string[]>([]);
  const [showDropdown, setShowDropdown] = useState(false);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = event.target.value;
    setInputValue(inputValue);

    const filteredOptions = options.filter(option =>
      option.toLowerCase().startsWith(inputValue.toLowerCase())
    );
    setFilteredOptions(filteredOptions);
    setShowDropdown(true);
  };

  const handleOptionClick = (option: string) => {
    setInputValue(option);
    setFilteredOptions([]);
    setShowDropdown(false);
  };

  return (
    <div className="autocomplete">
      <input
        type="text"
        value={inputValue}
        onChange={handleInputChange}
        className="autocomplete-input"
        placeholder="Type something..."
      />
      {showDropdown && (
        <ul className="autocomplete-dropdown">
          {filteredOptions.map(option => (
            <li
              key={option}
              onClick={() => handleOptionClick(option)}
              className="autocomplete-option"
            >
              {option}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Autocomplete;
