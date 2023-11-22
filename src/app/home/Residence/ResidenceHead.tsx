import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBuilding, faHouse, faTree, faHouseChimneyWindow , faPeopleRoof} from '@fortawesome/free-solid-svg-icons'



const ResidenceHead = () => {
  const [activeFilter, setActiveFilter] = useState('Rent');
  const [dataRes, setDataRes] = useState(getInitialData('Rent'));

  // Function to get initial data for each filter
  function getInitialData(filter: string): { building: number; house: number; tree: number; abrod: number; farm: number } {
    switch (filter) {
      case 'Rent':
        return {
          building: 12000,
          house: 12000,
          tree: 12000,
          abrod: 120,
          farm: 1,
        };
      // Add cases for other filters as needed
      default:
        return {
          building: 0,
          house: 0,
          tree: 0,
          abrod: 0,
          farm: 0,
        };
    }
  }

  // Function to update data_res based on the selected filter
  function getUpdatedData(filter: string): { building: number; house: number; tree: number; abrod: number; farm: number } {
    // Replace the logic below with your actual data manipulation
    switch (filter) {
      case 'Rent':
        return {
          building: 12000,
          house: 12000,
          tree: 12000,
          abrod: 120,
          farm: 1,
        };
      case 'Buy':
        return {
          building: 8000,
          house: 10000,
          tree: 5000,
          abrod: 50,
          farm: 5,
        };
      case 'Change':
        return {
          building: 15000,
          house: 15000,
          tree: 8000,
          abrod: 80,
          farm: 8,
        };
      case 'Find Tenant':
        return {
          building: 10000,
          house: 12000,
          tree: 6000,
          abrod: 60,
          farm: 3,
        };
      case 'Find Buyers':
        return {
          building: 12000,
          house: 12000,
          tree: 12000,
          abrod: 120,
          farm: 2,
        };
      default:
        return getInitialData(filter);
    }
  }

  const handleFilterClick = (filter: string) => {
    // Update data_res based on the selected filter
    const updatedDataRes = getUpdatedData(filter);

    // Set the updated data_res and active filter
    setDataRes(updatedDataRes);
    setActiveFilter(filter);
  };
  return (
    <div className='Res_container'>
      <div className="res_wapper">
        <h2 className='res_subtitle'>Residence Whole Sweden</h2>
        <h1 className='res_title'>Search Home of Property form</h1>
      </div>
        <div className="res_filter">
            <div className='filter_row'>

            <div
            className={`filter_row_item ${activeFilter === 'Rent' ? 'filter_row_active' : ''}`}
            onClick={() => handleFilterClick('Rent')}
          >
            Rent
          </div>
          <span></span>
          <div
            className={`filter_row_item ${activeFilter === 'Buy' ? 'filter_row_active' : ''}`}
            onClick={() => handleFilterClick('Buy')}
          >
            Buy
          </div>
          <span></span>
          <div
            className={`filter_row_item ${activeFilter === 'Change' ? 'filter_row_active' : ''}`}
            onClick={() => handleFilterClick('Change')}
          >
            Change
          </div>
          <span></span>
          <div
            className={`filter_row_item ${activeFilter === 'Find Tenant' ? 'filter_row_active' : ''}`}
            onClick={() => handleFilterClick('Find Tenant')}
          >
            Find Tenant
          </div>
          <span></span>
          <div
            className={`filter_row_item ${activeFilter === 'Find Buyers' ? 'filter_row_active' : ''}`}
            onClick={() => handleFilterClick('Find Buyers')}
          >
            Find Buyers
          </div>
            </div>
            <div className="filter_info">
        <div className='in_assos'>in Assosination </div>
        <div className='filter_info_row'>
          <div className="filter_info_item">
            <FontAwesomeIcon icon={faBuilding} style={{ color: "#3a63d5" }} />
            apartments, villa and terraced house (<span className='data_res'>{dataRes.building}</span>)
          </div>
          <div className="filter_info_item">
            <FontAwesomeIcon icon={faHouse} style={{ color: "#3a63d5" }} />
            apartments, villa and terraced house (<span className='data_res'>{dataRes.house}</span>)
          </div>
          <div className="filter_info_item">
            <FontAwesomeIcon icon={faTree} style={{ color: "#3a63d5" }} />
            Plots (<span className='data_res'>{dataRes.tree}</span>)
          </div>
        </div>
        <div className='filter_info_row'>
          <div className="filter_info_item">
            <FontAwesomeIcon icon={faHouseChimneyWindow} style={{ color: "#3a63d5" }} />
            Abrod (<span className='data_res'>{dataRes.abrod}</span>)
          </div>
          <div className="filter_info_item">
            <FontAwesomeIcon icon={faPeopleRoof} style={{ color: "#3a63d5" }} />
            Farm (<span className='data_res'>{dataRes.farm}</span>)
          </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default ResidenceHead
