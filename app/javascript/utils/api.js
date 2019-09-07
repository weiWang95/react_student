import http from './http'

const getCurrentUser = () => http.get('/sessions')

const login = (username, password) => {
  let data = { username: username, password: password }
  return http.post('/sessions', data)
}

const logout = () => http.delete('/sessions')

export default {
  getCurrentUser,
  login,
  logout
}