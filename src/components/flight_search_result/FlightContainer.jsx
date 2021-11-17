import React from "react";
import FlightCard from "./FlightCard";
import FlightFilter from "./FlightSearchFilter";

const FlightContainer = ({flights}) => {
  
  return(
    <div className="row mt-3 mb-5">
      <div className="col-1"></div>
      <div className="col-10 ">
        <div className="row">
          <div className="col-3 me-4">
            <FlightFilter />
          </div>
          <div className="col-8">
          { 
            flights.map((flight,key) => <FlightCard key={key} flight={flight} />)
          }
          </div>
        </div>
      </div>
      <div className="col-1"></div>
    </div>
  )
}

export default FlightContainer;
