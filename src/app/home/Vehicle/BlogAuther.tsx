import React from 'react'
import { Profile } from '../../imgs'

const BlogAuther = () => {
  return (
    <div className='auther_section'>
      <div className="auth_head">
        <p>Developer</p>
        <p><b>Share:</b>Facebook, Twitter, Pintreset, Tumblr</p>
      </div>
      <div className="auther_box">
        <img src={Profile} alt="" className="auther_img" />
        <div className="auther_box_info">
          <div className='auther_heading'>Julie Coleman</div>
          <div className='auther_box_info_text'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempora impedit maiores soluta labore, atque modi pariatur at nesciunt est, hic perferendis. Optio ipsa ducimus dolorum aliquam facilis mollitia consequatur vel?</div>
          <div className='auther_share'>Facebook, Pinterset</div>

        </div>
      </div>
      <div className="auth_more">
        <div>High Quality & <br /> Effective built Space</div>
        <div className='auth_more_right'>How to find a Good <br /> Real Estate Agnet </div>
      </div>
    </div>
  )
}

export default BlogAuther
