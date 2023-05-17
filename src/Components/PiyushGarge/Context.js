import React, { useContext } from "react";
import Counter from "./Counter";
import { Countcon } from "./Countercon";
import { useReducer } from 'react';
import styled from 'styled-components'

const Button = styled.button`
  background: ${props=>props.primary ?"palevioletred":"white"};
  border-radius: 3px;
  border: 2px solid palevioletred;
  color: palevioletred;
  margin: 0 1em;
  padding: 0.25em 1em;
`

const Context = () => {
   const {state,dispatch} = useContext(Countcon);

  //  console.log("state with name"+state.name)
   console.log(state)
  
 
  return (
    <div>
      <h1>This is our context {state.name} </h1>
      <h2>This is our context {state.arr[1]} </h2>
      <button onClick={()=>dispatch({type:'add',payload:"rizwan"})}>jfj</button>
      <Button primary>i am styled button</Button>
      {/* <button onClick={()=>counter.setcount(counter.count+1)}>Increment</button> */}
      {/* <h1 style={{ margin: "4rem" }}>Cont is bkk{counter.count} </h1> */}
      <Counter />
    </div>
  );
};

export default Context;
