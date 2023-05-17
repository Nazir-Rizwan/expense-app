
//  No file use 
const TransactionReducer=((state,action)=>{
    switch(action.type){
        case "ADD":{
            return [ ...state,action.payload]
        }
        
        case "del":{
            return {
                ...state,
                expense
            }        }
       
        default:
            return state;
    }

})

export default TransactionReducer;