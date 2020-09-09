import React, { useState } from 'react';

const SearchBar = ({ onSearchSubmit }) => {
  const [term, setTerm] = useState('');

  const onFormSubmit = (e) => {
    e.preventDefault();
    onSearchSubmit(term);
  };

  return (
    <div className='ui segment'>
      <form className='ui form' onSubmit={onFormSubmit}>
        <div className='field'>
          <label>Image Search</label>
          <input
            value={term}
            onChange={(e) => setTerm(e.target.value)}
            type='text'
          />
        </div>
      </form>
    </div>
  );
};

export default SearchBar;
