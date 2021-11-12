import React from 'react'
import { FaSignOutAlt } from "react-icons/fa";
import profile_img from '../../assets/images/user/user_icon.png'

import {signout} from '../common/helperMethods'

const UserPanel = () => {
  const handleSignOut = (event) => {
    event.preventDefault();
    signout();
    window.location.href = "/";
  }
  const UserDetails = () => {
    return(
      <div className="row">
        <div className="col-2">
          <img src={profile_img} class="img-thumbnail" alt="..." style={{width:"150px", height:"150px"}}/>
        </div>
        <div className="col-8">
          <div className="title mb-4 mt-2">
            <h3 className="p-0 m-0">Arpan Mahato</h3>
            <p className="text-muted p-0 m-0 fs-6">arpanmahato@gmail.com</p>
          </div>
          <div className="row">
            <div className="col-3 contributions">
              <h5 className="p-0 m-0">Contributions</h5>
              <h6 className="text-muted p-0 m-0 fs-6">0</h6>
            </div>
            <div className="col-3 followers">
              <h5 className="p-0 m-0">Followers</h5>
              <h6 className="text-muted p-0 m-0 fs-6">0</h6>
            </div>
            <div className="col-3 following">
              <h5 className="p-0 m-0">Following</h5>
              <h6 className="text-muted p-0 m-0 fs-6">0</h6>
            </div>
          </div>
        </div>
        <div className="col-2">
          <div className="row">
            <buttton className="col-8 btn border me-1">Edit Profile</buttton>
            <buttton className="col-3 btn border bg-danger text-white pb-2" onClick={handleSignOut}>
              <FaSignOutAlt size={20}/>
            </buttton> 
          </div>
        </div>
      </div>
    )
  }
  return (
    <div className="row mb-5">
      <div className="col-1"></div>
      <div className="col-10">
        <div className="card border border-light border-5">
          <div className="card-body">
            <UserDetails />
            {/* <UserActivityMenu /> */}
          </div>
        </div>
      </div>
      <div className="col-1"></div>
    </div>
  )
}

export default UserPanel
