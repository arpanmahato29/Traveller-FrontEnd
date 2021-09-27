import React from "react";
import FlightCard from "./FlightCard";

const FlightContainer = ({flightQuery}) => {
  return(
    <div className="row mt-3 mb-5">
      <div className="col-1"></div>
      <div className="col-10 border">
        <div className="row">
          <div className="col-3 border">Filter Section</div>
          <div className="col-9  border">
          {[...Array(10)].map((x, i) =>
            <FlightCard key={i + 1} flightQuery={flightQuery}/>
          )}
          </div>
        </div>
      </div>
      <div className="col-1"></div>
    </div>
  )
}

export default FlightContainer;
