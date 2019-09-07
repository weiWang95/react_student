import React from 'react';
import PropTypes from 'prop-types';
import { Link, NavLink } from "react-router-dom";
import { Nav, Navbar } from "react-bootstrap";
import { inject } from "mobx-react";

import UserInfo from '../UserInfo/index'

// css
import './index.scss';

// images
import { ImgLogo } from '../../images/index'

@inject('globalStore')
class CustomNav extends React.Component {
  render() {
    return (
      <Navbar bg="dark" expand="lg" variant="dark" sticky='top'>
        <NavLink exact to='/' className='navbar-brand' activeClassName='active'>
          <img src={ImgLogo} width='30' height='30' className='d-inline-block align-top rounded' alt=''/>
          { this.props.globalStore.title }
        </NavLink>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <NavLink to='/home' className='nav-link' role='button' activeClassName='active'>Home</NavLink>
            <NavLink to='/link' className='nav-link' role='button' activeClassName='active'>Link</NavLink>
          </Nav>
        </Navbar.Collapse>

        <UserInfo />
      </Navbar>
    )
  }
}

export default CustomNav;