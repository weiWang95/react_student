import axios from './axios';

let http = {
  get: null,
  post: null,
  put: null,
  delete: null,
  request: null
}

http.request = (api, method, data) => {
  return new Promise((resolve, reject) => {
    axios[method](api, data).then(
      res => { resolve(res.data) },
      err => {
        if (reject !== undefined && typeof reject === 'function') {
          reject(err)
        }
      }
    )
  })
}

http.get = (url, data) => {
  return new Promise((resolve, reject) => {
    axios.get(url, { params: data }).then(
      res => { resolve(res.data) },
      err => {
        if (reject !== undefined && typeof reject === 'function') {
          reject(err)
        }
      }
    )
  });
}

http.post   = (api, data) => http.request(api, 'post',   data);
http.put    = (api, data) => http.request(api, 'put',    data);
http.delete = (api, data) => http.request(api, 'delete', data);

export default http