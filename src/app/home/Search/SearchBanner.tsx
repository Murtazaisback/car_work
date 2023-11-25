import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faHeart} from "@fortawesome/free-solid-svg-icons"

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Pagination, Navigation } from 'swiper/modules';
import { Car1 } from '../../imgs';

const SearchBanner = () => {
  return (
    <>
    <Swiper
      slidesPerView={1}
      spaceBetween={40}
      loop={true}
      pagination={{
        clickable: true,
      }}
      navigation={{
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      }}
      modules={[Pagination, Navigation]}
      className="mySwiper ads_silder_wapper"
    >
      <SwiperSlide className='ads_silder'>
       

        <img src={Car1} alt="d" />
        
        <div className="ads_silder_text">
          <div className="ads_category">
            <button type='button' className='ads_category_active'>Business</button>
            <button type='button'>Vehicles .</button>
            <button type='button'>Stockholm</button>
          </div>
          <div className="ads_heading">Lorem ipsum dolor sit amet consectetur adipisicing elit.</div>
          <div className="ads_specs">
          Environmental fuel/Hybrid  .  2023
          </div>
        </div>
        <div className="ads_slider_price">
          <div className="ads_like">
            <div className='ads_like_text'>Paid Placement</div>
            <FontAwesomeIcon icon={faHeart} style={{color: "#3a63d5",}} size='xl'/>
          </div>
          <div className="ads_price">
            <div className='ads_date'>Today 02:02</div>
            <div className="main_ads_price">
              <span>SEK</span>
              552,000
            </div>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide className='ads_silder'>
       

        <img src={Car1} alt="d" />
        
        <div className="ads_silder_text">
          <div className="ads_category">
            <button type='button' className='ads_category_active'>Business</button>
            <button type='button'>Vehicles .</button>
            <button type='button'>Stockholm</button>
          </div>
          <div className="ads_heading">Lorem ipsum dolor sit amet consectetur adipisicing elit.</div>
          <div className="ads_specs">
          Environmental fuel/Hybrid  .  2023
          </div>
        </div>
        <div className="ads_slider_price">
          <div className="ads_like">
            <div className='ads_like_text'>Paid Placement</div>
            <FontAwesomeIcon icon={faHeart} style={{color: "#3a63d5",}} size='xl'/>
          </div>
          <div className="ads_price">
            <div className='ads_date'>Today 02:02</div>
            <div className="main_ads_price">
              <span>SEK</span>
              552,000
            </div>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide className='ads_silder'>
       

        <img src={Car1} alt="d" />
        
        <div className="ads_silder_text">
          <div className="ads_category">
            <button type='button' className='ads_category_active'>Business</button>
            <button type='button'>Vehicles .</button>
            <button type='button'>Stockholm</button>
          </div>
          <div className="ads_heading">Lorem ipsum dolor sit amet consectetur adipisicing elit.</div>
          <div className="ads_specs">
          Environmental fuel/Hybrid  .  2023
          </div>
        </div>
        <div className="ads_slider_price">
          <div className="ads_like">
            <div className='ads_like_text'>Paid Placement</div>
            <FontAwesomeIcon icon={faHeart} style={{color: "#3a63d5",}} size='xl'/>
          </div>
          <div className="ads_price">
            <div className='ads_date'>Today 02:02</div>
            <div className="main_ads_price">
              <span>SEK</span>
              552,000
            </div>
          </div>
        </div>
      </SwiperSlide>


      <div className="swiper-button-next"></div>
      <div className="swiper-button-prev"></div>
    </Swiper>
  </>
  )
}

export default SearchBanner
