import React, { useEffect, useState } from 'react'

export const Effect2 = () => {
    const [x,setX] = useState(0)
    const [y,setY] = useState(0)

    const toggleMouse = e =>{
        setX(e.clientX)
        setY(e.clientY)
    }

    useEffect(()=>{
        console.log("Effect in use");
        window.addEventListener('mousemove',toggleMouse)
    },[])
  return (
    <div>
        Mouse Coordinates: X-{x}, Y-{y}
    </div>
  )
}
