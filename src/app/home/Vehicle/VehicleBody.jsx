import React from 'react'
import { Blog } from '../../imgs'
import {BlogAuther, BlogComments, BlogContainer,  BlogForm,  Breadcrumb} from "./index"

const VehicleBody = () => {
  return (
    <div className='blogpage_section'>
      <div className="header_img">
        <img src={Blog} alt="blog_img" />
      </div>
        <Breadcrumb/>
        <BlogContainer/>
        <BlogAuther/>
        <BlogComments/>
        <BlogForm/>
    </div>
  )
}

export default VehicleBody
