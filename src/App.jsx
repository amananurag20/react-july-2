import {Product} from "./components/Product.jsx"

const App = () => {
  
  const marks=99;
  const show=true;

  return (
    <div>
       <h1 style={{backgroundColor:"red",color:"white"}}>this is heading</h1>
       <p>this is paragraph </p>
       <h3>this is my marks:{marks}</h3>

       {show==true?<h1>start</h1>:<h1>end</h1>} 

         <Product/>
         <Product></Product>
         
      
    </div>
  )
}

export default App
