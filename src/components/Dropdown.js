import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import './Dropdown.css';

const Span = styled.div`
  width: 18px;
  box-shadow: 0 3px 31px 0 rgba(0,0,0,0.09);
  border: 9px solid transparent;
  border-bottom-color: #ffffff;
  border-top-width: 0px;
  margin-left: 13px;
  @media (max-width: 1023px) {  
    position: relative;
    z-index: 2;
  }
`;

const DropdownWrapper = styled.ul`
  color: #555555;
  line-height: 1.5;
  font-size: 14px;
  font-weight: 400;
  padding: 10px 0;
  border-top: 0;
  z-index: 1;
  min-width: 200px;
  width: max-content;
  border-radius: 5px;
  box-shadow: 0 3px 31px 0 rgba(0, 0, 0, 0.09);
  border: solid 1px #e9e9e9;
  position: absolute;
  background: #FFF;
  overflow: auto;
  overflow-y: auto;
  max-height: 60vh;
  left: 0px;
  right: ${props => props.showTip ? '' : '30px'}; 
  
  li {
    padding: 12px 13px;
  }

  li:hover {
    background-color: #eff3fa;
  }
`;

const ListWrapper = styled.li`
  font-size: 16px;
  padding: 0;
  padding-left: 7px;
  cursor: pointer;
`;
    
const Div = styled.div`
  height: 0px;
`;

const Dropdown = ({ options, onOptionClick, selected, showTip }) => (
  <Div>
    {showTip && <Span />}
    <DropdownWrapper showTip={showTip}>
      {
      options.map(option => (
        <ListWrapper
          key={option.id}
          value={option.id}
          onClick={onOptionClick}
          className={`${option.id === selected ? 'filter-option-selected' : ''}`}
        >
          {option.name}
        </ListWrapper>
      ))
      }
    </DropdownWrapper>
  </Div>
);

Dropdown.propTypes = {
  options: PropTypes.array,
  onOptionClick: PropTypes.func.isRequired,
  selected: PropTypes.number.isRequired,
  showTip: PropTypes.bool.isRequired,
};

export default Dropdown;
