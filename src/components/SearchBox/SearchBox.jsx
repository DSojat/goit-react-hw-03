import { useId } from 'react';
import css from './SearchBox.module.css';

const SearchBox = ({ inputValue, handleChange }) => {
  const searchId = useId();
  return (
    <div className={css.searchBox}>
      <label htmlFor={searchId}>Find contacts by name</label>
      <input
        className={css.searchField}
        type="text"
        value={inputValue}
        onChange={handleChange}
        id={searchId}
      />
    </div>
  );
};

export default SearchBox;
