import "./App.scss";

// import Header from "./Components/Header/Header";

import { useState } from "react";


// import {Chart as chartjs,BarElement,LinearScale,Tooltip,Legend,CategoryScale} from 'chart.js';


import Expense  from "./Components/Expense/Expense";

import Context from "./Components/PiyushGarge/Context";
import { CounterProvide } from "./Components/PiyushGarge/Countercon";
import {TransactionProvider} from './Components/Expense/ExpressCon'


function App() {
  // const data = useState(35);
  // console.log(data);


 
  return (
    <div>
      {/* <CounterProvide>
        <Context />
      </CounterProvide> */}
      {/* <Countercontext.Provider value={data}>  */}
      {/* <BrowserRouter> */}
      {/* <Header /> */}

      
      <TransactionProvider>

      
      <Expense/>
      </TransactionProvider>
      
     
 
      {/* <Parent /> */}
      {/* <Birth /> */}

      {/* <Routes> */}
      {/* <Route path="/" element={<Home />}></Route> */}
      {/* <Birth data={data}/> */}
      {/* </Routes> */}
      {/* </BrowserRouter> */}
      {/* </Countercontext.Provider> */}
    </div>
  );
}

export default App;
