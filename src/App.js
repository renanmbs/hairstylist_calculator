import './App.css';
import { useState } from 'react';
import { CalcType } from './calculations/calc';

function App() {
  const [choice, setChoice] = useState('');
  const [Service_amount, setService_amount] = useState('');

  const handleChange = ({target}) => {
    setChoice(target.value);
  }

  const handleService = ({target}) => {
    setService_amount(target.value);
  }

  return(
    <div>
      <h2>Welcome to,</h2>
      <h1>The Hairstylist Calculator</h1>

      <select onChange={handleChange}>
        <option value={""} selected disabled>Choose Yout Calculation Type</option>
        <option value={"tip_per"}>Tip in Percentage</option>
        <option value={"tip_flat"}>Tip in Flat Amount</option>
        <option value={"change"}>Calculation From Change</option>
      </select>

      <h2>
        {(choice !== "") ?
          <div>
            <h3>Service Amount:</h3>
            <input type={'number'} onChange={handleService}/>
            <h4>{Service_amount !== '' ? `$${Service_amount}` : ""}</h4>
            <CalcType calc={choice} service={Service_amount}/>
          </div>
        :

        ""
      
      }
      </h2>


    </div>
  )
}

export default App;
