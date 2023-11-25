import React from 'react'
import SearchFilter from './SearchFilter'
import SearchList from './SearchList'

const SearchBody = () => {
  return (
    <div className='SearchBody_container'>
      <SearchFilter/>
      <SearchList/>
    </div>
  )
}

export default SearchBody
