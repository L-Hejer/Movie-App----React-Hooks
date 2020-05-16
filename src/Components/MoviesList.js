import React from 'react';
import MovieCard from './MovieCard/MovieCard';

const MoviesList = (props) => {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        flexWrap: 'wrap',
      }}
    >
      {props.moviesData
        .filter(
          (el) =>
            el.rating >= props.ratingSearch &&
            el.name
              .toLowerCase()
              .includes(props.nameSearch.toLowerCase().trim())
        )
        .map((el, i) => (
          <MovieCard key={i} movie={el} />
        ))}

    </div>
  );
};

export default MoviesList;
