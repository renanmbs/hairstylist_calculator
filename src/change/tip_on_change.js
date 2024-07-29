import React, { useEffect } from "react";
import { useState } from "react";
import "./change.css";

export const TipCalcChange = (props) => {
    const [tipType, setTipType] = useState('');

    const handleChange = ({target}) => {
        setTipType(target.value);
    }

    return(
        <div>
            <div id="buttons">
                <label className="rad1">
                    Tip In %<br/>
                    <input type="radio" name="tip_choice" value={"per"} onChange={handleChange}/>
                    
                </label>

                <label className="rad2">
                    Tip In $<br/>
                    <input type="radio" name="tip_choice" value={"flat"} onChange={handleChange}/>
                </label>
            </div>
            <Calculation type={tipType} service={props.service} paid={props.paid}/>
        </div>
    )
}

export const Calculation = (props) => {
    const [tip, setTip] = useState(0);

    const onChange = ({target}) => {
        setTip(target.value);
    }

    if(props.type === 'per'){
        return(
            <div>
                <h3>Tip Percentage</h3>
                <input type="number" onChange={onChange}/>
                <TipCalculation type={props.type} service={props.service} tip={tip} paid={props.paid}/>
            </div>
        )
    } 

    else if(props.type === 'flat'){
        return(
            <div>
                <h3>Tip Amount</h3>
                <input type="number" onChange={onChange}/>
                <TipCalculation type={props.type} service={props.service} tip={tip} paid={props.paid}/>
            </div>
        )
    }

    else{
        return(
            <></>
        )
    }
}

export const TipCalculation = (props) => {

    const [final, setFinal] = useState(0);
    const [Tip_total, setTip_total] = useState(0);
    const [change, setChange] = useState(0);

    useEffect(() => {

        const calculator = () => {
            if(props.type === 'per'){
                let percentage = parseFloat(props.tip) / 100;
                let t_total = parseFloat(props.service) * parseFloat(percentage);
                let total = parseFloat(t_total) + parseFloat(props.service);
                let change_calc = parseFloat(props.paid) - parseFloat(total);
    
                setFinal(total.toFixed(2));
                setTip_total(t_total.toFixed(2));
                setChange(change_calc.toFixed(2));
            }
    
            else if(props.type === 'flat'){
                let t_total = parseFloat(props.tip);
                let total = parseFloat(props.service) + parseFloat(props.tip);
                let change_calc = parseFloat(props.paid) - parseFloat(total);
    
                setFinal(total.toFixed(2))
                setTip_total(t_total.toFixed(2));
                setChange(change_calc.toFixed(2));
            }
        }
        
        calculator();

    }, [props.tip, props.service, props.amount,props.type, props.paid])

    return (
        <div >
            <h4>Tip Total<sup style={{fontSize:"small"}}>*</sup>: <span>{(Tip_total !== 0 && !isNaN(Tip_total)) ? `$${parseFloat(Tip_total).toFixed(2)}`: ""}</span></h4>
            <h4>Total: <span>{(final !== 0 && !isNaN(final)) ? `$${final}`: ""}</span></h4>
            <h4>Paid: <span>{(props.paid !== 0 && !isNaN(props.paid)) ? `$${(parseFloat(props.paid).toFixed(2))}`: ""}</span></h4>
            <h4>{(change > 0 && !isNaN(change)) ? 
                        `Change: ` : (!isNaN(change) ? `Still Owed: ` : "")}
                    </h4>

                    <h4><span>{(change > 0 && !isNaN(change)) ? 
                        `$${parseFloat(change).toFixed(2)}` : (!isNaN(change) ? `$${Math.abs(parseFloat((change)).toFixed(2))}` : "")}</span>
                    </h4>

                    <p style={{fontSize:"small"}}><sup>*</sup>Based on Tip Percentage</p>
        </div>
    )
}