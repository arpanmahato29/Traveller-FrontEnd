import {API} from '../../backend'
import axios from 'axios'

export const getFlights = async (flightQuery,token) => {
  const {source, destination,departure, travelClass,passenger} = flightQuery;
  const query = {
    source,
    destination,
    departure,
    passenger
  }
  const data = await axios.post(
    `${API}/scheduledFlight/search`,
    JSON.stringify(query),
    {
      headers: {
        Accept: 'application/json',
        "Content-type": "application/json",
        Authorization:`Bearer ${token}`
      }
  }
  ).then(response => {
    return {
      data : response.data,
      error : false
    }
  })
  .catch(error => error.response.data)

  return data; 
}

export const bookFlight = async (bookingDetails,token) => {
  const data = await axios.post(
    `${API}/booking/createBooking`,
    JSON.stringify(bookingDetails),{
      headers: {
        Accept: 'application/json',
        "Content-type": "application/json",
        Authorization:`Bearer ${token}`
      }
    }
  ).then(response => response.data)
  .catch(error => error.response.data)

  console.log(data);
  return data;
}