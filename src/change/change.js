import React from "react";
import { useState } from "react";
import { TipCalcChange } from "./tip_on_change";
import "./change.css";

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
        <div className="results_per">

            <h3>Paid Amount</h3>
            <input type="number" onChange={onChange} />

            <h4>Service Price: <span>{(props.service !== 0 && !isNaN(props.service)) ? `$${parseFloat(props.service).toFixed(2)}` : ""}</span></h4>
            
            <div>{ (ShowTip !== 1) ?
                    <div>
                        <h4>{(change_calc > 0 && !isNaN(change_calc)) ? 
                                    `Change: ` : (!isNaN(change_calc) ? `Still Owed: ` : "")}
                        </h4>
                        <h4><span>{(change_calc > 0 && !isNaN(change_calc)) ? 
                                    `$${change_calc.toFixed(2)}` : (!isNaN(change_calc) ? `$${Math.abs(change_calc).toFixed(2)}` : "")}</span>
                        </h4>
                    </div>

                    : 

                    <></>
                }
            </div>
            
            <button onClick={onClicked} className="add_tip">Add Tip</button>

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