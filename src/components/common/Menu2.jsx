import React from 'react'
import {Link, withRouter} from 'react-router-dom';

const currentTab = (history, path) => {
  if(history.location.pathname === path){
    return { color: '#198754', textDecoration: 'underline'}
  } else {
    return {color: '#adb5bd', textDecoration: 'None'}
  }
}

const Menu2 = ({history}) => {

  return (
    <div className="row">
      <div className="col-1"></div>
      <div className="col-10">
        <nav class="navbar navbar-expand-lg navbar-light">
          <div class="container-fluid">
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
              <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                <li class="nav-item">
                  <Link class="nav-link" to="/book_flight" style={currentTab(history,'/book_flight')}>Flights</Link>
                </li>
                <li class="nav-item">
                  <Link class="nav-link" to="/book_hotel" style={currentTab(history,'/book_hotel')}>Hotels</Link>
                </li>
                <li class="nav-item">
                  <Link class="nav-link" to="/vacation_rentals" style={currentTab(history,'/vacation_rentals')}>Vacation Rentals</Link>
                </li>
                <li class="nav-item">
                  <Link class="nav-link" to="/things_to_do" style={currentTab(history,'/things_to_do')}>Things To Do</Link>
                </li>
                <li class="nav-item">
                  <Link class="nav-link" to="/restaurants" style={currentTab(history,'/restaurants')}>Restaurants</Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
      <div className="col-1"></div>
    </div>
  )
}

export default withRouter(Menu2)
