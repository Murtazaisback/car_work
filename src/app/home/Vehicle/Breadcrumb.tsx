import React from 'react'
import { Link } from 'react-router-dom'

const Breadcrumb = () => {
  return (
    <div className='Breadcurmb_sec'>
      <div><Link to="" className='Breadcurmb'>All</Link>/</div>
      <div><Link to="" className='Breadcurmb'>Vehicle</Link>/</div>
      <div><Link to="" className='Breadcurmb'>cars</Link>/</div>
      <div><Link to="" className='Breadcurmb'>Hyundai</Link></div>
    </div>
  )
}

export default Breadcrumb
