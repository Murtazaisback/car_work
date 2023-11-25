import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowDown, faGasPump, faHeart, faPhone } from '@fortawesome/free-solid-svg-icons'
import {faEnvelope, } from '@fortawesome/free-regular-svg-icons'
import { Car3 } from '../../imgs'
import VerticalSlider from './VerticalSlider'


const SingleCarFeatures = () => {

    const allItems = [
        { id: 1, text: 'Item 1', icon: faGasPump },
        { id: 2, text: 'Item 2', icon: faGasPump },
        { id: 3, text: 'Item 3', icon: faGasPump },
        { id: 4, text: 'Item 4', icon: faGasPump },
        { id: 5, text: 'Item 5', icon: faGasPump },
        { id: 6, text: 'Item 6', icon: faGasPump },
        { id: 7, text: 'Item 7', icon: faGasPump },
        { id: 8, text: 'Item 8', icon: faGasPump },
        { id: 9, text: 'Item 9', icon: faGasPump },
      ];
    
      const initialItemsToShow = 8;
      const [itemsToShow, setItemsToShow] = useState(initialItemsToShow);
    
      const handleLoadMore = () => {
        // Update the state to show all items
        setItemsToShow(allItems.length);
      };
      
  return (
    <>
      <div className="singlecar_features_wapper">
            {Array.from({ length: itemsToShow }).map((_, index) => (
              <div className="singlecar_item"  key={index}>
                <div className="singlecar_icon">
                <FontAwesomeIcon icon={faGasPump} style={{color: '#FFF'}} size='xl'/>
                </div>
                <div className="singlecar_text">
                  <div className="singlecar_text-upper">
                    Fuel
                  </div>
                  <div className="singlecar_text-lower">Petrol</div>
                </div>
              </div>
              ))}
              
            </div>
            {itemsToShow < allItems.length && (
          <div className="white-overlay"></div>
        )}
            {itemsToShow < allItems.length && (
          <button className="load-more-btn" onClick={handleLoadMore}>
            Load More 
            <FontAwesomeIcon icon={faArrowDown} style={{color: "#ffffff",}} />
          </button>
        )}
        </>
  )
}

export default SingleCarFeatures
