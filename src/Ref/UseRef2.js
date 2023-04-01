import React, { useEffect, useRef, useState } from "react";

export const UseRef2 = () => {
  const [count, setCount] = useState(0);
  const clearIntervalRef = useRef()

  useEffect(() => {
    clearIntervalRef.current = setInterval(() => {
      setCount((prevCount) => prevCount + 1);
    }, 1000);
    return () => {
      clearInterval(clearIntervalRef.current);
    };
  });
  
  return <div>Time: {count}
  <div>
    <button onClick={()=>clearInterval(clearIntervalRef.current)}>Stop</button></div></div>;
};
