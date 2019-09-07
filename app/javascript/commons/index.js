import React from 'react';
import PropTypes from 'prop-types';
import { hot } from 'react-hot-loader';
import { Router, Route, Switch, Redirect } from "react-router-dom";
import { Provider, inject } from "mobx-react";
import { LocaleProvider } from "antd";
import zhCN from 'antd/es/locale-provider/zh_CN';

// 初始化配置，勿删
import env from '../configs/env'

// Utils
import history from '../utils/history'
import Loadable from '../utils/loadable'

// Commons
import stores from '../stores/index'

// Components
import CustomNav from "./CustomNav/index"
import Loading from "../components/Loading/index"
import LoginModal from "../components/LoginModal/index"

// Pages
const Home = Loadable(() => import('./Home/index'))
const NotFound = Loadable(() => import('./NotFound/index'))
const Forbidden = Loadable(() => import('./Forbidden/index'))

// Global style
import 'bootstrap/dist/css/bootstrap.css';
import 'antd/dist/antd.css';
import './index.scss';
import api from "../utils/api";

class App extends React.Component {
  constructor(props) {
    super(props);
  }
  // 组件已经被渲染到 DOM 中后运行
  componentDidMount(){
    console.log('DidMount');

    this.getCurrentUser()
  }

  componentWillUnmount(){
    console.log('WillUnmount');
  }

  async getCurrentUser () {
    try {
      const res = await api.getCurrentUser();
      if (!res.user) return;

      stores.userStore.login(res.user);
    }catch(e){}
  }

  render() {
    return (
      <LocaleProvider locale={zhCN}>
        <div className='app-container'>
          <Provider {...stores}>
            <Router history={history}>
              <CustomNav/>

              <Switch>
                <Route exact path='/' component={Home}></Route>


                <Route exact path='/r403' component={Forbidden}></Route>
                <Route exact path='/r404' component={NotFound}></Route>
                <Redirect to='/r404'/>
              </Switch>

              <LoginModal/>
              <Loading/>
            </Router>
          </Provider>
        </div>
      </LocaleProvider>
    )
  }
}

export default hot(module)(App);