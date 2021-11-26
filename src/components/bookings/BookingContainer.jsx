import React from 'react'
import {FaRegCheckCircle} from 'react-icons/fa'

import Header from '../common/Header'
import Menu2 from '../common/Menu2'
import Footer from '../common/Footer'
import BookingDetails from './BookingDetails'

import {isAuthenticated} from '../common/helperMethods'

const BookingContainer = () => {
  const {firstName, email} = isAuthenticated().user
  return (
    <div>
      <Header />
      <Menu2 />
      <div className="row my-5">
        <div className="col-2 custom-col-2"></div>
        <div className="col-8 custom-col-8">
          <h1>
            <FaRegCheckCircle className="pb-1 me-2 text-success"/>
            Thank you for your order, {firstName}
          </h1>
          <p>
            <small className="text-muted">A confirmation email will be sent to you at {email} with your complete order details.</small>
          </p>
          <BookingDetails/>
        </div>
        <div className="col-2 custom-col-2"></div>
      </div>
      <Footer />
    </div>
  )
}

export default BookingContainer
