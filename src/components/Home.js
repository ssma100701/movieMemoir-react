import React, { useEffect, useState, useContext } from 'react';
import axios from '../apis/axios';
import { MovieTable } from './MovieTable';
import { AuthContext } from './Main';

const Home = props => {
  const [movies, setMovies] = useState('');
  const authState = useContext(AuthContext);
  const newDate = new Date();
  const date = newDate.getDate();
  const month = newDate.getMonth() + 1;
  const year = newDate.getFullYear();
  console.log(authState);
  // useEffect(() => {
  //   const fetchMovies = async id => {
  //     const response = await axios.get(`/users/${id}`);
  //     console.log(response);
  //     console.log(typeof response.data);
  //     setMovies(response.data);
  //   };
  //   fetchMovies(authState.user.id);
  // }, [authState.user.id]);
  useEffect(() => {});

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
