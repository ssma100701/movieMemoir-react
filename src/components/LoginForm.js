import React, { useState } from 'react';
import history from '../history';
import axios from './apis/axios';

const LoginForm = () => {
  const [errorMessage, setErrorMessage] = useState(false);

  const handleLogin = async event => {
    event.preventDefault();
    const username = event.target.username.value;
    const password = event.target.password.value;
    if (!username || !password) {
      setErrorMessage('invalid username or password');
      return;
    }
    try {
      const response = await axios.get(`/users/${username}/${password}`);
      console.log(response);
      history.push({ pathname: '/home', state: { user: response.data } });
    } catch (err) {
      setErrorMessage(err.response.data.message);
      console.error(err.response.data.message);
    }
  };

  return (
    <div
      className='ui middle aligned center aligned grid'
      style={{ height: '100%' }}>
      <div className='column' style={{ maxWidth: '450px' }}>
        <h2 className='ui image header'>
          <img src='assets/images/logo.png' className='image' alt='logo' />
          <div className='content'>Log-in to your account</div>
        </h2>
        <form className='ui large form' onSubmit={handleLogin}>
          <div className='ui stacked segment'>
            <div className='field'>
              <div className='ui left icon input'>
                <i className='user icon'></i>
                <input type='text' name='username' placeholder='Username' />
              </div>
            </div>
            <div className='field'>
              <div className='ui left icon input'>
                <i className='lock icon'></i>
                <input type='password' name='password' placeholder='Password' />
              </div>
            </div>
            <button className='ui fluid large blue submit button' type='submit'>
              Login
            </button>
          </div>

          <div
            className='ui error message'
            style={{ display: errorMessage ? 'block' : 'none' }}>
            {errorMessage}
          </div>
        </form>

        <div className='ui message'>
          New to us? <a href='\'>Sign Up</a>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
