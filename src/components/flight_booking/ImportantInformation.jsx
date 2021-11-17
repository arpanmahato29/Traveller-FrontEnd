import React from 'react'
import {HiInformationCircle} from 'react-icons/hi'


const ImportantInformation = () => {
  return (
    <div className="row mt-3">
      <div className="col-8">
        <div class="card border border-5">
          <div class="card-body px-4 pt-3">
            <h3 className="mb-3">Important Information</h3>
            <Mandatory  />
            <Baggage />
            <Disclaimer />
          </div>
        </div>
      </div>
    </div>
  )
}

const Mandatory = () => {
  return(
    <div>
      <h5>
        <HiInformationCircle className="text-danger me-2" size="25"/>
        <span className="text-decoration-underline">Mandatory check-list for passengers</span>
      </h5>
      <small>
        <ul>
          <li >Vaccination requirements : <span className="text-muted">None.</span></li>
          <li >COVID test requirements : <span className="text-muted">Passengers arriving from rest of the states - Symptomatic passengers arriving from any state must carry a negative RT-PCR test report with a sample taken within 72 hours before arrival. </span></li>
          <li >Pre-registration or e-Pass requirements : <span className="text-muted">Download and update Aarogya Setu app</span></li>
          <li >Quarantine Guidelines :  <span className="text-muted">Seven days of Institutional Quarantine for all students/employees & Seven days of Home Quarantine</span></li>
          <li >Destination Restrictions :  <span className="text-muted">A lockdown is in effect at the moment, however, flight operations remain unaffected during this time. Please check the latest state guidelines before travelling.</span></li>
          <li >Remember to web check-in before arriving at the airport; carry a printed or soft copy of the boarding pass.</li>
          <li >Please reach at least 2 hours prior to flight departure.</li>
          <li >Remember to download the baggage tag(s) and affix it on your bag(s).</li>
        </ul>
      </small>
    </div>
  )
}

const Baggage = () => {
  return(
    <div>
      <h5>
        <HiInformationCircle className="text-danger me-2" size="25"/>
        <span className="text-decoration-underline">Baggage information</span>
      </h5>
      <small>
        <ul>
          <li>
          Carry no more than 1 check-in baggage and 1 hand baggage per passenger. Additional pieces of Baggage will be subject to additional charges per piece in addition to the excess baggage charges.
          </li>
        </ul>
      </small>
    </div>
  )
}

const Disclaimer = () => {
  return (
    <div>
      <h5>
        <HiInformationCircle className="text-danger me-2" size="25"/>
        <span className="text-decoration-underline">A Note on Guidelines</span>
      </h5>
      <small>
        <ul>
          <li>
          Disclaimer: The information provided above is only for ready reference and convenience of customers, and may not be exhaustive. We strongly recommend that you check the full text of the guidelines issued by the State Governments before travelling. MakeMyTrip accepts no liability in this regard.
          </li>
        </ul>
      </small>
    </div>
  )
}

export default ImportantInformation
