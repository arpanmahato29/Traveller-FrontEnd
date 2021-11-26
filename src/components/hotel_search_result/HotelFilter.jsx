//TODO: Need to work on the mechanics of the filter section.
import React,{ useState} from 'react'

function HotelFilter() {
  const [filters, setFilters] = useState({
    priceLower:0,
    priceHigher:18000,
  })
  const [didChange, setDidChange] = useState(false)

  let customStyles = {
    visibility : 'hidden'
  }

  const handleChange = name => event => {
    setFilters({...filters, [name] : event.target.value });
    if(!didChange){
      handleDidChange();
    }
  }
  const handleDidChange = async() => {
    await setDidChange(true);
    customStyles = {visibility: 'visible'}
  }
  const handleSubmit = (event) => {
    event.preventDefault();
    
  }
  return (
    <div className="py-3 px-4 border border-3">
      <h4>Filters</h4>
      <div>
        <label for="customRange1" class="form-label text-muted">Price</label>
        <p>Upto : {filters.priceHigher}</p>
        <input type="range" class="form-range" id="customRange1" min={filters.priceLower} max={filters.priceHigher} onChange={handleChange("priceHigher")} value={filters.priceHigher}/>
      </div>
      <hr />
      <div>
        <h6 className="text-muted">Hotel Class :</h6>
        <div class="form-check">
          <input 
            class="form-check-input" 
            type="checkbox" 
            value="5" 
            id="5-star" />
          <label class="form-check-label" for="5-star">
            5 stars
          </label>
        </div>
        <div class="form-check">
          <input 
            class="form-check-input" 
            type="checkbox" 
            value="4" 
            id="4-star" />
          <label class="form-check-label" for="4-star">
            4 stars
          </label>
        </div>
        <div class="form-check">
          <input 
            class="form-check-input" 
            type="checkbox" 
            value="3" 
            id="3-star" />
          <label class="form-check-label" for="3-star">
            3 stars
          </label>
        </div>
        <div class="form-check">
          <input 
            class="form-check-input" 
            type="checkbox" 
            value="2" 
            id="2-star" />
          <label class="form-check-label" for="2-star">
            2 stars
          </label>
        </div>
      </div>
      <hr />
      <div>
        <h6 class="text-muted">Style : </h6>
        <select class="form-select" >
          <option value="all" selected>All</option>
          <option value="budget">Budget</option>
          <option value="mid-range">Mid-Range</option>
          <option value="luxury">Luxury</option>
          <option value="business">Business</option>
          <option value="modern">Modern</option>
          <option value="romantic">Romantic</option>
          <option value="family-friendly">Family-Friendly</option>
        </select>
      </div>
      <div style={customStyles}>
        <hr/>
        <div className="d-grid gap-2 col-4 mx-auto">
          <button type="submit" className="btn btn-success btn-sm" onClick="">
            Apply
          </button>
        </div>
      </div>
    </div>
  )
}

export default HotelFilter
