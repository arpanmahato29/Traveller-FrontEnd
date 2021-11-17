import {signup_call, signin_call } from '../../assets/api_calls/user';


export const signin = async (loginCredentials) => {
  let data = {
    error : false
  };
  const {username, password} = loginCredentials;
  const validEmailMsg = validateEmail(username);
  const validPasswordMsg = validatePassword(password);
  if(validEmailMsg !== true){
    data = {
      error : {
        msg : "Please provide a valid email address",
        type : 'email'
      }
    }
    return data;
  } else if(validPasswordMsg !== true){
    data = {
      error : {
        msg : validPasswordMsg,
        type : 'password'
      }
    }
    return data;
  }
  return await signin_call(loginCredentials);
}

export const signup = async (signupCredentials) => {
  let data = {
    error : false
  };
  const {email, password, firstName, lastName} = signupCredentials;
  const validFirstNameMsg = validateFirstName(firstName);
  const validLastNameMsg = validateLastName(lastName);
  const validEmailMsg = validateEmail(email);
  const validPasswordMsg = validatePassword(password);
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
  } else if(validEmailMsg !== true){
    data = {
      error : {
        msg : "Please provide a valid email address",
        type : 'email'
      }
    }
    return data;
  } else if(validPasswordMsg !== true){
    data = {
      error : {
        msg : validPasswordMsg,
        type : 'password'
      }
    }
    return data;
  }
  return await signup_call(signupCredentials);
}

export const authenticate = (data, next) => {
  console.log(data)
  if(typeof window !== 'undefined') {
    localStorage.setItem('jwt', JSON.stringify(data));
    next();
  }
}

export const signout = async () => {
  if(typeof window !== 'undefined'){
    localStorage.clear();
    window.location.replace('/');
  }
}

export const isAuthenticated = () => {
  if(typeof window == 'undefined'){
    return false;
  }
  if(localStorage.getItem('jwt')){
    return JSON.parse(localStorage.getItem('jwt'));
  } else {
    return false;
  }
}

export const validateFirstName = (firstName) => {
  if(firstName === null 
    || firstName === undefined
    || firstName.length === 0 ){
      return "Firstname cannot be empty"
    }
    if( !containsOnlyLetters(firstName)) {
    return "Firstname cannot have number or special characters";
  }
  return true;
}

export const validateLastName = (lastName) => {
  if(lastName.length > 0 && !containsOnlyLetters(lastName)) {
    return "Lastname cannot have number or special characters";
  }
  return true;
}

function validateEmail(email) {
  const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}

const validatePassword = password => {
  const re = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/;
  if(password.length < 6){
    return "password must be 6 or more characters";
  } else if(!re.test(password)){
    return `password must :\n
    1.) contain at least 1 lowercase alphabetical character\n
    2.) contain at least 1 uppercase alphabetical character\n
    3.) contain at least 1 numeric character\n
    4.) contain at least one special character`
  }
  return true;
}

const containsOnlyLetters = str => {
  return /^[a-zA-Z]+$/.test(str);
}

export const validateAge = (age) => {
  return age > 0 && age <= 100;
}

export const validateGender = (gender) => {
  return gender == 1 || gender == 0;
}
