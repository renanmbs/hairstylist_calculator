import React, { useEffect } from "react";
import { useState } from "react";

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
        }
        else{
            setFull(0);
        }
    }

    return(
        <div>
            <h4>Commission Rate:</h4>
            <input type="number" onChange={handleChangeCom}/>           
            <button onClick={handleClick}>
                {full === 0 ? 'Add Tip Value' : 'Remove Tip'}
            </button>

            <div>
                {full === 1 ? 
                    <div>
                        <h4>Tip Value:</h4>
                        <input type="number" onChange={handleTip}/>
                    </div>

                :
                    <></>

                }
            </div>

            <h4>Paid</h4>
            <input type="number" onChange={handlePaid}/>

            <FullTip paid={paid} service={props.service} rate={com_rate} full={full} tip={tip}/>

        </div>
    )
}

export let FullTip = (props) => {
    let [total, setTotal] = useState(0);
    let [comission_val, setComission_val] = useState(0);

    useEffect(() => {

        let comission = () => {

            if (props.full === 0){
                
                let comission_val = parseFloat(props.service) * (parseFloat(props.rate) / 100);
                let tip_com = parseFloat(props.paid) - parseFloat(props.service);
                let total_made = parseFloat(tip_com) + parseFloat(comission_val);

                setComission_val(comission_val.toFixed(2));
                setTotal(total_made.toFixed(2));
            }

            if(props.full === 1){
                let comission_val = parseFloat(props.service) * (parseFloat(props.rate) / 100);
                let total_made = parseFloat(props.tip) + parseFloat(comission_val);

                setComission_val(comission_val.toFixed(2));
                setTotal(total_made.toFixed(2));
            }
        }

        comission();

    },[props.paid, props.service,props.rate, props.full, props.tip])

    return (
        <div>
            <h4>Full Tip</h4>
            <h5>Service: {props.service}</h5>
            <h5>Paid: {props.paid}</h5>
            <h5>Commission Made: {comission_val}</h5>
            <h5>
                {(total >= 0 && !isNaN(total)) ? `Total Made: ${total}` : ''} </h5>
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