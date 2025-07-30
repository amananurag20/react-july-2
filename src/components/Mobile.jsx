import React from 'react'

const Mobile = ({name="xyz",price,count, setCount}) => {
   
  return (
    <div>
      
      <h1>Name: {name }</h1>
      <h2>Price: Rs {price}</h2>

      <img src='https://img-prd-pim.poorvika.com/product/Vivo-y29-5g-glacier-blue-128gb-4gb-ram-Front-Back-View-Model.png' style={{width:'350px'}}/>
    </div>
  )
}

export default Mobile
