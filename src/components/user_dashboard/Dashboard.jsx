import React from 'react'
import UserIntro from './UserIntro'
import UserPanel from './UserPanel'


const Dashboard = () => {
  return (
    <div>
      <UserPanel />
      <div className="row">
        <div className="col-1"></div>
        <div className="col-10">
          <div className="row">
            <div className="col-4 me-2">
              <div className="card border border-light border-5">
                <div className="card-body">
                  <UserIntro />
                </div>
              </div>
            </div>
            <div className="col-7"></div>
          </div>
        </div>
        <div className="col-1"></div>
      </div>
    </div>
  )
}

export default Dashboard
