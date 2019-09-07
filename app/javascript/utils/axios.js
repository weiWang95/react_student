import axios from 'axios';

import notify from './notify';
import redirect from './redirect';
import globalStore from '../stores/globalStore'

let instance = axios.create({
  baseURL: 'http://localhost:3000/api',
  timeout: 1000,
  xsrfCookieName: 'CSRF-TOKEN',
  xsrfHeaderName: 'X-CSRF-Token'
});

let requestList = [];

let removeRequest = (config) => {
  for(let index in requestList) {
    if (requestList[index].uuid === config.uuid) {
      requestList.splice(index, 1);
    }
  }
};
let cancelRequests = () => {
  requestList.forEach((req) => req.cancel())
  requestList = [];
};

let errorHandler = (error) => {
  let res = error.response;
  console.error("response: ", res, res.status, res.data)

  if (res.status == 422) {
    notify.info(res.data.errors)
    return
  }

  if (res.status == 404) {
    redirect('/r404')
    return
  }

  if (res.status == 403) {
    redirect('/r403')
    return
  }

  if (res.status == 401) {
    redirect('/login')
    return
  }

  if (res.status >= 500) {
    notify.error('系统错误')
    return
  }

  notify.error('网络异常')
}

// axios request interceptors
instance.interceptors.request.use(
  config => {
    console.log('axios request config', config);

    config.cancelToken = new axios.CancelToken((func) => {
      let uuid = `${config.method}::${config.url}::${new Date().getTime()}`;
      config.uuid = uuid;

      requestList.push({ uuid: uuid, cancel: func });
    });

    globalStore.changeLoadingState(requestList);

    return config;
  },
  error => {
    Promise.reject(error)
  }
);

//
instance.interceptors.response.use(
  response => {
    console.log('axios response config', response.config);
    removeRequest(response.config);
    globalStore.changeLoadingState(requestList);

    return response;
  },
  error => {
    removeRequest(error.response.config);
    globalStore.changeLoadingState(requestList);

    errorHandler(error);
    return Promise.reject(error);
  }
);

export default instance;