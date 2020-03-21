import React, { Component } from 'react';
import { Router, Switch, Route } from 'react-router-dom';
import LoginForm from './LoginForm';
import history from '../history';
import Home from './Home';
import MovieSearch from './MovieSearch';

// const userContext = React.createContext({ user: {}, isAuth: false });

class App extends Component {
  render() {
    return (
      <div
        className='ui container'
        style={{ height: '100%', marginTop: '20px' }}>
        <Router history={history}>
          <Switch>
            <Route path='/' exact component={LoginForm} />
            <Route path='/home' exact component={Home} />
            <Route path='/movieSearch' exact component={MovieSearch} />
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
