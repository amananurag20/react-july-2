import React, { useState } from "react";

const Signup = () => {
  const [count, setCount] = useState(1000);

  const handleClick = () => {
    setCount(count + 1000);
  };
  console.log("byeeeeee");

  return (
    <div>
      <h1> value of count is {count}</h1>
      <p>this is paragraph</p>
      <button onClick={handleClick}>increae value of count</button>
    </div>
  );
};

export default Signup;
