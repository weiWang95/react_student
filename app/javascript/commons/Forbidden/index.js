import React from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';

import './index.scss';

class Forbidden extends React.Component {
  render() {
    return (
      <div className='d-flex flex-column align-items-center justify-content-center not-found'>
        <div className='not-found-img'>
          <span>403</span>
        </div>
        <div className='not-found-text'>{ this.props.text }</div>
      </div>
    )
  }
}

Forbidden.defaultProps = {
  text: '没有权限'
}

Forbidden.propTypes = {
  text: PropTypes.string
}

export default withRouter(Forbidden);