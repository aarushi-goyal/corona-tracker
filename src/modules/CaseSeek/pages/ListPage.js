import React from 'react';
import styled from 'styled-components';

import CaseFeed from '../components/CaseFeed';

const CaseFeedWrapper = styled.div`
`;

const PageContentWrapper = styled.div`
  min-height: 600px;
  padding: 50px;

  @media only screen and (max-width: 425px) {
    padding: 25px;
  }
`;

const SideBar = styled.div`
  width: 30%;
  @media only screen and (max-width: 1023px) {
    display: none;
  }
`;

class CaseSeek extends React.Component {
  render() {
    return (
      <CaseFeedWrapper>
        <PageContentWrapper>
          <CaseFeed />
          {/* <SideBar /> */}
        </PageContentWrapper>
      </CaseFeedWrapper>
    )
  }
}

CaseSeek.propTypes = {
};

export default CaseSeek;
