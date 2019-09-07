import React from 'react';
import { inject, observer } from "mobx-react";
import { Link } from "react-router-dom";
import { Modal, Form, Icon, Input, Button } from "antd";

import './index.scss';
import api from "../../utils/api";
import stores from "../../stores";

@inject('globalStore', 'userStore')
@observer
class LoginModal extends React.Component {
  constructor(props) {
    super(props);

    this.handleSubmit.bind(this);
    this.closeModal.bind(this);
  }

  handleSubmit = e => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        this.getUser(values.username, values.password);
      }
    });
  }

  closeModal = () => {
    stores.globalStore.showLoginModal = false;
  }

  async getUser (username, password) {
    try {
      let _ = await api.login(username, password);
      const res = await api.getCurrentUser();
      stores.userStore.login(res.user);
      this.closeModal();
    } catch (e) {}
  }

  render() {
    const { getFieldDecorator } = this.props.form;
    return (
      <div className='login-modal'>
        <Modal
          title="登录"
          visible={this.props.globalStore.showLoginModal}
          width={360}
          destroyOnClose={true}
          footer={null}
          onCancel={this.closeModal}
        >
          <Form onSubmit={this.handleSubmit} className="login-form">
            <Form.Item>
              {getFieldDecorator('username', {
                rules: [{ required: true, message: '请输入用户名' }],
              })(
                <Input
                  prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                  placeholder="用户名"
                />,
              )}
            </Form.Item>
            <Form.Item>
              {getFieldDecorator('password', {
                rules: [
                  { required: true, message: '请输入密码' },
                  { min: 6, message: '密码至少输入6位数' }
                ],
              })(
                <Input
                  prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
                  type="password"
                  placeholder="密码"
                />,
              )}
            </Form.Item>
            <Form.Item>
              <Button type="primary" htmlType="submit" className="login-form-button">
                登录
              </Button>
              Or <Link to="/register">马上注册</Link>
            </Form.Item>
          </Form>
        </Modal>
      </div>
    )
  }
}
const WrappedLoginModal = Form.create({ name: 'login_modal' })(LoginModal);
export default WrappedLoginModal;