import { useId } from 'react';
import css from './SearchBox.module.css';

const SearchBox = ({ value, onChange }) => {
  const searchId = useId();
  return (
    <div className={css.searchBox}>
      <label htmlFor={searchId}>Find contacts by name</label>
      <input
        className={css.searchField}
        type="text"
        value={value}
        onChange={onChange}
        id={searchId}
      />
    </div>
  );
};

export default SearchBox;
