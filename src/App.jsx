import { useState } from "react";
import HomePage from "./components/HomePage";
import Mobile from "./components/Mobile";
import { Product } from "./components/Product";

const App = () => {
  const [count, setCount] = useState(1000);

  const handleClick = () => {
    setCount(count + 1000);
  };

  console.log("byee");
  
  return (
    <div>
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
