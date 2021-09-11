import React from 'react';
import { Route, BrowserRouter, Switch } from 'react-router-dom';

import Home from './components/homepage/Home'
import FlightBooking from './components/flight_booking/FlightBooking'
import HotelBooking from './components/hotel_booking/HotelBooking'

import './assets/css/Carousal.css';
import './assets/css/image.css';
import './assets/css/footer.css';
import './assets/css/color.css';
import './assets/css/booking_console.css'
import Blogs from './components/blogs/Blogs';
const App = () => {
  return (
    <>
      <BrowserRouter>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/book_flight' component={FlightBooking} />
          <Route exact path='/book_hotel' component={HotelBooking} />
          <Route exact path='/blogs' component={Blogs} />
        </Switch>
      </BrowserRouter>
    </>
  );
}

export default App;
