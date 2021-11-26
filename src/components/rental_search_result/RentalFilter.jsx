//TODO: Need to work on the mechanics of the filter section.
import React,{ useState} from 'react'

function RentalFilter() {
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
        <h6 className="text-muted">Style :</h6>
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
      <hr />
      <div>
        <h6 class="text-muted">No of Bedroom : </h6>
        <select class="form-select" >
          <option value="all" selected>All</option>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
          <option value="6">6</option>
        </select>
      </div>
      <hr />
      <div>
        <h6 class="text-muted">No of Bathroom : </h6>
        <select class="form-select" >
        <option value="all" selected>All</option>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
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

export default RentalFilter
