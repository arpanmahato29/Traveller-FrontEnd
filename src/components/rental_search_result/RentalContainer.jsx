import React from "react";

import RentalCard from "./RentalCard";
import RentalFilter from "./RentalFilter";


const RentalContainer = ({rentals}) => {
  return (
    <div className="row mt-3 mb-5">
      <div className="col-1"></div>
      <div className="col-10">
        <div className="row">
          <div className="col-3">
            <RentalFilter />
          </div>
          <div className="col-9 ">
          { 
            rentals.map((rental,key) => <RentalCard key={key} rental={rental} />)
          }
          </div>
        </div>
      </div>
      <div className="col-1"></div>
    </div>
  );
};

export default RentalContainer;
