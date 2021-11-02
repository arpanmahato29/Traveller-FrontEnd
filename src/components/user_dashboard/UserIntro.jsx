import React from 'react'
import {GoDiffAdded} from 'react-icons/go'
import {FaRegCalendarAlt,FaMapMarkerAlt} from "react-icons/fa";
const UserIntro = () => {
  return (
    <div>
      <h5>Intro</h5>
      <div className="text-muted">
        <p><FaMapMarkerAlt/> Jamshedpur,India</p>
        <p><FaRegCalendarAlt/> Joined in Sept 2021</p>
        <p><GoDiffAdded/> Add Website</p>
        <p><GoDiffAdded/> Write some details about yourself</p>
      </div>
    </div>
  )
}

export default UserIntro
