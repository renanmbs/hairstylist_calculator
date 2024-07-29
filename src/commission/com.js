import React, { useEffect } from "react";
import { useState } from "react";
import "./com.css";
import { Bank } from "../bank/bank";

export const CommissionCalculation = (props) =>{
    let [com_rate, setCom_rate] = useState(0);
    let [paid, setPaid] = useState(0);
    let [full, setFull] = useState(0);
    let [tip, setTip] = useState(0);

        
    let handleChangeCom = ({target}) => {
        setCom_rate(target.value);
    }

    let handlePaid = ({target}) => {
        setPaid(target.value);
    }

    let handleTip = ({target}) => {
        setTip(target.value);
    }

    let handleClick = () =>{
        if(full === 0){
            setFull(1);
            setTip('');
        }

        else if(full === 1){
            setFull(2);

        }
        else if(full === 2){
            setFull(0);
        }
    }

    return(
        <div className="results_per">
            
            <h3>Paid</h3>
            <input type="number" onChange={handlePaid}/>

            <h3>Commission Rate</h3>
            <input type="number" onChange={handleChangeCom}/> <br/>          
            <button onClick={handleClick} className="tip" >
                {full === 0 ? 'Add Tip in $' : 
                    (full === 2) ? 'Keep Full Change'
                    : 'Add Tip in %'}
            </button>

            <div>
                {(() => {
                    if (full === 1) {
                        return (
                            <div>
                                <h3>Tip in Flat Amount:</h3>
                                <input type="number" onChange={handleTip} value={tip}/>
                            </div>
                        );
                    } else if (full === 2) {
                        return (
                            <div>
                                <h3>Tip in Percentage:</h3>
                                <input type="number" onChange={handleTip}/>
                            </div>
                        );
                    } else {
                        return null;
                    }
                })()}
            </div>

            <h4 className="title_com">{full === 0 ? 'Full Change As Tip' : full === 2 ? 'Added Tip in %' : "Added Tip in $"}</h4>

            <FullTip paid={paid} service={props.service} rate={com_rate} full={full} tip={tip}/>

        </div>
    )
}

export let FullTip = (props) => {
    let [total, setTotal] = useState(0);
    let [comission_val, setComission_val] = useState(0);
    let [safe, setSafe] = useState(0);
    let [tips, setTips] = useState(0);

    useEffect(() => {

        let comission = () => {

            if (props.full === 0){
                
                let comission_val = parseFloat(props.service) * (parseFloat(props.rate) / 100);
                let tip_com = parseFloat(props.paid) - parseFloat(props.service);
                let total_made = parseFloat(tip_com) + parseFloat(comission_val);

                setComission_val(comission_val.toFixed(2));
                setTips(tip_com.toFixed(2));
                setTotal(total_made.toFixed(2));
            }

            if(props.full === 1){
                let comission_val = parseFloat(props.service) * (parseFloat(props.rate) / 100);
                let total_made = parseFloat(props.tip) + parseFloat(comission_val);
                setTips(props.tip);

                setComission_val(comission_val.toFixed(2));
                setTotal(total_made.toFixed(2));
            }

            if(props.full === 2){
                let comission_val = parseFloat(props.service) * (parseFloat(props.rate) / 100);
                let per_tip = (parseFloat(props.tip) / 100) * parseFloat(props.service);
                let total_made = parseFloat(per_tip) + parseFloat(comission_val);

                setComission_val(comission_val.toFixed(2));
                setTotal(total_made.toFixed(2));
                setTips(per_tip);
            }
        }

        comission();

    },[props.paid, props.service,props.rate, props.full, props.tip])


    let handleSafe = () => {
        if(safe === 0){
            setSafe(1);
        }
        else{
            setSafe(0);
        }
    }

    return (
        <div>
            <h4>Service: <span>{(props.service !== 0 && !isNaN(props.service)) ? `$${parseFloat(props.service).toFixed(2)}`: "" }</span></h4>
        
            <h4>Commission Made<sup style={{fontSize:"small"}}>*</sup>: <span>{(comission_val !== 0 && !isNaN(comission_val)) ? `$${comission_val}` : ""}</span></h4>
            <h4>Tip: <span>{(tips !== 0 && !isNaN(tips)) ? `$${parseFloat(tips).toFixed(2)}`: "" }</span></h4>
            <h4>
                {(total >= 0 && !isNaN(total)) ? `Total Made:` : ""}
            </h4>
            <h4>
                {(total >= 0 && !isNaN(total)) ? <span>{` $${total}`}</span> : ''} 
            </h4>
            <p style={{fontSize:"small"}}><sup>*</sup>Based on Service Price</p>

            <button onClick={handleSafe} className="tip2">Safe Withdrawal</button>
            
            <div>
                {safe === 1 ? <Bank service={props.service} tip={tips} full={props.full} paid={props.paid} /> : ""}
            </div>
        </div>
    )
}

// export let CommTip = (props) => {
//     let [total, setTotal] = useState(0);
//     let [comission_val, setComission_val] = useState(0);
//     let [com_rate, setCom_rate] = useState(0);

//     let onChange = ({target}) => {
//         setCom_rate(target.value);
//     }

//     useEffect(() => {

//         let calculation = () =>{
//             let comission_ser_val = parseFloat(props.service) * (parseFloat(props.rate) / 100);
//             let tip_full = parseFloat(props.paid) - parseFloat(props.service);
//             let tip_com_calc = parseFloat(tip_full) * (parseFloat(com_rate) / 100);
//             setComission_val(tip_com_calc);
//             setTotal(parseFloat(tip_com_calc) + parseFloat(comission_ser_val));
//         }

//         calculation();

//     }, [props.paid, props.service,props.rate, props.full, com_rate])

//     return (
//         <div>
//             <h4>Enter Commission On Tip</h4>
//             <input type="number" onChange={onChange}/>


//             <h5>Service: {props.service}</h5>
//             <h5>Paid: {props.paid}</h5>
//             <h5>Commission Made: {comission_val}</h5>
//             <h5>Total Made: {total}</h5>
//         </div>
//     )
// }