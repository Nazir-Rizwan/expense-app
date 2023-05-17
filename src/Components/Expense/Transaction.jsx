
import React, { useContext } from 'react';
import DeleteIcon from '@mui/icons-material/Delete';
import { Globalcon } from './ExpressCon';
import { Bar, Pie } from "react-chartjs-2";
import { Chart as chartjs } from "chart.js/auto";



const Transaction = () => {
const {state,dispatch}=useContext(Globalcon);
 

function handledel(id){
dispatch({
  type:"del",
  payload: id,
})
}

  return (
    <>
        
         
        
       
        <div >



{
  state.map((value,index)=>{
        const {id,text,amount}=value;
   
        return(
            
            <ul key={value.id} id='record'>
             
            <li>{value.text} </li>
            <li>{value.amount}</li>
            
         
            <DeleteIcon  onClick={()=>handledel(id)}></DeleteIcon>
           
            </ul>
            
            // </div>
        )
    })


}


                    
                                 
        </div>
    </>
  )
}

export default Transaction