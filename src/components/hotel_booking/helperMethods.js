export const checkConstrains = (hotelSearchDetails) => {
  const {checkInDate,checkOutDate} = hotelSearchDetails;
  if(nullDate(checkInDate) || dateEarlierThanToday(new Date(checkInDate))) {
    return `Please provide valid CheckIn Date`
  }
  if(nullDate(checkOutDate) || dateEarlierThanToday(new Date(checkOutDate))) {
    return `Please provide valid CheckOut Date`
  }
  if(invalidReturnDate(checkInDate,checkOutDate)){
    return `CheckOut Date should be after CheckIn Date`
  }
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