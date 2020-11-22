import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import Page from '../components/Page';
import FormInput from '../components/FormInput';
import Button from '../components/Button';
import Spinner from '../components/Spinner';
import Message from '../components/Message';
import { login } from '../redux/actions/userActions';

const Login = ({ history }) => {
  const dispatch = useDispatch();

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const userLogin = useSelector((state) => state.userLogin);
  const { error, success, loading } = userLogin;

  useEffect(() => {
    if (success) history.push('/');
  }, [success, history]);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(login(username, password));
  };

  return (
    <Page>
      <div className='row'>
        <div className='login block-center'>
          {loading && <Spinner />}
          {error && <Message>{error}</Message>}

          <div className='login__heading'>
            <h1>Log in</h1>
          </div>

          <form className='form' onSubmit={handleSubmit}>
            <FormInput
              onChange={(e) => setUsername(e.target.value)}
              value={username}
              placeholder='Enter Username'
              required
            />
            <FormInput
              onChange={(e) => setPassword(e.target.value)}
              value={password}
              type='password'
              placeholder='Enter Password'
              required
            />

            <div className='form__control d-flex justify-center'>
              <Button variant='primary' type='submit'>
                Login
              </Button>
            </div>
          </form>
        </div>
      </div>
    </Page>
  );
};

export default Login;
