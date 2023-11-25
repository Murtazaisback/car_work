import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import { Navigation, } from 'swiper/modules';
import { faArrowDown, faArrowUp, faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Car1, Car3 } from '../../imgs';

  const VerticalSlider = () => {
  
    return (
        <div className="vertical-slider-container">
            <Swiper
                direction={'vertical'}
                navigation={{
                    prevEl: '.custom-button-prev',
                    nextEl: '.custom-button-next',
                }}
                slidesPerView={3}
                spaceBetween={10}
                modules={[Navigation]}
                className="mySwiper vertical_slider"
                
            >
                <SwiperSlide className='vertical_slide'><img src={Car3} alt="" /></SwiperSlide>
                <SwiperSlide className='vertical_slide'>
                    <img src={Car3} alt="" />
                    <div className="car_gallery_overlay"></div>
                </SwiperSlide>
                <SwiperSlide className='vertical_slide'>
                    <img src={Car3} alt="" />
                    <div className="car_gallery_overlay"></div>
                </SwiperSlide>
                <SwiperSlide className='vertical_slide'>
                    <img src={Car1} alt="" />
                    <div className="car_gallery_overlay"></div>
                </SwiperSlide>
            </Swiper>
            <div className="custom-button-prev"><FontAwesomeIcon icon={faChevronUp} style={{ color: "#808080", }} /></div>
            <div className="custom-button-next"><FontAwesomeIcon icon={faChevronDown} style={{ color: "#808080", }} /></div>
        </div>
    )
}

export default VerticalSlider
