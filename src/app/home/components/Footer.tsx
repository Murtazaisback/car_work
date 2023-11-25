import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons' 
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <div className='footer_container'>
      <div className="blue_bar_box">
        <div className="sky_bar"></div>
        <div className="blue_bar"></div>
        <div className="sky_bar"></div>
        <div className="blue_bar"></div>
        <div className="sky_bar"></div>
        <div className="blue_bar"></div>
      </div>
      <footer>
        <div className="footer_col">
          <h3 className="footer_title">Security</h3>
          <div className="footer_links">
            <Link to="/" className='footer_link'>Customer Security</Link>
            <Link to="/" className='footer_link' >Shipping with purchase protection</Link>
            <Link to="/" className='footer_link'>Fake emails</Link>
            <Link to="/" className='footer_link'>Report annoying advertising</Link>
          </div>
        </div>
        <div className="footer_col">
          <h3 className="footer_title">TERMS</h3>
          <div className="footer_links">
            <Link to="/" className='footer_link'>Terms of Use</Link>
            <Link to="/" className='footer_link' >Personal data management</Link>
            <Link to="/" className='footer_link'>Cookies</Link>
          </div>
        </div>
        <div className="footer_col">
          <h3 className="footer_title">For companies</h3>
          <div className="footer_links">
            <Link to="/" className='footer_link'>For companies</Link>
            <Link to="/" className='footer_link' >Open Shop</Link>
            <Link to="/" className='footer_link'>Open Vehicle Shop</Link>
            <Link to="/" className='footer_link'>Show all stores</Link>
            <Link to="/" className='footer_link'>Login for Stores</Link>
            <Link to="/" className='footer_link'>Administer Shop ads</Link>
          </div>
        </div>
        <div className="footer_col">
          <h3 className="footer_title">The Block</h3>
          <div className="footer_links">
            <Link to="/" className='footer_link'>About the Block</Link>
            <Link to="/" className='footer_link' >press</Link>
            <Link to="/" className='footer_link'>Work at Blocket</Link>
            <Link to="/" className='footer_link'>Contact Us</Link>
            <Link to="/" className='footer_link'>Inspiration</Link>
            <Link to="/" className='footer_link'>Tips and guides</Link>
          </div>
        </div>
        <div className="footer_col">
          <h3 className="footer_title">Follow us</h3>
          <div className="footer_social">
            <Link to="/" className='footer_link'>
            <FontAwesomeIcon icon={faFacebook} size='xl' style={{color: "#000000",}} />
            </Link>
            <Link to="/" className='footer_link' >
            <FontAwesomeIcon icon={faInstagram} size='xl' style={{color: "#000000", borderRadius: "50px"}} />
            </Link>
            <Link to="/" className='footer_link'>
            <FontAwesomeIcon icon={faTwitter} size="xl" style={{color: "#000000",}} />
            </Link>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Footer
