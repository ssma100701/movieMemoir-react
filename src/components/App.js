import React from 'react';
import { Router, Switch, Route } from 'react-router-dom';
import LoginForm from './LoginForm';
import history from '../history';
import Home from './Home';
const App = () => {
  return (
    <div className='ui container' style={{ height: '100%' }}>
      <Router history={history}>
        <Switch>
          <Route path='/login' exact component={LoginForm} />
          <Route path='/' exact component={Home} />
        </Switch>
      </Router>
    </div>
  );
};

export default App;
