import React, { useContext } from 'react'
import Countercontext from './Countercontext'
const Child = () => {
    let counter = useContext(Countercontext);
    console.log(counter)
  return (
    <>Child value counter  is {counter[0]}
        <button onClick={()=>{counter[1](++counter[0])}}>Click Done </button>
        
    </>
  )
}

export default Child