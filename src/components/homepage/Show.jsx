import React from 'react';

import goa_cover from '../../assets/images/goa_cover.jpg';
import ladakh_cover from '../../assets/images/ladakh_cover.jpg';
import rajasthan_cover from '../../assets/images/rajasthan_cover.jpg';

const Show = () => {
  return(
    <div className="row">
      <div className="col-1"></div>
      <div className="col-10">
        <div className="row my-3">
          <div className="col-5 my-5 px-5">
            <div className="mt-5 ms-5">
              <h1 className="text-success fs-1 fw-bolder">Traveller</h1>
              <h3 className="fw-light">Book unique hotels and</h3>
              <h3 className="fw-light">experience a city like a local</h3>
            </div>
          </div>
          <div className="col-7 mb-4">
            <div id="carouselExampleSlidesOnly" class="carousel slide" data-bs-ride="carousel">
              <div class="carousel-inner">
                <div class="carousel-item active">
                  <img src={goa_cover} class="d-block w-100" alt="..."/>
                </div>
                <div class="carousel-item">
                  <img src={ladakh_cover} class="d-block w-100" alt="..."/>
                </div>
                <div class="carousel-item">
                  <img src={rajasthan_cover} class="d-block w-100" alt="..."/>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="col-1"></div>
    </div>
  )
}

export default Show;