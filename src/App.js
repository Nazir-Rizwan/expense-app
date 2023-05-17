import "./App.scss";

import { useState } from "react";
import Expense  from "./Components/Expense/Expense";
import {TransactionProvider} from './Components/Expense/ExpressCon'


function App() {



 
  return (
    <div>
     

      
      <TransactionProvider>
      <Expense/>
      </TransactionProvider>

    </div>
  );
}

export default App;
