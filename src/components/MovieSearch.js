import React, { useState, useEffect } from 'react';
// import axios from 'axios';
import MovieList from './MovieList';
import moviedb from '../apis/moviedb';

const MovieSearch = () => {
  const [searchText, setSearchText] = useState();
  const [movieResult, setMovieResult] = useState();

  const handleChange = e => {
    setSearchText(e.target.value);
  };

  const handleClick = async () => {
    const response = await moviedb.get('', {
      params: {
        api_key: 'aec8ba77a8e7ab04cd5bd603e6941122',
        query: searchText
      }
    });
    console.log(response.data);
    setMovieResult(response.data.results);
  };

  const renderMovies = movieList => {
    console.log(movieList);
    if (movieList) {
      return movieList.map(movie => {
        return <div key={movie.id}>{movie.title}</div>;
      });
    }
    return <div>Loading</div>;
  };

  return (
    <div>
      <h1 className='ui center aligned header'>Movie Search</h1>
      <div className='ui search'>
        <div className='ui icon input fluid'>
          <input
            className='prompt'
            type='text'
            placeholder='Common passwords...'
            onChange={handleChange}
          />
          <button
            onClick={handleClick}
            className='ui icon primary basic button'
            style={{ marginLeft: '10px' }}>
            <i className='search icon'></i>
          </button>
        </div>

        <div>
          <h3
            className='ui center aligned header'
            style={{ marginTop: '20px' }}>
            Movie List
          </h3>
          {movieResult ? <MovieList movies={movieResult} /> : ''}
        </div>
      </div>
    </div>
  );
};

export default MovieSearch;
