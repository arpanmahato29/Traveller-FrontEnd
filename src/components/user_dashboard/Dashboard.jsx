import React from 'react'
import UserIntro from './UserIntro'
import UserPanel from './UserPanel'
import Feed from './Feed'

const Dashboard = () => {
  return (
    <div>
      <UserPanel />
      <div className="row">
        <div className="col-1"></div>
        <div className="col-10">
          <div className="row">
            <div className="col-4 me-4 mb-5">
              <div className="card border border-light border-5">
                <div className="card-body">
                  <UserIntro />
                </div>
              </div>
            </div>
            <div className="col-7">
              <div className="card border border-light border-5">
                <div className="card-body text-center">
                  <Feed />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-1"></div>
      </div>
    </div>
  )
}

export default Dashboard
