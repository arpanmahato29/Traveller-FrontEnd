import React,{ useState, useEffect} from "react";
import Header from "../common/Header";
import Menu2 from "../common/Menu2";
import Footer from "../common/Footer";
import RentalContainer from "./RentalContainer";
import Loading from "../common/Loading";

import {isAuthenticated} from '../common/helperMethods'
import { getRentals } from "../../assets/api_calls/rentals";

const HotelSearchResult = () => {
  console.log("hotel search result")
  const [isLoading, setIsLoading] = useState(true);
  const [rentals, setRentals] = useState(false);
  const authToken = isAuthenticated();
  if (!authToken) {
    window.location.href = "/signin";
  }
  let rentalQuery;
  useEffect(() => {
    const bookflight = async() => {
      if(sessionStorage.getItem("rentalQuery")){
        rentalQuery = JSON.parse(sessionStorage.getItem("rentalQuery"));
        const data = await getRentals(rentalQuery,authToken.jwt);
        if(data.error) {

        } else {
          setRentals(data.data)
        }
      } else {
        window.location.href = '/rental_search'
      }
    }
    bookflight();
  },[]);
  
  setTimeout(() => {
    setIsLoading(false);
  },5000)
  return (
    <div>
      <Header />
      <Menu2 />
      { 
        isLoading ? <Loading message="Hold on. We are fetching rental properties for you."/> : <RentalContainer rentals={rentals} />
      }
      <Footer/>
    </div>
  );
};

export default HotelSearchResult;
