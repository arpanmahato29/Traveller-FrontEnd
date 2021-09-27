import React from 'react'

const Loading = ({message}) => {
  return (
    <div className = "row my-5">
      <div className = "col-3"></div>
      <div className = "col-6 text-center text-success">
        <div class="card border border-success border-3" style={{height: "18rem"}}>
          <div class="card-body mt-5 ">
            <div class="spinner-border mb-2" style={{width: "5rem", height: "5rem" }} role="status">
              <span class="visually-hidden">Loading...</span>
            </div>
            <div>
              <h2>{message}</h2>
            </div>
          </div>
        </div>
      </div>
      <div className = "col-3"></div>
    </div>
  )
}

export default Loading
