import React,{useState} from "react";
import { Link, withRouter } from "react-router-dom";
import { HiOutlinePencil } from "react-icons/hi";
import { RiHeart2Line } from "react-icons/ri";
import { VscBellDot } from "react-icons/vsc";
import { FaSignInAlt,FaHiking,FaRegUser,FaSignOutAlt } from "react-icons/fa";

import air_asia from "../../assets/images/user/user_icon.png"

import {isAuthenticated, signout} from './helperMethods'
const currentTab = (history, path) => {
  if (history.location.pathname === path) {
    return { color: "#198754" };
  } else {
    return { color: "#adb5bd" };
  }
};

const Header = ({ history }) => {

  const handleSignOut = (event) => {
    event.preventDefault();
    signout();
    window.location.href = "/";
  }

  const SignInButton = () => {
    return(
      <li className="nav-item me-2 mt-2">
        <a className="nav-link btn btn-dark text-light px-2" href="/signin">
          <h6 className="m-auto">
            <FaSignInAlt className="me-1" size={20} />
            Sign in
          </h6>
        </a>
      </li>
    )
  }
  const User = () => {
    return(
      <li className="nav-item me-2">
        <div class="dropdown">
          <a class="nav-link dropdown-toggle" id="header-profile-dropdown" data-bs-toggle="dropdown">
            <img 
              src={air_asia} class="img-thumbnail rounded-pill p-0" 
              alt="..." 
              style={{width: '45px', height: '45px'}}
            />
          </a>
          <ul class="dropdown-menu border border-3" aria-labelledby="header-profile-dropdown">
            <li><a class="dropdown-item" href="/profile"><FaRegUser size={15} className="me-2"/>Profile</a></li>
            <li><button class="dropdown-item text-danger" onClick={handleSignOut}><FaSignOutAlt size={15} className="me-2"/>Signout</button></li>
          </ul>
        </div>
      </li>
    )
  }
  return (
    <header>
      <div className="row">
        <div className="col-1"></div>
        <div className="col-10">
          <nav className="navbar navbar-expand-lg navbar-light">
            <div className="container-fluid">
              <a className="navbar-brand text-success" href="/">
                <FaHiking size={50} className=" me-2 mb-2 pb-2" />
                <h1 className="d-inline-block fw-bold ">Traveller</h1>
              </a>
              <button
                className="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="navbar-toggler-icon"></span>
              </button>
              <div
                className="collapse navbar-collapse justify-content-end"
                id="navbarSupportedContent"
              >
                <div className="d-flex">
                  <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    <li className="nav-item me-2">
                      <Link
                        className="nav-link"
                        to="/blogs"
                        style={currentTab(history, "/blogs")}
                      >
                        <h5 className="m-auto mb-2 mt-2">
                          <HiOutlinePencil className="me-1" size={20} />
                          Blogs
                        </h5>
                      </Link>
                    </li>
                    <li className="nav-item me-2 mt-2">
                      <Link 
                      className="nav-link" 
                      to="/:user/trips" 
                      style={currentTab(history, "/:user/trips")}
                      >
                        <h5 className="m-auto">
                          <RiHeart2Line className="me-1" size={20} />
                          Trips
                        </h5>
                      </Link>
                    </li>
                    <li className="nav-item me-2 mt-2">
                      <Link 
                      className="nav-link" 
                      to="/alerts"
                      style={currentTab(history, "/alerts")}
                      >
                        <h5 className="m-auto">
                          <VscBellDot className="me-1" size={20} />
                          Alerts
                        </h5>
                      </Link>
                    </li>
                    {
                      isAuthenticated() ? <User/> : <SignInButton />
                    }
                    
                  </ul>
                </div>
              </div>
            </div>
          </nav>
        </div>
        <div className="col-1"></div>
      </div>
    </header>
  );
};

export default withRouter(Header);
