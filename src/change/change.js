import React from "react";
import { useState } from "react";
import { TipCalcChange } from "./tip_on_change";

export const Change = (props) => {
    const [paid, setPaid] = useState(0);
    const [ShowTip, setShowTip] = useState(0);

    let onChange = ({target}) => {
        setPaid(target.value);
    }

    let onClicked = () =>{
        if(ShowTip === 0){
            setShowTip(1);
        }

        else{
            setShowTip(0);
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
            
            <button onClick={onClicked}>Add Tip</button>

            <div>
                {(ShowTip === 1) ?

                    <TipCalcChange  service={props.service} paid={paid}/>

                    :

                    <div>
                        
                    </div>

                }
            </div>
        </div>
    )

}