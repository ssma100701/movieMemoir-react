import React, { Component } from 'react';
import { Router, Switch, Route } from 'react-router-dom';
import LoginForm from './LoginForm';
import history from '../history';
import Home from './Home';
import MovieSearch from './MovieSearch';
import Navbar from './Navbar.js';
import SignUp from './SignUp';

const App = () => {
  return (
    <React.Fragment>
      <Navbar />
      <div
        className='ui container'
        style={{ height: '100%', marginTop: '20px' }}>
        <Router history={history}>
          <Route path='/' exact component={LoginForm} />
          <Switch>
            <Route path='/signup' exact component={SignUp} />
            <Route path='/home' exact component={Home} />
            <Route path='/movieSearch' exact component={MovieSearch} />
          </Switch>
        </Router>
      </div>
    </React.Fragment>
  );
};

export default App;
