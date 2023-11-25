import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowDown, faGasPump, faHeart, faPhone } from '@fortawesome/free-solid-svg-icons'
import {faEnvelope, } from '@fortawesome/free-regular-svg-icons'
import { Car3 } from '../../imgs'
import VerticalSlider from './VerticalSlider'
import SingleCarFeatures from './SingleCarFeatures';

const SingleCarHead = () => {
  


  return (
    <div>
      <h1 className='singlecar_title'>Hyundai Bayon 1.0 T-GDI Essential Immediate delivery</h1>
      <div className="singlecar_card">
        <div className="singlecar_wapper">
          <div className="singlecar_info">
            <div className="singlecar_info_text">
              <div className="singlecar_infoP">
                <div>
                  <div className='SC_info_p'><span className='Bold_blue'>SEK </span> 229,000</div>
                    <div className='singlecar_grey'>(SEK <span>180,200</span> ex. VAT)</div>
                </div>
                <FontAwesomeIcon icon={faHeart} style={{color: "#3a63d5",}} size='xl'/>
              </div>
              <div>
                <div className='SC_lower'><span className='Bold_blue'>Sold by: </span>Höglunds Bil AB </div>
                <span className='singlecar_grey'>BUSINESS</span>
              </div>
              <button className='blue_btn'><FontAwesomeIcon icon={faEnvelope} style={{color: "#FFF",}} /> Send Message</button>
              <button className='white_btn'><FontAwesomeIcon icon={faPhone}  style={{color: "#abafb5",}} /> phone Number</button>
            </div>
            <div className="singlecar_info_img">
              <img src={Car3} alt="sddwe" />
            </div>
            <div className="singlecar_info_silder">
              <VerticalSlider />
            </div>
          </div>
          <div className="singlecar_features">
            
          <SingleCarFeatures/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SingleCarHead