import React from 'react';
import PropTypes from 'prop-types';
import './CaseBlock.css';

class Case extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showDateHover: true
    }
  }

  render() {
    const { title, number } = this.props;
    return (
      <div className='jobRow col-lg-3 col-sm-3'>
        <p>{title}</p>
        <p>{number}</p>
      </div>
    )
  }
}

Case.propTypes = {
  title: PropTypes.string,
};

export default Case;