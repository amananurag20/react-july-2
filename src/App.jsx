import { useEffect, useState } from "react";
import HomePage from "./components/HomePage";
import Mobile from "./components/Mobile";
import { Product } from "./components/Product";

const App = () => {
  const [count, setCount] = useState(1000);
  const [storeData, setStoreData]= useState([]);

  const handleClick = () => {
    setCount(count + 1000);
  };
  
  const fetchData= async()=>{
   const response= await fetch("https://fakestoreapi.com/products");
   const data= await response.json();
   console.log(data);
   
   setStoreData(data);

  }  

  console.log("start")

  
  useEffect(()=>{
      fetchData();
      console.log("useEffect")
  },[count])

  return (
    <div>
      <p></p>
      {console.log("end")}
      <h1>the value of count :{count}</h1>
      <h2>byeee</h2>

      <button onClick={handleClick}>Increase value of count</button>

      <Mobile name={"motorolla"} price={21000}/>
      <Mobile name={"apple"} price={80000}/>
      <Mobile/>
      <Product count={count} setCount={setCount}/>
    </div>
  );
};

export default App;
