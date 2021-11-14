import {API} from '../../backend'
import axios from 'axios'

export const getFlights = async (flightQuery,token) => {
  const data = await axios.get(
    `${API}/scheduledFlight/search`,
    {
      params: JSON.stringify(flightQuery),
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