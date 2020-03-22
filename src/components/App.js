import React, { Component } from 'react';
import { Router, Switch, Route } from 'react-router-dom';
import LoginForm from './LoginForm';
import history from '../history';
import Home from './Home';
import MovieSearch from './MovieSearch';
import Navbar from './Navbar.js';
import SignUp from './SignUp';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: {},
      isAuth: false
    };
  }

  login = user => {
    this.setState({
      user,
      isAuth: true
    });
  };

  render() {
    const value = {
      user: this.state.user,
      isAuth: this.state.isAuth,
      login: this.login
    };
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
  }
}

export default App;
