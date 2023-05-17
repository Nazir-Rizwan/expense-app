import { createContext, useReducer, useState } from "react";

export const Countcon = createContext(null);

const userlist =[
  {
    id:1,
    name:"nazir",
    age:20
  }
]


const expense=((state,action)=>{

  switch (action.type) {
    case 'incremented_age':
      return{
        ...state, // Don't forget this!
        age: state.age + 1
      };
    default:
      return state;
  }
})

const inittial={
  name:"nazir",
  arr:['12','14','17']
}


  const reducer=(state,action)=>{
    switch(action.type) {
    case 'add':
return {...inittial,
  name:action.payload
}

    //  return {...inittial,
//   name:action.payload
//  }
    default: 
    return state
    
  }

  }


export const CounterProvide = ((props) => {
  const [count, setcount] = useState(12);
// const [state,dispatch]=useReducer(expense,{age:56});
// console.log(state)

const [state,dispatch]=useReducer(reducer,inittial)  

console.log(state)
  return (
  <Countcon.Provider value={{state,dispatch} }>
    {props.children}
    
  </Countcon.Provider>)
  
})

// export const CounterProvide=((props)=>{
//     const [count,setcount]=useState(12);
//     return(
//         <Countcon.Provider value={{count, setcount,name:"nazir"}}>

//             {props.children}
//         </Countcon.Provider>
//     )
// })
