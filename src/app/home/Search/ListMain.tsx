import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart, faArrowRight, faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { Car1 } from '../../imgs';
// import './ListMain.css'; // Import your CSS file for styling

const itemsPerPage = 5; 


const ListMain = () => {


    const [currentPage, setCurrentPage] = useState(1);
  const [fadeOut, setFadeOut] = useState(false);

  // Sample data, replace it with your actual data
  const adsData = Array.from({ length: 20 }, (_, i) => i + 1);

  const totalPages = Math.ceil(adsData.length / itemsPerPage);

  const handlePageChange = (newPage: React.SetStateAction<number>) => {
    setFadeOut(true);
    setTimeout(() => {
      setCurrentPage(newPage);
      setFadeOut(false);
    }, 500); // Adjust the timeout based on your transition duration
  };

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      handlePageChange(currentPage + 1);
    }
  };

  const handlePrevPage = () => {
    if (currentPage > 1) {
      handlePageChange(currentPage - 1);
    }
  };
  return (
    <div className='main_list_section'>
        {adsData
        .slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage)
        .map((ad, index) => (
            <div className={`list_item ${fadeOut && 'fade-out'}`}
            key={index}>
            <img src={Car1} alt="d" />
            
            <div className="ads_silder_text">
              <div className="ads_category">
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
              <div className='ads_date'>Today 02:02</div>
                <FontAwesomeIcon icon={faHeart} style={{color: "#3a63d5",}} size='xl'/>
              </div>
              <div className="ads_price">
                <div className="main_ads_price">
                  <span>SEK</span>
                  552,000
                </div>
              </div>
            </div>
            </div>
        ))}

<div className='no_listItem'>
        {`${(currentPage - 1) * itemsPerPage + 1}-${Math.min(
          currentPage * itemsPerPage,
          adsData.length
        )} of the total ${adsData.length} ads`}
      </div>
      {totalPages > 1 && (
        <div className='pagination'>
          <button onClick={handlePrevPage}>
          <FontAwesomeIcon icon={faArrowLeft} style={{color: "#fff",}} />
          </button>
          <div>

          {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
            <button
              key={page}
              className={page === currentPage ? 'active' : ''}
              onClick={() => handlePageChange(page)}
            >
              {page}
            </button>
          ))}
          </div>
          <button onClick={handleNextPage}>
          <FontAwesomeIcon icon={faArrowRight} style={{color: "#fff",}} />
          </button>
        </div>
      )}

      
        
        {/* <div className="list_item">
        <img src={Car1} alt="d" />
        
        <div className="ads_silder_text">
          <div className="ads_category">
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
          <div className='ads_date'>Today 02:02</div>
            <FontAwesomeIcon icon={faHeart} style={{color: "#3a63d5",}} size='xl'/>
          </div>
          <div className="ads_price">
            <div className="main_ads_price">
              <span>SEK</span>
              552,000
            </div>
          </div>
        </div>
        </div>
        <div className="list_item">
        <img src={Car1} alt="d" />
        
        <div className="ads_silder_text">
          <div className="ads_category">
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
          <div className='ads_date'>Today 02:02</div>
            <FontAwesomeIcon icon={faHeart} style={{color: "#3a63d5",}} size='xl'/>
          </div>
          <div className="ads_price">
            <div className="main_ads_price">
              <span>SEK</span>
              552,000
            </div>
          </div>
        </div>
        </div>
        <div className="list_item">
        <img src={Car1} alt="d" />
        
        <div className="ads_silder_text">
          <div className="ads_category">
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
          <div className='ads_date'>Today 02:02</div>
            <FontAwesomeIcon icon={faHeart} style={{color: "#3a63d5",}} size='xl'/>
          </div>
          <div className="ads_price">
            <div className="main_ads_price">
              <span>SEK</span>
              552,000
            </div>
          </div>
        </div>
        </div>
        <div className="list_item">
        <img src={Car1} alt="d" />
        
        <div className="ads_silder_text">
          <div className="ads_category">
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
          <div className='ads_date'>Today 02:02</div>
            <FontAwesomeIcon icon={faHeart} style={{color: "#3a63d5",}} size='xl'/>
          </div>
          <div className="ads_price">
            <div className="main_ads_price">
              <span>SEK</span>
              552,000
            </div>
          </div>
        </div>
        </div>
        <div className="list_item">
        <img src={Car1} alt="d" />
        
        <div className="ads_silder_text">
          <div className="ads_category">
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
          <div className='ads_date'>Today 02:02</div>
            <FontAwesomeIcon icon={faHeart} style={{color: "#3a63d5",}} size='xl'/>
          </div>
          <div className="ads_price">
            <div className="main_ads_price">
              <span>SEK</span>
              552,000
            </div>
          </div>
        </div>
        </div> */}
        {/* <div className='no_listItem'>1-5 of the total <span>234</span> ads</div> */}
        
      
    </div>
  )
}

export default ListMain
