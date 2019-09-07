import React from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';

import './index.scss';

class NotFound extends React.Component {
  render() {
    return (
      <div className='d-flex flex-column align-items-center justify-content-center not-found'>
        <div className='not-found-img'>
          <span>404</span>
        </div>
        <div className='not-found-text'>{ this.props.text }</div>
      </div>
    )
  }
}

NotFound.defaultProps = {
  text: '资源未找到'
}

NotFound.propTypes = {
  text: PropTypes.string
}

export default withRouter(NotFound);