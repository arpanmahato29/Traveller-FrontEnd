import {validateFirstName,validateLastName, validateAge, validateGender} from '../common/helperMethods'
export const getDay = (date) => {
  const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
  date = date.split('-');
  date = new Date(date[0],date[1]-1,date[2])
  return days[date.getDay()]
}

export const getDate = (date) => {
  date = date.split('-');
  date = new Date(date[0],date[1]-1,date[2]).toString();
  date = date.substring(3,date.indexOf('00:00:00'));
  return date;
}

export const getToday = () => {
  const today = new Date();
  let dd = today.getDate();
  let mm = today.getMonth() + 1;
  let yyyy = today.getFullYear();
  if (dd < 10) {
    dd = '0' + dd;
  }
  if (mm < 10) {
    mm = '0' + mm;
  }
  return dd + '/' + mm + '/' + yyyy;
}

export const getTotalCost = (price) => {
  return Number(price).toFixed(2);
}

export const getFarePrice = (price) => {
  return (0.80 * Number(price)).toFixed(2);
}

export const getTaxes = (price) => {
  return (0.18 * Number(price)).toFixed(2);
}

export const getFee = (price) => {
  return (0.02 * Number(price)).toFixed(2);
}

export const validatePassenger = (passenger) => {
  const {firstName, lastName,age,gender} = passenger;
  const validFirstNameMsg = validateFirstName(firstName);
  const validLastNameMsg = validateLastName(lastName);
  const validAgeMsg = validateAge(age);
  const validGenderMsg = validateGender(gender);
  let data = {
    error : false,
  };
  
  if(validFirstNameMsg !== true){
    data = {
      error : {
        msg : validFirstNameMsg,
        type : 'firstName'
      }
    }
    return data;
  } else if(validLastNameMsg !== true){
    data = {
      error : {
        msg : validLastNameMsg,
        type : 'lastName'
      }
    }
    return data;
  } else if(validAgeMsg !== true){
    data = {
      error : {
        msg : "Invalid age",
        type : 'age'
      }
    }
    return data;
  } else if(validGenderMsg !== true){
    data = {
      error : {
        msg : "Select a gender",
        type : 'gender'
      }
    }
    return data;
  }
  return data;
}