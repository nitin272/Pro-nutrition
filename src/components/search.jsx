import React from 'react';
import '../App.css';

const Search = ({ handleSearch }) => {
  return (
    <div>
      <div className='src'>
        <h2>Search</h2>
        <input type="search" className='srcbox' onChange={(e) => handleSearch(e)} />
      </div>
    </div>
  );
};

export default Search;
