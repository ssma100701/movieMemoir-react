import React from 'react';

const Navbar = () => {
  return (
    <div className='ui blue large inverted  menu'>
      <a className='active item'>Home</a>
      <a className='item'>Movie Search</a>
      <div className='right menu'>
        <div className='item'>
          <div className='ui primary button'>Sign Up</div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
