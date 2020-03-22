import React, { Fragment, useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import history from '../history';
import axios from '../apis/axios';

const SignUp = () => {
  const [errorMessage, setErrorMessage] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    surname: '',
    gender: '',
    dob: '',
    address: '',
    state: '',
    postcode: '',
    email: '',
    password: '',
    repassword: ''
  });

  const handleSubmit = async e => {
    e.preventDefault();
    if (formData.password !== formData.repassword) {
      setErrorMessage('Password not match');
      return;
    } else {
      setErrorMessage('');
      console.log(formData);
      try {
        const response = await axios.post('/users/signup', formData);
        console.log(response);
        history.push({ pathname: '/home', state: { user: response.data } });
      } catch (err) {
        setErrorMessage(err.response.data.message);
        console.error(err.response.data.message);
      }
    }
  };

  const onChange = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleDatePick = date => {
    const dob = [
      date.getFullYear(),
      ('0' + (date.getMonth() + 1)).slice(-2),
      ('0' + date.getDate()).slice(-2)
    ].join('-');
    setFormData({ ...formData, dob });
  };

  return (
    <Fragment>
      <div
        className='ui error message'
        style={{ display: errorMessage ? 'block' : 'none' }}>
        {errorMessage}
      </div>
      <form className='ui form' onSubmit={handleSubmit}>
        <div className='field'>
          <label>First Name</label>
          <input
            type='text'
            name='name'
            placeholder='First Name'
            onChange={e => onChange(e)}
            required
          />
        </div>
        <div className='field'>
          <label>Last Name</label>
          <input
            type='text'
            name='surname'
            placeholder='Last Name'
            required
            onChange={e => onChange(e)}
          />
        </div>
        <div className='field'>
          <label>Gender</label>
          <div className='inline fields'>
            <label htmlFor='gender'>
              <h4>Select your gender:</h4>
            </label>
            <div className='field'>
              <div className='ui radio checkbox'>
                <input
                  type='radio'
                  name='gender'
                  value='male'
                  onClick={e => onChange(e)}
                  required
                />
                <label>Male</label>
              </div>
            </div>
            <div className='field'>
              <div className='ui radio checkbox'>
                <input
                  type='radio'
                  name='gender'
                  value='female'
                  onClick={e => onChange(e)}
                />
                <label>Female</label>
              </div>
            </div>
          </div>
        </div>
        <div className='field'>
          <label>Date of Birth</label>
          <DatePicker
            value={formData.dob}
            onChange={handleDatePick}
            dateFormat='yyyy-MM-dd'
            placeholderText='Select Date of Birth'
          />
        </div>
        <div className='field'>
          <label>Address</label>
          <input
            type='text'
            name='address'
            placeholder='Address'
            required
            onChange={e => onChange(e)}
          />
        </div>
        <div className='field'>
          <label>State</label>
          <select
            className='ui search dropdown'
            name='state'
            required
            onChange={e => onChange(e)}>
            <option value=''>State</option>
            <option value='ACT'>ACT</option>
            <option value='NSW'>NSW</option>
            <option value='QLD'>QLD</option>
            <option value='SA'>SA</option>
            <option value='TAS'>TAS</option>
            <option value='VIC'>VIC</option>
            <option value='WA'>WA</option>
          </select>
        </div>
        <div className='field'>
          <label>Postcode</label>
          <input
            type='text'
            name='postcode'
            placeholder='Postcode'
            required
            onChange={e => onChange(e)}
          />
        </div>
        <div className='field'>
          <label>Email</label>
          <input
            type='email'
            name='email'
            placeholder='Email'
            required
            onChange={e => onChange(e)}
          />
        </div>
        <div className='field'>
          <label>Password</label>
          <input
            type='password'
            name='password'
            placeholder='Password'
            required
            onChange={e => onChange(e)}
          />
        </div>
        <div className='field'>
          <label>Confirm Password</label>
          <input
            type='password'
            name='repassword'
            placeholder='Confirm Password'
            required
            onChange={e => onChange(e)}
          />
        </div>
        <button className='ui primary button' type='submit'>
          Submit
        </button>
      </form>
    </Fragment>
  );
};

export default SignUp;
