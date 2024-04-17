import { useId } from 'react';

const SearchBox = () => {
  const searchId = useId();
  return (
    <form>
      <label htmlFor={searchId}>Find contacts by name</label>
      <input type="text" name="search" id={searchId} />
    </form>
  );
};

export default SearchBox;
