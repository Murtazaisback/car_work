import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass , faLocationDot} from '@fortawesome/free-solid-svg-icons'
// import {faLocationDot} from "@fortawesome/free-regular-svg-icons"

const SearchHead = () => {
  return (
    <div className='Searchhead_section'>
      <div className="search_wapper">
        <div className="search_info">
          <FontAwesomeIcon icon={faMagnifyingGlass} style={{ color: "#909090", }} />
          <div className="seach_item">
            <input type="text" placeholder='What do you want to search for?' />
            <button>FIND ADS</button>
          </div>
        </div>
        <div className="search_option">
          <div className="box">
          <FontAwesomeIcon icon={faLocationDot} style={{color: "#556177",}} />
            <select>
              <option selected>Whole Sweden</option>
              <option>Option 2</option>
              <option>Option 3</option>
              <option>Option 4</option>
              <option>Option 5</option>
            </select>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SearchHead
