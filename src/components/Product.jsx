import { useState } from "react"
import Mobile from "./Mobile"

export const Product = () => {

  const [count, setCount]= useState(1000);

  return (
    <div>
      <img src="https://images.squarespace-cdn.com/content/v1/5a1fac7e914e6b30d737146f/1683652897432-UKUTT07XCKS9NI9NLOXT/228A4750a.jpg"/>

      <Mobile count={count} setCount={setCount}/>
     
    </div>
  )
}




