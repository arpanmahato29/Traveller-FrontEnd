import React from 'react';
import {FaPlaneDeparture} from 'react-icons/fa';
import {IoIosBed, IoMdRestaurant} from 'react-icons/io';
import {BsFillHouseFill} from 'react-icons/bs';
import {TiTicket} from 'react-icons/ti';
import {CgDetailsMore} from 'react-icons/cg';
const Menu = () => {
  return (
    <div className="row">
      <div className="col-1"></div>
      <div className="col-10">
        <div className="contianer">
          <div className="row py-4">
            <div className="col btn btn-outline-dark mx-2">
              <div className="row py-2">
                <div className="col-4">
                  <FaPlaneDeparture size={30} />
                </div>
                <div className="col-8">
                  <h6 className="">Flights</h6>
                </div>
              </div>
            </div>
            <div className="col btn btn-outline-dark mx-2">
              <div className="row py-2">
                <div className="col-4">
                  <IoIosBed size={30} />
                </div>
                <div className="col-8">
                  <h6 className="">Hotels</h6>
                </div>
              </div>
            </div>
            <div className="col btn btn-outline-dark mx-2">
              <div className="row py-2">
                <div className="col-4">
                  <BsFillHouseFill size={30} />
                </div>
                <div className="col-8">
                  <h6 className="">Vacation Rentals</h6>
                </div>
              </div>
            </div>
            <div className="col btn btn-outline-dark mx-2">
              <div className="row py-2">
                <div className="col-4">
                  <TiTicket size={30} />
                </div>
                <div className="col-8">
                  <h6 className="">Things To Do</h6>
                </div>
              </div>
            </div>
            <div className="col btn btn-outline-dark mx-2">
              <div className="row py-2">
                <div className="col-4">
                  <IoMdRestaurant size={30} />
                </div>
                <div className="col-8">
                  <h6 className="">Restaurants</h6>
                </div>
              </div>
            </div>
            <div className="col btn btn-outline-dark mx-2">
              <div className="row py-2">
                <div className="col-4">
                  <CgDetailsMore size={30} />
                </div>
                <div className="col-8">
                  <h6 className="">More</h6>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="col-1"></div>
    </div>
  );
}

export default Menu;