import React from "react";
import { useState } from "react";
import { TipCalcChange } from "./tip_on_change";

export const Change = (props) => {
    const [paid, setPaid] = useState(0);
    const [ShowTip, setShowTip] = useState(false);

    let onChange = ({target}) => {
        setPaid(target.value);
    }

    let  onChecked = ({target}) =>{
        if(target.checked){
            setShowTip(true);
        }

        else{
            setShowTip(false);
        }
    }

    let change_calc =  parseFloat(paid) - parseFloat(props.service);

    return (
        <div>

            <h3>Paid Amount</h3>
            <input type="number" onChange={onChange} />

            <h4>Service: ${props.service}</h4>
            <h4>
                {
                    (change_calc > 0) ? `Change: $${change_calc.toFixed(2)}`

                    : `Still Owe: $${Math.abs(change_calc.toFixed(2))}`
                }
                
            </h4>
            
            {/* CHOOSE THE APPROPRIATE EVENT LISTENER FOR ON CHANGE TO SHOW TIP CALC 'ADD TIP' */}
            <input type="checkbox" onChange={onChecked}/>

            <div>
                {(ShowTip === true) ?

                    <TipCalcChange  />

                    :

                    <div>
                        
                    </div>

                }
            </div>
        </div>
    )

}