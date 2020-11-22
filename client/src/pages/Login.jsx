import React from 'react';

import Page from '../components/Page';
import FormInput from '../components/FormInput';
import Button from '../components/Button';

const Login = () => {
  return (
    <Page>
      <div className='row'>
        <div className='login block-center'>
          <div className='login__heading'>
            <h1>Log in</h1>
          </div>
          <form className='form'>
            <FormInput onChange={() => {}} value='' placeholder='Login' />
            <FormInput onChange={() => {}} value='' type='password' placeholder='Password' />

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
