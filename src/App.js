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
    <div id='back'>

      <div id='menu'>

        <div id='banner'>
          <h2>Welcome to,</h2>
          <h1>The Hairstylist Calculator</h1>
  
          <select onChange={handleChange} id='serv_choice'>
            <option value={""} selected disabled>Choose Your Calculation Type</option>
            <option value={"tip_per"}>Tip in Percentage</option>
            <option value={"tip_flat"}>Tip in Flat Amount</option>
            <option value={"change"}>Calculation From Change</option>
            <option value={"com"}>Commission Calculation</option>
          </select>

        </div>

        {(choice !== "") ?

            <div id='serv_amount'>

              <h3>Service Price</h3>
              <input type={'number'} onChange={handleService}/>

              <CalcType calc={choice} service={Service_amount}/>

            </div>
          :

          ""
        
        }

      </div>
    </div>
  )
}

export default App;
