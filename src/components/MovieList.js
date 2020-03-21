import React from 'react';

const MovieList = ({ movies }) => {
  const renderContent = () => {
    return movies.map(movie => {
      return (
        <div className='card columns' key={movie.id}>
          <div className='image'>
            <img
              style={{ width: '290px', height: '400px' }}
              src={
                movie.poster_path
                  ? 'https://image.tmdb.org/t/p/w185/' + movie.poster_path
                  : 'assets/images/not-found-image.jpg'
              }
            />
          </div>
          <div className='content'>
            <div className='header'>{movie.title}</div>
            <div className='description'>{movie.release_date}</div>
          </div>
        </div>
      );
    });
  };

  return <div className='ui grid cards'>{renderContent()}</div>;
};

export default MovieList;
