import React, { useState, useEffect } from 'react';
import Logo from '../../../assets/logo-white.png';
import './style.css';

import Form from '../../Form/form';
import OtpModal from '../../Form/otp';
import LogoutModal from '../../Form/logout';
import ForgetPass from '../../Form/forgetpass';
import ChangePass from '../../Form/changepass';
import CheckOtp from '../../Form/checkotp';

import { NavLink, Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import * as actions from '../../../actions/authActions';
import AuthModal from '../../Form/AuthModal';
const Sidebar = (props) => {
  const [details, setDetails] = useState({
    active: false,
    forgetmail: '',
    forgetOTP: '',
  });

  const { active, forgetmail, forgetOTP } = details;

  const [modalOpen, setModalOpen] = useState(false);

  const closeModal = () => setModalOpen(false);
  const openModal = () => setModalOpen(true);

  const setForgetMail = (mail) => {
    setDetails({ forgetmail: mail });
  };

  const setForgetOTP = (otp) => {
    setDetails({ forgetOTP: otp });
  };

  useEffect(() => {
    document.onclick = (args) => {
      if (args.target.id === 'dialog-target') {
        console.log('called');
      }
    };
  }, []);

  const loggedout = (
    <button
      id="signup"
      className="btn btn-outline-default"
      data-toggle="modal"
      data-target="#loginRegModal"
      onClick={openModal}
    >
      Login/Sign Up
    </button>
  );

  const loggedin = (
    <button
      id="signup"
      className="btn btn-outline-default"
      data-toggle="modal"
      data-target="#logoutModal"
      onClick={openModal}
    >
      {props.auth.first_name.toUpperCase()} {props.auth.last_name.toUpperCase()}
    </button>
  );
  return (
    <div className="sidebarTop">
      <header>
        {props.hideLogo ? <div></div> : (<div className="leftBox">
          <img src={Logo} className="img-fluid" id="logo" />
        </div>)}
        {/* logged-in/logged-out part */}
        {props.hideLoginSignUpBtn ? <div></div> : (
          <div className="rightBox">
            {props.auth.loggedin ? loggedin : loggedout}
          </div>
        )}
      </header>
      <div id="dialog-target">
        <AuthModal modalOpen={modalOpen} closeModal={closeModal} />
      </div>
      <div id="nav-container">
        <div class="bg"></div>
        {props.hideMenuBtn ? <div /> : (<div class="button" tabindex="0">
          <span class="icon-bar"></span>
          <span class="icon-bar"></span>
          <span class="icon-bar"></span>
        </div>)}
        <div id="nav-content" tabindex="0">
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <NavLink to="/events">Events</NavLink>
            </li>
            <li>
              <NavLink to="/team">Team</NavLink>
            </li>
            <li>
              <NavLink to="/gallery">Gallery</NavLink>
            </li>
            <li>
              <NavLink to="/sponsors">Sponsors</NavLink>
            </li>
            <li>
              <NavLink to="/speakers">Speakers</NavLink>
            </li>
            <li>
              <NavLink to="/investors">Investors</NavLink>
            </li>
            <li>
              <NavLink to="/startups">Startups</NavLink>
            </li>
            <li>
              <NavLink to="/mentors">Mentors</NavLink>
            </li>
            <li>
              <NavLink to="/caportal_info">CaPortal</NavLink>
            </li>
            <li>
              <a href="https://medium.com/e-cell-nit-raipur">Blogs</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => state;

export default connect(mapStateToProps, actions)(Sidebar);
