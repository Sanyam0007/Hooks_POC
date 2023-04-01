import React, { useEffect, useState } from 'react'

export const Effect4 = () => {
    const [count, setCount] = useState(0);
    const [state, setState] = useState(false);
    const tick =()=>{
      setCount(count+1);
    }

    useEffect(()=>{
      const interval = setInterval(tick,4500);
      return ()=>{
        clearInterval(interval)
      }
    },[count])
    
  return (
    <div>
        {count}
        {/* <button onClick={clearInterval()}>Stop Interval</button> */}
    </div>
  )
}
