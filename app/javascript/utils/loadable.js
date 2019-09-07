import React from 'react';
import Loadable from 'react-loadable';

import Loading from '../components/Loading/index'

export default (loader,loading = Loading) => {
  return Loadable({
    loader,
    loading
  });
}