import { Box,Button,TextField,Typography,styled } from '@mui/material'
import React, { useState,useContext } from 'react'
import { Globalcon } from './ExpressCon';
import {v4 as uuidv4} from 'uuid'



// throw new Error();    show error message




const NewTransaction = () => {
  
  const [text,settext]=useState('');
  const [amount,setamt]=useState();
  const {dispatch}=useContext(Globalcon);


  const addtran=()=>{
 if(text.valueOf===' '){
  alert('nlnlll');
 }
 else{

    const expense={
      id:uuidv4(),
  text:text,
  amount:parseInt(amount),
    };


    dispatch({ type:'plus',
      payload:expense})

      setamt(' ')
      settext('');
  }

  }
 
  
  


  
  const addtransaction=()=>{
    // const newtransaction={
    //   id:Math.floor()*100,
    //   text:text,
    //   amount:+amount,
    // }
   
    // settransaction(prestate=>[newtransaction,...prestate]);

  }
  


  return (
    <div className='newtransaction'>

        <Typography variant='h5'>New Transaction</Typography>

        <TextField label="Enter Expense" variant="outlined" value={text} onChange={(e)=>settext(e.target.value)}/>
        <TextField label="Enter amount" variant="outlined" value={amount} onChange={(e)=>setamt(e.target.value)}/>
        <Button variant="contained" onClick={addtran}>Add Transaction</Button>
     
    </div>
  )
}

export default NewTransaction