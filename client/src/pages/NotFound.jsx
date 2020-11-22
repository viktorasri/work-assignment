import React from 'react';
import { Link } from 'react-router-dom';

import Page from '../components/Page';
import Button from '../components/Button';

const NotFound = () => {
  return (
    <Page title='404 Not Found'>
      <div className='row'>
        <div className='not-found block-center text-center'>
          <div className='not-found__sub-heading'>
            <h2>Error 404</h2>
          </div>
          <div className='not-found__heading'>
            <h1>Oops! Something went wrong.</h1>
          </div>

          <div className='d-flex justify-center'>
            <Link to='/'>
              <Button variant='primary'>Back to Homepage</Button>
            </Link>
          </div>
        </div>
      </div>
    </Page>
  );
};

export default NotFound;
