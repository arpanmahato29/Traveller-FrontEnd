import React,{ useState} from "react";
import Header from "../common/Header";
import Menu2 from "../common/Menu2";
import Footer from "../common/Footer";
import HotelContainer from "./HotelContainer";
import Loading from "../common/Loading";
const HotelResult = () => {
  const [isLoading, setIsLoading] = useState(true);
  let hotelQuery;
  if(sessionStorage.getItem("flightQuery")){
    hotelQuery = JSON.parse(sessionStorage.getItem("flightQuery"));
  }
  setTimeout(() => {
    setIsLoading(false);
  },5000)
  return (
    <div>
      <Header />
      <Menu2 />
      { 
        isLoading ? <Loading message="Hold on. We are fetching hotels for you."/> : <HotelContainer />
      }
      <Footer/>
    </div>
  );
};

export default HotelResult;
