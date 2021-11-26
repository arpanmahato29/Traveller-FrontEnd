import {API} from '../../backend'
import axios from 'axios'

export const getRentals = async (hotelQuery,token) => {
  const {checkInDate, checkOutDate, guests, search} = hotelQuery;
  const query = {
    checkInDate,
    checkOutDate,
    guests,
    search
  }
  const data = await axios.post(
    `${API}/rental/search`,
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