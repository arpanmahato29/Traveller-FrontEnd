import React,{useState} from "react";
import Header from "../common/Header";
import Menu2 from "../common/Menu2";
import FlightContainer from './FlightContainer';
import Footer from "../common/Footer";
import Loading from "../common/Loading";

import {isAuthenticated} from '../common/helperMethods'
import {getFlights} from '../../assets/api_calls/flights'
const FlightResult = () => {
  
  const [isLoading, setIsLoading] = useState(true);
  if (!isAuthenticated()) {
    window.location.href = "/signin";
  }
  let flightQuery;
  if(sessionStorage.getItem("flightQuery")){
    flightQuery = JSON.parse(sessionStorage.getItem("flightQuery"));
    getFlights(flightQuery);
  }
  setTimeout(() => {
    setIsLoading(false);
  },5000)
  return (
    <div>
      <Header />
      <Menu2 />
      { 
        isLoading ? <Loading message="Hold on. We are fetching flights for you."/> : <FlightContainer />
      }
      <Footer />
    </div>
  );
};

export default FlightResult;
