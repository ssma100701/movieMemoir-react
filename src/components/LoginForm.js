import React, { useState } from 'react';
import history from '../history';
import axios from '../apis/axios';
import { AuthContext } from './Main';

const LoginForm = (props) => {
  const { dispatch } = React.useContext(AuthContext);
  const initialState = {
    email: '',
    password: '',
    errorMessage: false,
  };

  const [data, setData] = React.useState(initialState);

  const handleChange = (event) => {
    setData({
      ...data,
      [event.target.name]: event.target.value,
    });
  };

  const handleLogin = async (event) => {
    event.preventDefault();
    if (!data.email || !data.password) {
      setData({
        ...data,
        errorMessage: 'invalid email or password',
      });
      return;
    }
    try {
      const response = await axios.get(`/users/${data.email}/${data.password}`);
      console.log(response);
      dispatch({
        type: 'LOGIN',
        payload: response.data,
      });
      history.push({ pathname: '/home' });
    } catch (err) {
      setData({
        ...data,
        errorMessage: err.response.data.message,
      });
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
                <input
                  type='email'
                  name='email'
                  placeholder='Email'
                  onChange={handleChange}
                />
              </div>
            </div>
            <div className='field'>
              <div className='ui left icon input'>
                <i className='lock icon'></i>
                <input
                  type='password'
                  name='password'
                  placeholder='Password'
                  onChange={handleChange}
                />
              </div>
            </div>
            <button className='ui fluid large blue submit button' type='submit'>
              Login
            </button>
          </div>

          <div
            className='ui error message'
            style={{ display: data.errorMessage ? 'block' : 'none' }}>
            {data.errorMessage}
          </div>
        </form>

        <div className='ui message'>
          New to us? <a href='\'>Sign Up!!!!!!!!</a>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
