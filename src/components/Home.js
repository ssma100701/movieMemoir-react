import React, { useEffect, useState } from 'react';
import axios from './apis/axios';
import { MovieTable } from './MovieTable';

const Home = props => {
  const [movies, setMovies] = useState('');
  const newDate = new Date();
  const date = newDate.getDate();
  const month = newDate.getMonth() + 1;
  const year = newDate.getFullYear();

  useEffect(() => {
    const fetchMovies = async id => {
      const response = await axios.get(`/users/${id}`);
      console.log(response);
      console.log(typeof response.data);
      setMovies(response.data);
    };
    fetchMovies(props.location.state.user.id);
  }, [props.location.state.user.id]);

  return (
    <div>
      <h1>Welcome to Movie Memoir</h1>
      <h3 className='ui right aligned header'>
        Today is {year}-{month}-{date}
      </h3>
      <img
        src='assets/images/monash.jpg'
        alt='welcome'
        className='ui centered large image'
      />

      <div className='ui segment'>
        <h2 className='ui center aligned header'>Top Five Movies</h2>
        {movies ? <MovieTable movielist={movies} /> : ''}
      </div>
    </div>
  );
};

export default Home;
