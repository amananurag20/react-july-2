import React from 'react'
import { useParams } from 'react-router-dom'

const Food = () => {
    const data= useParams();
    console.log(data);
  return (
    <div>
      <h1>food</h1>
    </div>
  )
}

export default Food
