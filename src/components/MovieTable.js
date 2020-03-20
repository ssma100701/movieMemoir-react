import React from 'react';

export const MovieTable = props => {
  const movieContent = movieList => {
    return movieList.map(movie => {
      return (
        <tr key={movie.id}>
          <td>{movie.movie_name}</td>
          <td>{movie.release_date}</td>
          <td className='right aligned'>{movie.score}</td>
        </tr>
      );
    });
  };
  return (
    <table className='ui unstackable inverted blue table'>
      <thead>
        <tr>
          <th>Movie Name</th>
          <th>Release Date</th>
          <th className='right aligned'>Score</th>
        </tr>
      </thead>
      <tbody>{movieContent(props.movielist)}</tbody>
    </table>
  );
};
