import React,{useState} from "react";
import Header from "../common/Header";
import Menu2 from "../common/Menu2";
import FlightContainer from './FlightContainer';
import Footer from "../common/Footer";
import Loading from "../common/Loading";
const FlightResult = () => {
  const [isLoading, setIsLoading] = useState(true);
  let flightQuery;
  if(sessionStorage.getItem("flightQuery")){
    flightQuery = JSON.parse(sessionStorage.getItem("flightQuery"));
  }
  console.log(flightQuery);
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
