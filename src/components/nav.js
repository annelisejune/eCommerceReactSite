import React, { Component } from 'react';
import { NavLink } from "react-router-dom"; 

export default class Navigation extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div className="nav-bar-wrapper">
        <div className="left-side">
          <div className="nav-logo">
            <img src="/assets/logo.png"></img>
          </div>

          <div className='nav-wrapper'>
            <div className="nav-link-wrapper">
              <NavLink activeClassName="nav-link-active" exact to="/">HOME</NavLink>
            </div>

            <div className="nav-link-wrapper">
              <NavLink activeClassName="nav-link-active" to="/store">STORE</NavLink>
            </div>

            <div className="nav-link-wrapper">
              <NavLink activeClassName="nav-link-active" to="/about">ABOUT</NavLink>
            </div>

            <div className="nav-link-wrapper">
              <NavLink activeClassName="nav-link-active" to="/contact">CONTACT</NavLink>
            </div>
          </div>
        </div>

        <div className="right-side">
          <div className="right-nav-links">
            <div className="nav-icons">
              <i class="fab fa-facebook-f"></i>
            </div>

            <div className="nav-icons">
              <i class="fab fa-instagram"></i>
            </div>

            <div className="nav-icons">
              <i class="fab fa-twitter"></i>
            </div>
          </div>
        </div>
      </div>
    );
  }
}