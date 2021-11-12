import {API} from '../../backend'
import axios from 'axios'

export const getFlights = async (flightQuery) => {
  const data = await axios.get(
    `${API}/scheduledFlight/search`, 
    {
      params: flightQuery
    }
  ).then(response => response.data)
  .catch(error => error.response.data)

  console.log(data);
  return data; 
}