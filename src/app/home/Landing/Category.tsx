import React, { useRef, useState } from 'react';
import "../Styles/LandingPageComponent.css"
import { Link } from 'react-router-dom'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import { Home, Car,Laptop } from '../../imgs';

const Category = () => {
  return (
    <div className='Langing_container'>
        <div className="Category_btn">
            <Link to="/Home/categories" className='Landing_btn_main '>All Categories</Link>
        </div>
        <div className="Category_slider">
        <Swiper
        spaceBetween={20}
        slidesPerView={4}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        breakpoints={{
          220: {
            slidesPerView: 1.6,
          },
          768: {
            slidesPerView: 3,
          },
          1200: {
            slidesPerView: 4,
          },
        }}
        navigation={true}
        loop={true}
        modules={[Autoplay, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide className='Swiper_round'>
            <div className="category_card_img">
                <img src={Home} alt="ee" />
                <button>For The Home</button>
            </div>
        </SwiperSlide>
        <SwiperSlide className='Swiper_round'>
            <div className="category_card_img">
                <img src={Car} alt="ee" />
                <button>Vehicle</button>
            </div>
        </SwiperSlide>
        <SwiperSlide className='Swiper_round'>
            <div className="category_card_img">
                <img src={Laptop} alt="ee" />
                <button>Electronics</button>
            </div>
        </SwiperSlide>
        <SwiperSlide className='Swiper_round'>
            <div className="category_card_img">
                <img src={Home} alt="ee" />
                <button>personally</button>
            </div>
        </SwiperSlide>
        <SwiperSlide className='Swiper_round'>
            <div className="category_card_img">
                <img src={Home} alt="ee" />
                <button>Electronics</button>
            </div>
        </SwiperSlide>
      </Swiper>
        </div>
        
    </div>
  )
}

export default Category
