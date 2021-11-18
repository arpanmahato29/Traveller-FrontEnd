import airlines from "../../assets/data/airlines"

export const getFlightBrand = (brandName) => {
  if(brandName === 'Air Asia'){
    return airlines.air_asia;
  } else if(brandName === 'Air India'){
    return airlines.air_india;
  } else if(brandName === 'Indigo'){
    return airlines.indigo;
  } else if(brandName === 'SpiceJet'){
    return airlines.spicejet;
  } else if(airlines === 'Vistara'){
    return airlines.vistara;
  }
  return airlines.unknown;
}

export const  getDate = (date) => {
  date = date.split('/');
  date = new Date(date[0],date[1]-1,date[2]).toString();
  date = date.substring(0,3) + "," + date.substring(3,date.indexOf('00:00:00'));
  return date;
}

export const getTravelHours = (arrivalTime, departureTime) => {
  const arrivalHrs = Number(arrivalTime.substring(0,2));
  const arrivalMins = Number(arrivalTime.substring(3));
  const departureHrs = Number(departureTime.substring(0,2));
  const departureMins = Number(departureTime.substring(3));

  const timeTaken = ((arrivalHrs * 60) + arrivalMins) - ((departureHrs * 60) + departureMins);
  let hrsTaken = parseInt(timeTaken / 60);
  let minsTaken = parseInt(timeTaken % 60);
  hrsTaken = hrsTaken < 10 ? '0' + hrsTaken : hrsTaken;
  minsTaken = minsTaken < 10 ? '0' + minsTaken : minsTaken;
  
  return `${hrsTaken} hrs ${minsTaken} min`;
}
