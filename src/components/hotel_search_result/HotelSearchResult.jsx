import React,{ useState, useEffect} from "react";
import Header from "../common/Header";
import Menu2 from "../common/Menu2";
import Footer from "../common/Footer";
import HotelContainer from "./HotelContainer";
import Loading from "../common/Loading";

import {isAuthenticated} from '../common/helperMethods'
import { getHotels } from "../../assets/api_calls/hotels";

const HotelSearchResult = () => {
  console.log("hotel search result")
  const [isLoading, setIsLoading] = useState(true);
  const [hotels, setHotels] = useState(false);
  const authToken = isAuthenticated();
  if (!authToken) {
    window.location.href = "/signin";
  }
  let hotelQuery;
  useEffect(() => {
    const bookflight = async() => {
      if(sessionStorage.getItem("hotelQuery")){
        hotelQuery = JSON.parse(sessionStorage.getItem("hotelQuery"));
        const data = await getHotels(hotelQuery,authToken.jwt);
        if(data.error) {

        } else {
          setHotels(data.data)
        }
      } else {
        window.location.href = '/hotel_search'
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
        isLoading ? <Loading message="Hold on. We are fetching hotels for you."/> : <HotelContainer hotels={hotels} />
      }
      <Footer/>
    </div>
  );
};

export default HotelSearchResult;
