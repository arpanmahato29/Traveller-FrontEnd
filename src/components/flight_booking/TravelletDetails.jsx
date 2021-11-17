import React, { useState } from 'react'
import {HiInformationCircle} from 'react-icons/hi'
import {MdError} from 'react-icons/md'

import {bookFlight} from '../../assets/api_calls/flights'
import {getToday, validatePassenger} from './helperMethods'
import {isAuthenticated} from '../common/helperMethods'

const TravelletDetails = () => {

  const [passengerDetails,setPassengerDetails] = useState({
    "firstName" : "",
    "lastName" : "",
    "age" : 0, 
    "gender":-1
  })
  const [error,setError] = useState(false);
  const authToken = isAuthenticated();
  const handleChange = name => event => {
    setPassengerDetails({...passengerDetails,[name]:event.target.value})

  }

  const handleSubmit = (event) => {
    event.preventDefault();
    const passengerData = validatePassenger(passengerDetails);
    if(passengerData.error){
      setError(passengerData.error);
    } else {
      const flightDetails = JSON.parse(sessionStorage.getItem('flight_details'));
      const travelTicket = {
        "scheduledFlightId" : flightDetails.scheduleFlightId,
        "uid": authToken.user.uid,
        "passengerList" : [{
          "passengerName" : `${passengerDetails.firstName} ${passengerDetails.lastName}`.trim(),
          "passengerAge" : passengerDetails.age,
          "passengerGender" : passengerDetails.gender == 1 ? "Male" : "Female"
        }],
        "moneyCharged" : flightDetails.price,
        "date" : getToday()
      }
      const data = bookFlight(travelTicket,authToken.jwt);
      console.log(data);
    }
  }

  const ShowError = () => {
    return(
      <small className="text-danger">
        <MdError size="20" className="pb-1"/>{" " + error.msg}
      </small>
    )
  }

  return (
    <div>
      <div className="col-8 my-4 ">
        <div className="card border border-5 ">
          <div className="card-body px-4 pt-3">
            <h4>Traveller Details</h4>
            <div class=" alert alert-warning p-0 px-2" role="alert">
              <HiInformationCircle class="me-2" size="20"/> Enter name as mentioned on your passport or Government approved IDs.
            </div>
            <div className="card">
              <div className="card-body bg-light">
                <div class="row">
                  <div class="col-5 me-5">
                    <input 
                      type="text" 
                      class="form-control" 
                      placeholder="First name" 
                      aria-label="First name"
                      onChange={handleChange("firstName")}
                      value={passengerDetails.firstName}
                    />
                    {
                      error.type === 'firstName' && <ShowError />
                    }
                  </div>
                  <div class="col-5 ">
                    <input 
                      type="text" 
                      class="form-control" 
                      placeholder="Last name" 
                      aria-label="Last name"
                      onChange={handleChange("lastName")}
                      value={passengerDetails.lastName}
                    />
                    {
                      error.type === 'lastName' && <ShowError />
                    }
                  </div>
                </div>
                <div class="row mt-2">
                  <div class="col-5 me-5">
                    <input 
                      type="text" 
                      class="form-control" 
                      placeholder="Age" 
                      aria-label="Age"
                      onChange={handleChange("age")}
                      value={passengerDetails.age}
                    />
                    {
                      error.type === 'age' && <ShowError />
                    }
                  </div>
                  <div class="col-5">
                    <select 
                      class="form-select" 
                      aria-label="Default select example"
                      onChange={handleChange("gender")}
                      value={passengerDetails.gender}
                    >
                      <option value="-1" selected>Select Gender</option>
                      <option value="1">Male</option>
                      <option value="0">Female</option>
                    </select>
                    {
                      error.type === 'gender' && <ShowError />
                    }
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="d-grid gap-2 col-2 mx-auto mb-4">
        <button class="btn btn-lg btn-success" type="button" onClick={handleSubmit}>Book Now</button>
      </div>
    </div>
  )
}

export default TravelletDetails
