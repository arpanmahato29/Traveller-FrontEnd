import React from "react";
import { Route, BrowserRouter, Switch } from "react-router-dom";

import Home from "./components/homepage/Home";
import FlightSearch from "./components/flight_search/FlightSearch";
import HotelBooking from "./components/hotel_booking/HotelBooking";
import Blogs from "./components/blogs/Blogs";
import DashboardContainer from "./components/user_dashboard/DashboardContainer"
import Signin from "./components/common/Singin"
import FlightSearchResult from "./components/flight_search_result/FlightSearchResult";
import HotelResult from "./components/hotel_result/HotelResult";
import Location from "./components/places_to_visit/Location";
import Destination from "./components/places_to_visit/Destination";
import FlightBooking from "./components/flight_booking/FlightBooking";
import AllOrders from "./components/orders/AllOrders"
import OrderContainer from "./components/orders/OrderContainer"


import "./assets/css/Carousal.css";
import "./assets/css/image.css";
import "./assets/css/footer.css";
import "./assets/css/color.css";
import "./assets/css/booking_console.css";
import "./assets/css/text.css";
import "./assets/css/header.css";
import "./assets/css/print.css";

const App = () => {
  document.title =`Traveller LLC`
  return (
    <>
      <BrowserRouter>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/flight_search' component={FlightSearch} />
          <Route exact path='/book_hotel' component={HotelBooking} />
          <Route exact path='/blogs' component={Blogs} />
          <Route exact path='/signin' component={Signin} />
          <Route exact path='/profile' component={DashboardContainer} />
          <Route exact path='/places_to_visit/:type/:location' component={Location} />
          <Route exact path='/places_to_visit/:type/:location/:destination' component={Destination} />
          <Route exact path='/flight_search/result/' component={FlightSearchResult} />
          <Route exact path='/book_hotel/search_result' component={HotelResult} />
          <Route exact path='/book_flight' component={FlightBooking} />
          <Route exact path='/orders' component={AllOrders} />
          <Route exact path='/orders/:order_id' component={OrderContainer} />
        </Switch>
      </BrowserRouter>
    </>
  );
};

export default App;
