import { createContext} from "react"
import { v4 as uuidv4 } from 'uuid';

import React from "react";

const TransactionReducer=((state,action)=>{
    switch(action.type){
        // case "ADD":{
        //     return [ ...state,action.payload]
        // }

        case "plus":{
          
            return [action.payload,...state]
            
        }
        case "del":
           
                // ...state,
                // expense:state.expense.filter((expense)=>expense.id!==action.payload)
               
           return {...state,
            transaction:state.transaction.filter((item)=> item.id!==action.payload) 
           }
       
        default:
            return state;
    }

})

export default TransactionReducer;


// const initialstate={
//  budet:200,
//   expense:[
//     {
//         id:uuidv4(),
//         text:"cash",
//         amount:1200
//     },
//     {
//         id:uuidv4(),
//         text:"house",
//         amount:1000
//     },
//     {
//         id:uuidv4(),
//         text:"server",
//         amount:100
//     }
//   ]
// }

// /////

const initialstate={
     transaction:  [{
           id:uuidv4(),
           text:"cash",
           amount:1200
       },
       {
           id:uuidv4(),
           text:"house",
           amount:1000
       },
       {
           id:uuidv4(),
           text:"server",
           amount:-100
       }
     ]
    }
   

 const Globalcon=createContext(initialstate);

 const TransactionProvider=(({children})=>{
    const  [state,dispatch]=React.useReducer(TransactionReducer,initialstate);
    

    // function addTransaction(transobj){
    //     dispatch({
    //         type:"ADD",
    //         payload:{
    //             id:transobj.id,
    //             text:transobj.text,
    //             amount:transobj.amount,
    //         }
    //     })
    // }
    // function delTransaction(){
    //     dispatch({
    //         type:"rm",
    //             })
    // }

return(
    <Globalcon.Provider value={{
        state:state.transaction,
        
        dispatch,

    }}>

        {children}
    </Globalcon.Provider>
)

})
export {TransactionProvider,Globalcon}

