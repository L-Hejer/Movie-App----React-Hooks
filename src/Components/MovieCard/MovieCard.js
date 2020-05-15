import React from 'react';
import Rate from '../Rate'
import './MovieCard.css';

const MovieCard = (props) => {
  return (
   
      <div className='container'>
        <div className='movie'>
          <div className='movie-rating'>
            <Rate rating={props.movie.rating}/>
          </div>
          <div className='movie-img'><img src={props.movie.image} alt='movie poster'/></div>
          <div className='text-movie-cont'>
            <div className='mr-grid'>
              <div className='col1'>
                <h2>{props.movie.name}</h2>
                <ul className='movie-gen'>
                  <p>{props.movie.date}</p>
                </ul>
              </div>
            </div>
            <div className='mr-grid summary-row'>
              <h5>SUMMARY</h5>
              <p>{props.movie.description}
              </p>
            </div>
            <div className='mr-grid action-row'>
              <div className='col2'>
                <div className='watch-btn'>
                  <h3>WATCH TRAILER</h3>
                </div>
              </div>
            </div>
          </div>
      </div>
    </div>
  );
};

export default MovieCard;
