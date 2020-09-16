import React from 'react';
import PropTypes from 'prop-types';
import Navbar from './Navbar';
import Page from '../styled-components/Page';

const AppPage = ({ children }) => (
  <div>
    <Navbar />
    <Page>
      {children}
    </Page>
  </div>
);

export default AppPage;

AppPage.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};
