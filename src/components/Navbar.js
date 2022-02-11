import React from 'react';
import LoginIcon from '@mui/icons-material/Login';
import AppRegistrationIcon from '@mui/icons-material/AppRegistration';
import SearchIcon from '@mui/icons-material/Search';

const Navbar = () => {
  return (
    <nav className='navbar'>
      <div className='logo'>
        <a href='/'>
          <img src='./logo.png' alt='LOGO' />
          <h1>Nearme</h1>
        </a>
      </div>

      <div className='search'>
        <input type='search' placeholder='Search...' />
        <SearchIcon />
      </div>
      <div className='links'>
        <a href='/login'>
          {' '}
          <LoginIcon />
          Login
        </a>
        <a href='/register' className='resgister'>
          <AppRegistrationIcon />
          Register
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
