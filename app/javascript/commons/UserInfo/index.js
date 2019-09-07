import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { observer, inject } from "mobx-react";
import { Menu, Dropdown, Avatar, Tooltip } from "antd";

import './index.scss';
import api from "../../utils/api";
import stores from "../../stores";

@inject('globalStore', 'userStore')
@observer
class UserInfo extends React.Component {
  constructor (props) {
    super(props);

    this.showLoginModal.bind(this);
  }

  showLoginModal () {
    stores.globalStore.showLoginModal = true;
  }

  async logout () {
    try {
      await api.logout();
      stores.userStore.logout();
    } catch (e) {}
  }

  render() {
    console.log('UserInfo', this.props.userStore.user)
    if (this.props.userStore.logged) {
      const userMenu = (
        <Menu>
          <Menu.Item key="0">
            <Link to={`/users/${this.props.userStore.user.username}`}>个人中心</Link>
          </Menu.Item>
          <Menu.Item key="1">
            <Link to={`/users/${this.props.userStore.user.username}/accounts`}>账号管理</Link>
          </Menu.Item>
          <Menu.Divider />
          <Menu.Item key="2">
            <a href='javascript:void(0)' onClick={this.logout}>退出</a>
          </Menu.Item>
        </Menu>
      );

      return (
        <div className='navbar-user-info'>
          <Dropdown overlay={userMenu} trigger={['click']} placement="bottomCenter">
            <Tooltip mouseEnterDelay={1} title={this.props.userStore.user.username}>
              <Avatar className='user-avatar ant-dropdown-link' size='large'>
                { this.props.userStore.user.username[0] }
              </Avatar>
            </Tooltip>
          </Dropdown>
        </div>
      );
    } else {
      return (
        <div className='navbar-user-info'>
          <div className='login-or-register'>
            <a href='javascript:void(0)' className='text-white' onClick={this.showLoginModal}>登录</a>
            <span className='text-white'>|</span>
            <a href='javascript:void(0)' className='text-white'>注册</a>
          </div>
        </div>
      )
    }
  }
}

export default UserInfo;