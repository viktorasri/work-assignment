import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';

import logo from '../assets/logo.svg';
import Button from './Button';
import { logout } from '../redux/actions/userActions';

const Header = () => {
  const dispatch = useDispatch();

  const userLogin = useSelector((state) => state.userLogin);
  const { success } = userLogin;

  const logoutHandler = () => {
    dispatch(logout());
  };

  return (
    <header className='header'>
      <div className='row'>
        <div className='header__inner'>
          <Link to='/'>
            <img className='header__logo' src={logo} alt='logo' />
          </Link>
          {success && (
            <Button onClick={logoutHandler} variant='secondary'>
              Logout
            </Button>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
