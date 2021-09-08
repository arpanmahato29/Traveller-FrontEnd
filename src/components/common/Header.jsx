import React from 'react';
import {HiOutlinePencil} from 'react-icons/hi';
import {RiHeart2Line} from 'react-icons/ri';
import {VscBellDot} from 'react-icons/vsc';
import {FaSignInAlt} from 'react-icons/fa';
import {SiTripadvisor} from 'react-icons/si';
const Header = () => {
  return(
      <header>
        <div className="row">
          <div className="col-1"></div>
          <div className="col-10">
            <nav className="navbar navbar-expand-lg navbar-light">
              <div className="container-fluid">
                <a className="navbar-brand text-success" href="#">
                  <SiTripadvisor size={50} className=" me-2 mb-2"/>
                  <h2 className="d-inline-block fw-bold">Traveller</h2>
                </a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                  <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
                  <div className="d-flex">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                      <li className="nav-item me-2">
                        <a className="nav-link" href="#"><h6 className="m-auto mb-2"><HiOutlinePencil className="me-1" size={20}/>Blogs</h6></a>
                      </li>
                      <li className="nav-item me-2">
                        <a className="nav-link" href="#"><h6 className="m-auto"><RiHeart2Line className="me-1" size={20}/>Trips</h6></a>
                      </li>
                      <li className="nav-item me-2">
                        <a className="nav-link" href="#"><h6 className="m-auto"><VscBellDot className="me-1" size={20}/>Alerts</h6></a>
                      </li>
                      <li class="nav-item me-2">
                        <a class="nav-link btn btn-dark text-light px-2"><h6 className="m-auto"><FaSignInAlt className="me-1" size={20}/>Sign in</h6></a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </nav>
          </div>
          <div class="col-1"></div>
        </div>
      </header>
  );
}

export default Header;