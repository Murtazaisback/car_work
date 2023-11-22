import React from 'react'
import { Link } from 'react-router-dom'
import "../Styles/LandingPageComponent.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBell, faEnvelope, faUser, } from '@fortawesome/free-regular-svg-icons';
import { faCartShopping, faChevronDown } from '@fortawesome/free-solid-svg-icons'

const Header = () => {
    return (
        <div>
            <header>
                <nav className='main_container'>
                    {/* <img src="" alt="" className="main_logo" /> */}
                    <p className='main_logo'>Logo</p>
                    <div className='nav_icons'>
                        <Link to="" className='nav_icon'>
                            <FontAwesomeIcon icon={faBell} style={{ color: "#8a97ab", }} />
                            <div className="notify_marker"></div>
                        </Link>
                        <Link to="" className='nav_icon'>
                            <FontAwesomeIcon icon={faEnvelope} style={{ color: "#8a97ab", }} />

                        </Link>
                        <Link to="" className='nav_icon'>
                            <FontAwesomeIcon icon={faCartShopping} style={{ color: "#8a97ab", }} />
                            <div className="notify_count">2</div>
                        </Link>
                        <Link to="" className='nav_icon'>
                            <FontAwesomeIcon icon={faUser} style={{ color: "#8a97ab", }} />
                        </Link>
                    </div>
                </nav>
                <div className="nav_wapper">

                <div className="header_menu main_container">
                    <span className="dropdown">
                        <button className="dropbtn">All categories
                            <FontAwesomeIcon icon={faChevronDown} style={{color: "#000000",}} />
                         </button>
                        <div className="dropdown-content">
                            <a href="#home">Link1</a>
                            <a href="#home">Link2</a>
                            <a href="#home">Link3</a>
                            <a href="#home">Link4</a>
                        </div>
                    </span>
                    <Link to="/Home/Vehicle" className='nav_menu_item'>Vehicle</Link>
                    <Link to="" className='nav_menu_item'>For the Home</Link>
                    <Link to="" className='nav_menu_item'>Personally</Link>
                    <Link to="" className='nav_menu_item'>Electroncis</Link>
                    <Link to="" className='nav_menu_item'>Sparetime Hobby</Link>
                    <Link to="" className='nav_menu_item'>Business operations</Link>
                    <Link to="" className='nav_menu_item'>Miscellaneous</Link>
                    <Link to="/Home/residence" className='nav_menu_item'>Residence</Link>
                    <Link to="" className='nav_menu_item'>Job</Link>
                </div>
                </div>
            </header>
        </div>
    )
}

export default Header
