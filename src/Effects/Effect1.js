import React, { useEffect, useState } from "react";

export const Effect1 = () => {
  const [count, setCount] = useState(0);
  const [name,setName] = useState('');
  useEffect(() => {
    console.log("useEffect in use")
    document.title = `You clicked ${count} times`;
  },[count]);
  return (
    <div>
        <input type="text" onChange={e=>{setName(e.target.value)}} />
      <button onClick={() => setCount(count + 1)}>click me</button>
      <h4>{count}</h4>
    </div>
  );
};
