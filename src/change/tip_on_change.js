import React, { useEffect } from "react";
import { useState } from "react";

export const TipCalcChange = (props) => {
    const [tipType, setTipType] = useState('');

    const handleChange = ({target}) => {
        setTipType(target.value);
    }

    return(
        <div>
            <label>
                <input type="radio" name="tip_choice" value={"per"} onChange={handleChange}/>
                Tip In Percentage
            </label>

            <label>
                <input type="radio" name="tip_choice" value={"flat"} onChange={handleChange}/>
                Tip In Flat Amount
            </label>

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
                <h4>Tip Percentage</h4>
                <input type="number" onChange={onChange}/>
                <TipCalculation type={props.type} service={props.service} tip={tip} paid={props.paid}/>
            </div>
        )
    } 

    else if(props.type === 'flat'){
        return(
            <div>
                <h4>Tip Amount</h4>
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
            <h4>Tip Total: {Tip_total}</h4>
            <h4>Total: {final}</h4>
            <h4>Paid: {props.paid}</h4>
            <h4>Change: {change}</h4>
        </div>
    )
}