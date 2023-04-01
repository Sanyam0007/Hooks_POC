import React,{useState} from 'react'
import { Effect2 } from './Effect2';

function Effect3() {
    const [display,setDisplay] = useState(true);


  return (
    <div>
        <button onClick={()=>setDisplay(!display)}>Toogle display</button>
        {display && <Effect2/>}
    </div>
  )
}

export default Effect3