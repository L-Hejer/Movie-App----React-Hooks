import React from 'react';

import Rate from '../Rate';

import './Search.css';

const Search = (props) => {
  return (
    <div>
      <div className='search-container'>
        <input
          type='text'
          placeholder='Type movie name to search'
          onChange={(e) => props.setNameSearch(e.target.value)}
        />
        <Rate
          className='star-rating'
          starIndex={props.setRatingSearch}
          rating={props.ratingSearch}
        />
      </div>
    </div>
  );
};

export default Search;
