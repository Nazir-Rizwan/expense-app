import React, { useReducer } from 'react'
import CounterReducer from './CounterReducer';
const Child2 = () => {

const [value,dispatch]=useReducer(CounterReducer,10);
console.log(value);
    return (
    <div>
        Child2 reducer
        <button onClick={()=>{dispatch('INCREMENT')}}>Click Reducer</button>
    </div>
  )
}

export default Child2