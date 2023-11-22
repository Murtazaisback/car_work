import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import { Cab, Decoy1, Decoy2 } from '../../imgs';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBed,faShower,faCar,faStairs, faUpRightAndDownLeftFromCenter, faArrowDown } from '@fortawesome/free-solid-svg-icons'
import {faHeart} from "@fortawesome/free-regular-svg-icons"

const ResCard = () => {

    const initialCardsToShow = 2;
  const cardsToShowIncrement = 1;

  const [visibleCards, setVisibleCards] = useState(initialCardsToShow);

  const handleLoadMore = () => {
    setVisibleCards((prevVisibleCards) => prevVisibleCards + cardsToShowIncrement);
  };
  return (
    <>
    <div className="res_cards">
    {[...Array(visibleCards)].map((_, index) => (
          <>
          
        <div className="res_card">
                <Swiper
                    spaceBetween={30}
                    centeredSlides={true}
                    navigation={true}
                    modules={[Navigation]}
                    className="mySwiper"
                >
                    <SwiperSlide>
                        <div className="card_wapper">
                            <img src={Cab} alt="" className='res_card_img' />
                            <div className="res_card_overlay">
                                <div className="res_card_overlay_info">
                                    <span className="res_upper_card">Featured</span>
                                    <div className="res_lower_card">
                                        <span className="res_rent">For Rent</span>
                                        <p className="res_card_price">$4,5000 <span>/mo</span></p>
                                        <div className="res_lower_info">

                                            <div className="res_card_icon">
                                                <span className='res_card_icon_ite'>
                                                    <FontAwesomeIcon icon={faBed} style={{ color: "white", }} />
                                                    4 </span>
                                                <span className='res_card_icon_ite'>
                                                    <FontAwesomeIcon icon={faShower} style={{ color: "white", }} />
                                                    4 </span>
                                                <span className='res_card_icon_ite'>
                                                    <FontAwesomeIcon icon={faCar} style={{ color: "white", }} />
                                                    4 </span>
                                                <span className='res_card_icon_ite'>
                                                    <FontAwesomeIcon icon={faStairs} style={{ color: "white", }} />
                                                    4 </span>
                                            </div>
                                            <div className="res_right_i">
                                                <div className="res_i">
                                                    <FontAwesomeIcon icon={faUpRightAndDownLeftFromCenter} style={{ color: "white", }} />
                                                </div>
                                                <div className="res_i">
                                                    <FontAwesomeIcon icon={faHeart} />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="card_wapper">
                            <img src={Cab} alt="" className='res_card_img' />
                            <div className="res_card_overlay">
                                <div className="res_card_overlay_info">
                                    <span className="res_upper_card">Featured</span>
                                    <div className="res_lower_card">
                                        <span className="res_rent">For Rent</span>
                                        <p className="res_card_price">$4,5000 <span>/mo</span></p>
                                        <div className="res_lower_info">

                                            <div className="res_card_icon">
                                                <span className='res_card_icon_ite'>
                                                    <FontAwesomeIcon icon={faBed} style={{ color: "white", }} />
                                                    4 </span>
                                                <span className='res_card_icon_ite'>
                                                    <FontAwesomeIcon icon={faShower} style={{ color: "white", }} />
                                                    4 </span>
                                                <span className='res_card_icon_ite'>
                                                    <FontAwesomeIcon icon={faCar} style={{ color: "white", }} />
                                                    4 </span>
                                                <span className='res_card_icon_ite'>
                                                    <FontAwesomeIcon icon={faStairs} style={{ color: "white", }} />
                                                    4 </span>
                                            </div>
                                            <div className="res_right_i">
                                                <div className="res_i">
                                                    <FontAwesomeIcon icon={faUpRightAndDownLeftFromCenter} style={{ color: "white", }} />
                                                </div>
                                                <div className="res_i">
                                                    <FontAwesomeIcon icon={faHeart} />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </SwiperSlide>
                </Swiper>

            </div><div className="res_card">
                <Swiper
                    spaceBetween={30}
                    centeredSlides={true}
                    navigation={true}
                    modules={[Navigation]}
                    className="mySwiper"
                >
                    <SwiperSlide>
                        <div className="card_wapper">
                            <img src={Decoy1} alt="" className='res_card_img' />
                            <div className="res_card_overlay">
                                <div className="res_card_overlay_info">
                                    <span className="res_upper_card">Featured</span>
                                    <div className="res_lower_card">
                                        <span className="res_rent">For Rent</span>
                                        <p className="res_card_price">$4,5000 <span>/mo</span></p>
                                        <div className="res_lower_info">

                                            <div className="res_card_icon">
                                                <span className='res_card_icon_ite'>
                                                    <FontAwesomeIcon icon={faBed} style={{ color: "white", }} />
                                                    4 </span>
                                                <span className='res_card_icon_ite'>
                                                    <FontAwesomeIcon icon={faShower} style={{ color: "white", }} />
                                                    4 </span>
                                                <span className='res_card_icon_ite'>
                                                    <FontAwesomeIcon icon={faCar} style={{ color: "white", }} />
                                                    4 </span>
                                                <span className='res_card_icon_ite'>
                                                    <FontAwesomeIcon icon={faStairs} style={{ color: "white", }} />
                                                    4 </span>
                                            </div>
                                            <div className="res_right_i">
                                                <div className="res_i">
                                                    <FontAwesomeIcon icon={faUpRightAndDownLeftFromCenter} style={{ color: "white", }} />
                                                </div>
                                                <div className="res_i">
                                                    <FontAwesomeIcon icon={faHeart} />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="card_wapper">
                            <img src={Decoy1} alt="" className='res_card_img' />
                            <div className="res_card_overlay">
                                <div className="res_card_overlay_info">
                                    <span className="res_upper_card">Featured</span>
                                    <div className="res_lower_card">
                                        <span className="res_rent">For Rent</span>
                                        <p className="res_card_price">$4,5000 <span>/mo</span></p>
                                        <div className="res_lower_info">

                                            <div className="res_card_icon">
                                                <span className='res_card_icon_ite'>
                                                    <FontAwesomeIcon icon={faBed} style={{ color: "white", }} />
                                                    4 </span>
                                                <span className='res_card_icon_ite'>
                                                    <FontAwesomeIcon icon={faShower} style={{ color: "white", }} />
                                                    4 </span>
                                                <span className='res_card_icon_ite'>
                                                    <FontAwesomeIcon icon={faCar} style={{ color: "white", }} />
                                                    4 </span>
                                                <span className='res_card_icon_ite'>
                                                    <FontAwesomeIcon icon={faStairs} style={{ color: "white", }} />
                                                    4 </span>
                                            </div>
                                            <div className="res_right_i">
                                                <div className="res_i">
                                                    <FontAwesomeIcon icon={faUpRightAndDownLeftFromCenter} style={{ color: "white", }} />
                                                </div>
                                                <div className="res_i">
                                                    <FontAwesomeIcon icon={faHeart} />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </SwiperSlide>
                </Swiper>

            </div><div className="res_card">
                <Swiper
                    spaceBetween={30}
                    centeredSlides={true}
                    navigation={true}
                    modules={[Navigation]}
                    className="mySwiper"
                >
                    <SwiperSlide>
                        <div className="card_wapper">
                            <img src={Decoy2} alt="" className='res_card_img' />
                            <div className="res_card_overlay">
                                <div className="res_card_overlay_info">
                                    <span className="res_upper_card">Featured</span>
                                    <div className="res_lower_card">
                                        <span className="res_rent">For Rent</span>
                                        <p className="res_card_price">$4,5000 <span>/mo</span></p>
                                        <div className="res_lower_info">

                                            <div className="res_card_icon">
                                                <span className='res_card_icon_ite'>
                                                    <FontAwesomeIcon icon={faBed} style={{ color: "white", }} />
                                                    4 </span>
                                                <span className='res_card_icon_ite'>
                                                    <FontAwesomeIcon icon={faShower} style={{ color: "white", }} />
                                                    4 </span>
                                                <span className='res_card_icon_ite'>
                                                    <FontAwesomeIcon icon={faCar} style={{ color: "white", }} />
                                                    4 </span>
                                                <span className='res_card_icon_ite'>
                                                    <FontAwesomeIcon icon={faStairs} style={{ color: "white", }} />
                                                    4 </span>
                                            </div>
                                            <div className="res_right_i">
                                                <div className="res_i">
                                                    <FontAwesomeIcon icon={faUpRightAndDownLeftFromCenter} style={{ color: "white", }} />
                                                </div>
                                                <div className="res_i">
                                                    <FontAwesomeIcon icon={faHeart} />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="card_wapper">
                            <img src={Decoy2} alt="" className='res_card_img' />
                            <div className="res_card_overlay">
                                <div className="res_card_overlay_info">
                                    <span className="res_upper_card">Featured</span>
                                    <div className="res_lower_card">
                                        <span className="res_rent">For Rent</span>
                                        <p className="res_card_price">$4,5000 <span>/mo</span></p>
                                        <div className="res_lower_info">

                                            <div className="res_card_icon">
                                                <span className='res_card_icon_ite'>
                                                    <FontAwesomeIcon icon={faBed} style={{ color: "white", }} />
                                                    4 </span>
                                                <span className='res_card_icon_ite'>
                                                    <FontAwesomeIcon icon={faShower} style={{ color: "white", }} />
                                                    4 </span>
                                                <span className='res_card_icon_ite'>
                                                    <FontAwesomeIcon icon={faCar} style={{ color: "white", }} />
                                                    4 </span>
                                                <span className='res_card_icon_ite'>
                                                    <FontAwesomeIcon icon={faStairs} style={{ color: "white", }} />
                                                    4 </span>
                                            </div>
                                            <div className="res_right_i">
                                                <div className="res_i">
                                                    <FontAwesomeIcon icon={faUpRightAndDownLeftFromCenter} style={{ color: "white", }} />
                                                </div>
                                                <div className="res_i">
                                                    <FontAwesomeIcon icon={faHeart} />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </SwiperSlide>
                </Swiper>

            </div></>
          ))}
      </div>
      {visibleCards < 6 && (
        <button className="load-more-button_res" onClick={handleLoadMore}>
          Load More <FontAwesomeIcon icon={faArrowDown} />
        </button>
      )}
    </>
  )
}

export default ResCard
