import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { createStructuredSelector } from 'reselect';
import { connect } from 'react-redux';
import map from 'lodash/map';

import { getCaseFeed } from '../../selectors';
import './CaseFeed.css';
import { getCaseFeeds } from '../../api';
import CaseBlock from '../CaseBlock';
import Dropdown from '../../../../components/Dropdown';
import { stateOptions } from '../../../../utils/dropdownOptions';
import Loader from '../../../../components/Loader';

const Wrapper = styled.div`
  display: inline-block;
  vertical-align: top;
  position: relative;

  @media screen and (max-width: 1023px) {
    width: 100%;
  }
`;

class CaseFeed extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showDropdown: false,
      title: 'Current Data',
      state: 0,
      caseData: {}
    }
  }

  componentDidMount() {
    this.props.dispatch(getCaseFeeds());
  }

  onChange(newValue, e) {
    console.log('onChange', newValue, e);
  }

  openDropdown = (e) => {
    e.preventDefault();
    this.setState({ showDropdown: true }, () => {
      document.addEventListener('click', this.closeDropdown);
    });
  }

  closeDropdown = () => {
    this.setState({ showDropdown: false }, () => {
      document.removeEventListener('click', this.closeDropdown);
    });
  }

  onClickState = value => (e) => {
    e.preventDefault();
    const { caseFeed } = this.props;
    this.setState({ state: e.target.value })
    this.setState({ caseData: caseFeed.find(data => data.sno == e.target.value )})
  }

  render() {
    const { caseFeed }= this.props;
    const { state, showDropdown, caseData } = this.state;
    console.log(caseFeed, '=====casefeed====');
    let caseList = caseFeed.find(data => data.sno == '11111');
    if (caseList) {
      return (
        <Wrapper>
          <h1 className='job-heading'>{this.state.title}</h1>
          <div className='row'>
            <CaseBlock title={'Total Confirmed'} number={caseList['new_positive']} />
            <CaseBlock title={'Total Recovered'} number={caseList['new_cured']} />
            <CaseBlock title={'Total Deaths'} number={caseList['new_death']} />
            <div className='jobRow col-lg-3 col-sm-3 col-xs-3'>
              <p>Recovery Rate: {(caseList['new_cured'] * 100 / caseList['new_positive']).toFixed(2)}%</p>
              <p>Death Rate: {(caseList['new_death'] * 100 / caseList['new_positive']).toFixed(2)}%</p>
            </div>
          </div>
          <div className='filter-by-state'>
            <h1 className='filter-heading'>Filter by State</h1>
            <div className='filter-label' onClick={this.openDropdown}>
              <span>{state ? stateOptions.find(s => s.id == state).name :  'Select State'}</span>
            </div>
            {showDropdown && <Dropdown
              options={stateOptions}
              onOptionClick={this.onClickState()}
              selected={state}
              showTip={true}
            />}
             <div className='row'>
              <CaseBlock title={'Total Confirmed'} number={caseData['new_positive']} />
              <CaseBlock title={'Total Recovered'} number={caseData['new_cured']} />
              <CaseBlock title={'Total Deaths'} number={caseData['new_death']} />
              <div className='jobRow col-lg-3 col-sm-3 col-xs-3'>
                <p>Recovery Rate: {state ? (caseData['new_cured'] * 100 / caseData['new_positive']).toFixed(2) : '0'}%</p>
                <p>Death Rate: {state ? (caseData['new_death'] * 100 / caseData['new_positive']).toFixed(2) : '0'}%</p>
              </div>
            </div>
          </div>
          <div>
            <h1 className='filter-heading'>State wise statistics of India</h1>
            <div className='distribution row'>
              <div className='col-lg-6 bold'>
                DISTICT
              </div>
              <div className='col-lg-2 bold'>
                CNFRM
              </div>
              <div className='col-lg-2 bold'>
                RCVRD
              </div>
              <div className='col-lg-2 bold'>
                DEAD
              </div>
            </div>
            {map(caseFeed, option => (
              <div className='distribution row'>
                <div className='col-lg-6'>
                  {option.state_name || 'India'}
                </div>
                <div className='col-lg-2'>
                  {option.new_positive}
                </div>
                <div className='col-lg-2'>
                  {option.new_cured}
                </div>
                <div className='col-lg-2'>
                  {option.new_death}
                </div>
              </div>
            ))}
          </div>
        </Wrapper>
      );
    }
    return <div>
      <Loader />
    </div>

  }
}

const mapStateToProps = createStructuredSelector({
  caseFeed: getCaseFeed,
});

const mapDispatchToProps = dispatch => ({
  dispatch,
});

CaseFeed.propTypes = {
  caseFeed: PropTypes.array,
};

export default connect(mapStateToProps, mapDispatchToProps)(CaseFeed);
