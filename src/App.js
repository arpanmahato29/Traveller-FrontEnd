import React from "react";
import { Route, BrowserRouter, Switch } from "react-router-dom";

import Home from "./components/homepage/Home";
import FlightBooking from "./components/flight_booking/FlightBooking";
import HotelBooking from "./components/hotel_booking/HotelBooking";
import Blogs from "./components/blogs/Blogs";
import FlightResult from "./components/flight_result/FlightResult";
import HotelResult from "./components/hotel_result/HotelResult";
import Location from './components/places_to_visit/Location';
import Destination from './components/places_to_visit/Destination';

import "./assets/css/Carousal.css";
import "./assets/css/image.css";
import "./assets/css/footer.css";
import "./assets/css/color.css";
import "./assets/css/booking_console.css";

import './assets/css/Carousal.css';
import './assets/css/image.css';
import './assets/css/footer.css';
import './assets/css/color.css';
import './assets/css/booking_console.css'
import './assets/css/text.css'

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/book_flight' component={FlightBooking} />
          <Route exact path='/book_hotel' component={HotelBooking} />
          <Route exact path='/blogs' component={Blogs} />
          <Route exact path='/places_to_visit/:type/:location' component={Location} />
          <Route exact path='/places_to_visit/:type/:location/:destination' component={Destination} />
          <Route exact path='/book_flight/search_result' component={FlightResult} />
        </Switch>
      </BrowserRouter>
    </>
  );
};

export default App;
