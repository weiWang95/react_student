import { message, notification } from 'antd';

const env = {
  notification: {
    top: 60,
    duration: 2
  },
  message: {
    top: 60,
    duration: 2,
    maxCount: 1,
  }
}

notification.config(env.notification)
message.config(env.message)

export default env