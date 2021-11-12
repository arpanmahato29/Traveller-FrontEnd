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
        <h6 className="text-muted">Departure Time :</h6>
        <div class="form-check">
          <input 
            class="form-check-input" 
            type="checkbox" 
            value="early morning" 
            id="early-morning" />
          <label class="form-check-label" for="early-morning">
            0:00 - 6:00 (Early Morning)
          </label>
        </div>
        <div class="form-check">
          <input class="form-check-input" type="checkbox" value="morning" id="morning" />
          <label class="form-check-label" for="morning">
            6:00 - 12:00 (Morning)
          </label>
        </div>
        <div class="form-check">
          <input class="form-check-input" type="checkbox" value="mid day" id="mid-day" />
          <label class="form-check-label" for="mid-day">
            12:00 - 18:00 (Mid Day)
          </label>
        </div>
        <div class="form-check">
          <input class="form-check-input" type="checkbox" value="night" id="night" />
          <label class="form-check-label" for="night">
            18:00 - 24:00 (Night)
          </label>
        </div>
      </div>
      <hr />
      <div>
        <h6 class="text-muted">Airlines : </h6>
        <div class="form-check">
          <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
          <label class="form-check-label" for="flexCheckDefault">
            Air Asia
          </label>
        </div>
        <div class="form-check">
          <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
          <label class="form-check-label" for="flexCheckDefault">
            Air India
          </label>
        </div>
        <div class="form-check">
          <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
          <label class="form-check-label" for="flexCheckDefault">
            IndiGo
          </label>
        </div>
        <div class="form-check">
          <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
          <label class="form-check-label" for="flexCheckDefault">
            SpiceJet
          </label>
        </div>
        <div class="form-check">
          <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
          <label class="form-check-label" for="flexCheckDefault">
            Vistara
          </label>
        </div>
        <div class="form-check">
          <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
          <label class="form-check-label" for="flexCheckDefault">
            Others
          </label>
        </div>
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
