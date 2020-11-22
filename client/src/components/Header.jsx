import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.svg';

const Header = () => {
  return (
    <header className='header'>
      <div className='row'>
        <div className='header__inner'>
          <Link to='/'>
            <img className='header__logo' src={logo} alt='logo' />
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
