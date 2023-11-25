import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faArrowDown} from "@fortawesome/free-solid-svg-icons"



const Equipment = () => {

    const totalItems = 31; // Change this to the total number of items
  const itemsToShowInitially = 21; // Change this number as needed
  const [itemsToShow, setItemsToShow] = useState(itemsToShowInitially);

  const handleLoadMore = () => {
    // Set items to show to the total number if "Load More" is clicked
    setItemsToShow(totalItems);
  };
  return (
    <div>
      <h2 className='Equipment_heading'>Equipment</h2>
      <div className='Equipment_list_wapper'>
      <ul>
          {[...Array(itemsToShow)].map((_, index) => (
            <li key={index}>data {index + 1}</li>
          ))}
        </ul>
        {itemsToShow < totalItems && (
          <button onClick={handleLoadMore} ><div>Load More</div> 
            <FontAwesomeIcon icon={faArrowDown} style={{color: "#ffffff",}} />
           </button>
        )}
      </div>
    </div>
  )
}

export default Equipment
