import React from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';

const Page = ({ children, title, description }) => {
  return (
    <>
      <Helmet>
        <title>{`${title ? title + ' | ' : ''}Server Explorer`}</title>
        <meta name='description' content={description} />
      </Helmet>
      <main className='page'>{children}</main>
    </>
  );
};

Page.defaultProps = {
  description: 'Server explorer web app',
};

Page.propTypes = {
  description: PropTypes.string,
  title: PropTypes.string,
};

export default Page;
