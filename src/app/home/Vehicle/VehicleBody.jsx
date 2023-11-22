import React from 'react'
import { Blog } from '../../imgs'
import {BlogAuther, BlogContainer, Breadcrumb} from "./index"

const VehicleBody = () => {
  return (
    <div className='blogpage_section'>
      <div className="header_img">
        <img src={Blog} alt="blog_img" />
      </div>
        <Breadcrumb/>
        <BlogContainer/>
        <BlogAuther/>
    </div>
  )
}

export default VehicleBody
