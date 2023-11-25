import React from 'react'
import {Description, Equipment, Faqs, SubcarList} from "./index.js"

const SingleCarBody = () => {
  return (
    <div>
      <Equipment/>
      <Description/>
      <Faqs/>
      <SubcarList/>
    </div>
  )
}

export default SingleCarBody
