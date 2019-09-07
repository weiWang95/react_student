import { message } from 'antd';

let notifyFunc = (type, msg) => {
  message[type](msg, 2)
}

let notify = {
  success: (msg) => notifyFunc('success', msg),
  info: (msg) => notifyFunc('info', msg),
  error: (msg) => notifyFunc('error', msg),
  warning: (msg) => notifyFunc('warning', msg)
}

export default notify