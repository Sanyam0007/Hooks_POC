import React, { useEffect, useRef } from 'react'

export const UseRef1 = () => {
    const myRef = useRef(null)
    useEffect(  ()=>{
        myRef.current.focus()
    })

  return (
    <div>
        <input ref={myRef} type="text" />
    </div>
  )
}
