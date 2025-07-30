import React, { useContext } from 'react'
import Navbar from './Navbar'
import ThemeContext from '../context/ThemeContext'

const HomePage = () => {
   
  const {theme, setTheme}= useContext(ThemeContext);

  const handleTheme=()=>{

    if(theme=="light"){
      setTheme("dark");
    }
    else{
      setTheme("light");
    }
  }


  return (
    <div>
      <h2>your current theme is: {theme}</h2>
      <button onClick={handleTheme}>Toggle Theme</button>
      <img src='https://www.bluefrogdm.com/hubfs/Imported_Blog_Media/homepage-content-3.jpg'/>
     <h1> HomePage</h1>

     
    </div>
  )
}

export default HomePage
