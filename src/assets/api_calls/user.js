import {API} from "../../backend"
import axios from 'axios'

export const signup_call = async  user => {
  const data =  await axios.post(
    `${API}/user/signup`,
    JSON.stringify(user),
    {
      headers: {
        Accept:'application/json',
        'Content-Type':'application/json'
      }
    }
  )
  .then(response => response.data)
  .catch(error => error.response.data);

  console.log(data);
  return data;
};

export const signin_call = async user => {
  const data = await axios.post(
    `${API}/user/signin`,
    JSON.stringify(user),
    {
      headers: {
        Accept: 'application/json',
        "Content-Type": 'application/json'
      }
    }
  ).then(response => response.data)
  .catch(error => console.log(error));

  console.log(data);
  return data;
}