import React from 'react'
const Footer = () => {
  let year = new Date().getFullYear();
  return (
    <div className="row secondary-bg noPrint"  style={{paddingTop:'40px'}}>
      <div className="col-1"></div>
      <div className="col-10">
        <footer className="container">
          <div className="row">
            <div className="col">
              <h4 className="fw-lighter header" >About Traveller</h4>
              <div >
                <p className="fw-bolder footer-option"><a className=" text-dark" href="#" >About Us</a></p>
                <p className="fw-bolder footer-option"><a className=" text-dark" href="#" >Resources and Policies</a></p> 
                <p className="fw-bolder footer-option"><a className=" text-dark" href="#" >Careers</a></p> 
                <p className="fw-bolder footer-option"><a className=" text-dark" href="#" >Investor Relations</a></p>  
                <p className="fw-bolder footer-option"><a className=" text-dark" href="#" >Content Integrity</a></p> 
              </div> 
            </div>
            <div className="col">
              <h4 className="fw-lighter header" >Explore</h4>
              <div >
                <p className="fw-bolder footer-option"><a className=" text-dark" href="#" >Write a review</a></p>
                <p className="fw-bolder footer-option"><a className=" text-dark" href="#" >Join</a></p> 
                <p className="fw-bolder footer-option"><a className=" text-dark" href="#" >Traveler's Choice</a></p> 
                <p className="fw-bolder footer-option"><a className=" text-dark" href="#" >Insurance</a></p>  
                <p className="fw-bolder footer-option"><a className=" text-dark" href="#" >Blog</a></p> 
                <p className="fw-bolder footer-option"><a className=" text-dark" href="#" >Help Center</a></p> 
                <p className="fw-bolder footer-option"><a className=" text-dark" href="#" >Traveller Plus</a></p> 
              </div> 
            </div>
            <div className="col">
              <h4 className="fw-lighter header" >Do Business With Us</h4>
              <div >
                <p className="fw-bolder footer-option"><a className=" text-dark" href="#" >Owners</a></p>
                <p className="fw-bolder footer-option"><a className=" text-dark" href="#" >Business Advantage</a></p> 
                <p className="fw-bolder footer-option"><a className=" text-dark" href="#" >Sponsored Placements</a></p> 
                <p className="fw-bolder footer-option"><a className=" text-dark" href="#" >Advertise with Us</a></p>  
                <p className="fw-bolder footer-option"><a className=" text-dark" href="#" >Become an Affiliate</a></p> 
              </div> 
            </div>
          </div>
          <div>
            <div className="row mt-5">
              <span className="text-muted text-center" style={{fontSize:"0.8rem"}}>
                © {year} Traveller LLC All rights reserved.
              </span>
            </div>
          </div>
        </footer>
      </div>
      <div className="col-1"></div>
    </div>
  )
}

export default Footer
