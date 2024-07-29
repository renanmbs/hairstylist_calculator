import React, { useEffect, useState } from "react";

export let Bank = (props) => {
    let [bank_with, setBank_with] = useState(0);
    let [total_ser, setTotal_ser] = useState(0); 
    let [change, setChange] = useState(0);
    let [money_inhand, setMoney_inhand] = useState(0);

    let handleChange = ({target}) => {
        setBank_with(target.value);
    }

    useEffect(() => {

        let calculations = () => {
            let total_serv = (parseFloat(props.service) + parseFloat(props.tip)).toFixed(2);
            let changes = (parseFloat(props.paid) - parseFloat(total_serv)).toFixed(2);
            let money_in_hand = (parseFloat(props.paid) + parseFloat(props.tip)).toFixed(2);
            
            setTotal_ser(total_serv);
            setChange(changes);
            setMoney_inhand(money_in_hand);
        }

        calculations();

    },[props.paid, props.service,props.rate, props.full, props.tip])

return(
    <div>
        <hr/>

        <h3>Safe Withdrawal Amount</h3>
        <input type="number" onChange={handleChange} />

        <h4>Service: <span>{(props.service !== 0 && !isNaN(props.service)) ? `$${parseFloat(props.service).toFixed(2)}` : ""}</span></h4>
        <h4>Tip: <span>{(props.tip !== 0 && !isNaN(props.tip)) ? `$${parseFloat(props.tip).toFixed(2)}` : ""}</span></h4>
        <h4>Service Total Amount <span>{(total_ser !== 0 && !isNaN(total_ser)) ? `$${parseFloat(total_ser).toFixed(2)}` : ""}</span></h4>
        <h4>Paid: <span>{(props.paid !== 0 && !isNaN(props.paid)) ? `$${parseFloat(props.paid).toFixed(2)}` : ""}</span></h4>
        <h4>{(change > 0 && !isNaN(change)) ? 
                        `Change: ` : (!isNaN(change) ? `Still Owed: ` : "")}
                    </h4>

                    <h4><span>{(change > 0 && !isNaN(change)) ? 
                        `$${parseFloat(change).toFixed(2)}` : (!isNaN(change) ? `$${Math.abs(parseFloat((change)).toFixed(2))}` : "")}</span>
                    </h4>
        <h4>Money in Hand: <span>{money_inhand !== 0 && !isNaN(money_inhand) ? `$${parseFloat(money_inhand).toFixed(2)}` : ""}</span></h4>
        <h4>Deposit to Safe: <span>{(bank_with !== 0 && !isNaN(bank_with)) ?  `$${parseFloat(bank_with).toFixed(2)}` : ""}</span></h4>
        <h4>Money Made: <span>{(total_ser !== 0 && !isNaN(total_ser)) ? `$${parseFloat(total_ser).toFixed(2)}` : ""}</span></h4>
    </div>

    )
}