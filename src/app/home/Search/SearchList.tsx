import React, { useState } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBell } from "@fortawesome/free-regular-svg-icons"
import SearchBanner from './SearchBanner'
import ListMain from './ListMain'

const SearchList = () => {

    const [selectedAdType, setSelectedAdType] = useState('For Sale');
    const adTypes = ['For Sale', 'For Rent', 'For Lowered Price'];
    const [showOnly, setShowOnly] = useState(false);

    const handleAdTypeChange = (adType: React.SetStateAction<string>) => {
        setSelectedAdType(adType);
    };

    const handleShowOnlyChange = () => {
        setShowOnly(!showOnly);
    };
    return (
        <div className='search_list'>
            <div className="searchlist_wapper">
                <div className="search_ads">
                    <div className="typeads_title">Type of ad: </div>
                    {adTypes.map((adType) => (
                        <label key={adType} className={`typead_input ${selectedAdType === adType ? 'active_typeads' : ''}`}>
                            <input
                                type="radio"
                                name="adType"
                                className="typead_field"
                                checked={selectedAdType === adType}
                                onChange={() => handleAdTypeChange(adType)}
                            />
                            <div>{adType}</div>
                        </label>
                    ))}
                    <div className="typeads_title">Show only: </div>
                    <div className="typead_input">
                        {/* <input type="radio" className='typead_field' /> */}
                        <label className={`typead_input ${showOnly ? 'active_typeads' : ''}`}>
                            <input
                                type="radio"
                                name="showOnly"
                                className="typead_field"
                                checked={showOnly}
                                onChange={handleShowOnlyChange}
                            />
                            <div>Show Only</div>
                        </label>

                    </div>
                </div>
                <div className="Searchheading_box">
                    <div className="Searchheading_box_left">
                        <h2>Vehicles are sold throughout Sweden</h2>
                        <span>251,00 ads</span>
                    </div>
                    <button>
                        <FontAwesomeIcon icon={faBell} style={{ color: "#fff", }} />
                        Create Converage
                    </button>
                </div>
                <div className="searchmain_list">
                    <div className="searchlist_head">
                        <div className='searchlist_head_option'>
                            <button className='activ_btn_search'>All</button>
                            <button>Private</button>
                            <button>Business</button>
                        </div>
                        <div className='searchlist_head_text'><a href="">Read about the sorting</a> of the search results</div>
                        <div className="searchlist_head_sort">
                            <div className="typeads_title">Type of ad: </div>
                            <select name="" id="" className='searchlist_head_sort_box'>
                                <option value="">Latest</option>
                                <option value="">Latest</option>
                                <option value="">Latest</option>
                            </select>
                        </div>
                    </div>
                    <div className="searchlist_ads">
                        <div className="search_banner">
                            <SearchBanner />
                            <ListMain />
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default SearchList
