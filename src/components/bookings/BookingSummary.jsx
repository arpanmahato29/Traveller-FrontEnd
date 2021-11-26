import React from 'react'

const BookingSummary = () => {
  return(
    <div className="row">
      <div className="col-6">
        <h5>Order Details</h5>
        <div className="row">
          <div className="col-4 text-muted ">
            <p className="p-0 m-0"><small>Order Number :</small></p>
            <p className="p-0 m-0"><small>Order Date :</small></p>
            <p className="p-0 m-0"><small>Payment Method :</small></p>
            <p className="p-0 m-0"><small>Status :</small></p>
          </div>
          <div className="col-8 font-monospace">
            <p className="p-0 m-0"><small>xxxxxx</small></p>
            <p className="p-0 m-0"><small>xxxxxx</small></p>
            <p className="p-0 m-0"><small>xxxxxx</small></p>
            <p className="p-0 m-0"><small>xxxxxx</small></p>
          </div>
        </div>
      </div>
      
      <div className="col-6">
        <h5>Billing Details</h5>
        <div className="row">
          <div className="col-4 text-muted">
            <p className="p-0 m-0"><small>Subtotal :</small></p>
            <p className="p-0 m-0"><small>Fee :</small></p>
            <p className="p-0 m-0"><small>Taxes :</small></p>
            <hr/>
            <h5 className="p-0 m-0 text-dark">Total :</h5>
          </div>
          <div className="col-8 font-monospace">
            <p className="p-0 m-0"><small>xxxxxx</small></p>
            <p className="p-0 m-0"><small>xxxxxx</small></p>
            <p className="p-0 m-0"><small>xxxxxx</small></p>
            <hr/>
            <h5 className="text-dark p-0 m-0">xxxx</h5>
          </div>
        </div>
      </div>
    </div>
  )
}

export default BookingSummary
