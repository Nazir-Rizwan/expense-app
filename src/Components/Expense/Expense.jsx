import React, { useState,useContext } from 'react'
import { Box, Typography,styled } from '@mui/material'

import ExpenseCard from './ExpenseCard'
import NewTransaction from './NewTransaction'
import Transaction from './Transaction';
import './Expense.css';
import {Globalcon}  from './ExpressCon';
import  Showchart  from './Showchart';

const Header =styled(Typography)`
margin:10px 0;
font-size:36px;
color:blue;
text-align:center;
`
const Expense = () => {
    // const {transaction,expense}=useContext(Globalcon);

//     const [transaction,settransaction]=useState([{
//         id:0,
//         text:"lays",
//         amount:1100
//     }
// ,
// {
//     id:1,
//     text:"kurkure",
//     amount:1000 
// },
// {
//     id:2,
//         text:"bill",
//         amount:-50
// }

// ])
    
  return (
    <div className='main'>
<h1>Daily Expense Manager </h1> 
    <ExpenseCard />
    <Showchart/> 
    <NewTransaction />
    <Transaction   ></Transaction> 
   
        
    
    </div>
  )
}

export default Expense