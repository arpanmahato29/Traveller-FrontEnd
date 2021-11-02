import React,{useState} from 'react'
import { RiSettings3Fill } from "react-icons/ri";
import profile_img from '../../assets/images/Airlines_logo/spicejet.png'

const UserPanel = () => {
  // const UserActivityMenu = () => {
  //   const [activity,setActivity] = useState("activity feed");
  //   return(
  //     <nav className="navbar navbar-expand-lg navbar-light">
  //         <div className="container-fluid">
  //           <div className="collapse navbar-collapse">
  //             <ul className="navbar-nav me-auto mb-2 mb-lg-0">
  //               <li className="nav-item">
  //                 <a className="nav-link" href="#">Activity feed</a>
  //               </li>
  //               <li className="nav-item">
  //                 <a className="nav-link" href="#">Trips</a>
  //               </li>
  //               <li className="nav-item">
  //                 <a className="nav-link" href="#">Photos</a>
  //               </li>
  //               <li className="nav-item">
  //                 <a className="nav-link" href="#">Reviews</a>
  //               </li>
  //             </ul>
  //           </div>
  //         </div>
  //       </nav>
  //   )
  // }
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
            <buttton className="col-3 btn border"><RiSettings3Fill size={20}/></buttton> 
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
