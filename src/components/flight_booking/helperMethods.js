import airports from '../../assets/data/airports';
export const checkConstrains = (flightDetails) => {
  const {source, destination,departureDate,returnDate,isReturnAvailable} = flightDetails;
  const sourceCity = airports.find(airport => airport.IATA_code === source)
  const destinationCity = airports.find(airport => airport.IATA_code === destination)
  if(checkSameSourceDestination(source, destination)){
    return `Source(${sourceCity.city_name}) and Destination(${destinationCity.city_name}) cannot be same`
  }
  if(nullDate(departureDate) || dateEarlierThanToday(new Date(departureDate))){
    return `Please provide valid Date of Departure`
  }
  if(isReturnAvailable && (nullDate(returnDate) || dateEarlierThanToday(new Date(returnDate)))){
    return `Please provide valid Date of Return`
  }
  if(invalidReturnDate(departureDate,returnDate)){
    return `Return Date should be after Departure Date`
  }

}

const checkSameSourceDestination = (source, destination) => {
  return source === destination;
}

const nullDate = (date) => {
  return date === null;
}

const dateEarlierThanToday = (date) => {
  return date <= new Date()
}

const invalidReturnDate = (departureDate, returnDate) => {
  return departureDate >= returnDate
}