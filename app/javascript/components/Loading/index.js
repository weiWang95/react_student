import React from 'react';
import { inject, observer } from "mobx-react";
import { Spin, Alert } from "antd";

import './index.scss';

@inject('globalStore')
@observer
class Loading extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className='global-loading'>
        <Spin spinning={ this.props.globalStore.loading } tip='Loading' size='large'/>
      </div>
    )
  }
}

export default Loading;