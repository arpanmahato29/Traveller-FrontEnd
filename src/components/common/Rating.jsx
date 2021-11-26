import React from 'react'
import { getRatingState, getFilledStars, getEmptyStars } from './helperMethods';

const Rating = ({rating}) => {
  let filledStars = getFilledStars(parseInt(rating));
  let emptyStars = getEmptyStars(parseInt(rating));
  let ratingState = getRatingState(parseInt(rating));
  return (
    <div>
      <span class="badge secondary-bg text-dark">
      { 
        filledStars.map((star,key) => <span className="fs-4 text-warning" key={key} >{star + " "}</span>)
      }
      { 
        emptyStars.map((star,key) => <span className="fs-4 text-secondary" key={key} >{star + " "}</span>)
      }
      </span>
    </div>
  )
}

export default Rating

