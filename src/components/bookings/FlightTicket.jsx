import React from 'react'
import {FaPlane,FaLongArrowAltRight} from 'react-icons/fa'
import {AiOutlineAlignRight} from 'react-icons/ai'

import {getFlightBrand} from '../flight_search_result/helperMethods'
const FlightTicket = () => {
  return (
    <div className="">
      <h4>Ticket Details</h4>
      <div className="row">
        <div className="col-6">
          <h5>Passenger Name : <span className="font-monospace">Arpan Mahato</span></h5>
        </div>
        <div className="col-3">
          <h5>Age : <span className="font-monospace">22</span></h5>
        </div>
        <div className="col-3">
          <h5>Gender : <span className="font-monospace">Male</span></h5>
        </div>
      </div>
      <div className="row">
        <div className="col-6">
          <h5>Departure : <span className="font-monospace">Bangalore</span></h5>
        </div>
        <div className="col-6">
          <h5>Arrival : <span className="font-monospace">Bhubaneswar</span></h5>
        </div>
      </div>
      <p><small>Please verify flight times prior to departure.</small></p>
      <div className="row">
        <div className="col-4 bg-light p-2 px-3">
          <div className="row">
            <div className="col-3 ms-3">
              <img src={getFlightBrand('Air India')} width={40} alt=""/>  
            </div>
            <div className="col">
              <h5 className="p-0 m-0 font-monospace">Air India</h5>
              <h6 className="p-0 m-0 font-monospace">Model No</h6>
            </div>
          </div>
          <div className="pt-4 ms-3">
            <h6 className="text-muted m-0">Duration :</h6>
            <h6 className="font-monospace mb-3">xxxxxxx</h6>
            <h6 className="text-muted m-0">Class :</h6>
            <h6 className="font-monospace mb-3">xxxxxxx</h6>
            <h6 className="text-muted m-0">Status :</h6>
            <h6 className="font-monospace mb-3">xxxxxxx</h6>
          </div>
        </div>
        <div className="col-7 ms-2 border border-2">
          <div className="row p-3 border-bottom border-2">
            <div className="col-5 font-monospace fw-bold text-center">
              <h4 className="p-0 m-0">IXA</h4>
              <p className="p-0 m-0"><small className="text-muted">Singerbhil Airport,</small></p>
              <p className="p-0 m-0"><small className="text-muted">Agartala</small></p>
            </div>
            <div className="col-2 text-muted text-center">
              <h4><FaLongArrowAltRight/></h4>
            </div>
            <div className="col-5 font-monospace fw-bold text-center">
              <h4 className="p-0 m-0">AGX</h4>
              <p className="p-0 m-0"><small className="text-muted">Agatti Island Airport,</small></p>
              <p className="p-0 m-0"><small className="text-muted">Agatti Island</small></p>
            </div>
          </div>
          <div className="row px-4 py-4 text-center">
            <div className="col-5">
              <h6 className="text-muted p-0 m-0"><small>Departing at :</small></h6>
              <p className="font-monospace p-0 m-0">11 : 10</p>
              <p className="font-monospace p-0 m-0">Jul 20, 2021</p>
            </div>
            <div className="col-2"></div>
            <div className="col-5">
              <h6 className="text-muted p-0 m-0"><small>Arriving at :</small></h6>
              <p className="font-monospace p-0 m-0">11 : 10</p>
              <p className="font-monospace p-0 m-0">Jul 20, 2021</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default FlightTicket
