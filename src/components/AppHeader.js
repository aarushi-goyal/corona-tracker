import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import './Header.css';

const AppHeaderWrapper = styled.header`
  background-color: white;
  margin: 0px;
  border: 1px solid;
  padding: 10px;
  text-align: center;
  color: black;
  box-shadow: 0 5px 15px 0 rgba(0,0,0,.09);
`;

const AppHeader = ({ push }) => (
  <AppHeaderWrapper>
    <div>
      <h1>Corona Tracker</h1>
    </div>
  </AppHeaderWrapper>
);

AppHeader.propTypes = {
  push: PropTypes.func.isRequired,
};

export default AppHeader;
