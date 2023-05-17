import { Bar, Pie } from "react-chartjs-2";
import { Chart as chartjs } from "chart.js/auto";
import { Globalcon } from './ExpressCon';
import React from "react";

const Showchart=()=>{
    const {state,dispatch}=React.useContext(Globalcon);
   //  Chart js Pie code Show chart  
const data={
    labels:state.map((value)=>value.text),
    datasets:[
      {
        label:'Expense',
        data:state.map((value)=>value.amount),
        backgroundColor:['red','blue','green','HotPink'],
        borderColor:'yellow',
        
        borderWidth:2,
      }
    ]
  }
  
  const options={
  }
    return (
        <>
 <div style={{width:250 , margin:'1px auto'}}>       
    <Pie
     data={data}
     options={options}
     width={100}
     />
</div>
        </>
    )
}

export default Showchart