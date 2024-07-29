import React from "react";
import "./tip_per.css"

export class TipPer extends React.Component{
    constructor(props){
        super(props);
        this.state = {per: 0, paid: 0};
    }

    onChange = ({target}) => {
        this.setState({per: target.value});
    }

    onPaidChange = ({target}) => {
        this.setState({paid: target.value})
    }

    render(){

        let tip_amount = ((this.props.service * (this.state.per / 100)) * 100) / 100;
        let total_amount = (parseFloat(this.props.service) + parseFloat(tip_amount));
        let change = (parseFloat(this.state.paid) - parseFloat(total_amount));

        return(
            <div>
                <h3>Tip Percentage</h3>
                <input type="number"  onChange={this.onChange}/>

                <h3>Paid Amount</h3>
                <input type="number" onChange={this.onPaidChange}/>

                <div className="results_per">

                    <h4>Service Price: <span>{(this.props.service !== 0 && !isNaN(this.props.service)) ? `$${parseFloat(this.props.service).toFixed(2)}` : ""}</span></h4>
                    <h4>Tip Percentage: <span>{(this.state.per !== 0 && !isNaN(this.state.per)) ? `${this.state.per}%` : ""}</span></h4>

                    <h4>Tip in Flat Amount<sup style={{fontSize:"small"}}>*</sup>: <span>{(tip_amount !== 0 && !isNaN(tip_amount)) ? `$${tip_amount.toFixed(2)}` : ""}</span></h4>
    
                    <h4>Total: <span>{(total_amount !== 0 && !isNaN(total_amount))? `$${total_amount.toFixed(2)}` : ""}</span></h4>

                    <h4>Amount Paid: <span>{(this.state.paid !== 0 && !isNaN(this.state.paid)) ? `$${parseFloat(this.state.paid).toFixed(2)}` : ""}</span></h4>
                    
                    <h4>{(change > 0 && !isNaN(change)) ? 
                        `Change: ` : (!isNaN(change) ? `Still Owed: ` : "")}
                    </h4>

                    <h4><span>{(change > 0 && !isNaN(change)) ? 
                        `$${change.toFixed(2)}` : (!isNaN(change) ? `$${Math.abs(change).toFixed(2)}` : "")}</span>
                    </h4>

                    <p style={{fontSize:"small"}}><sup>*</sup>Based on Tip Percentage</p>
                </div>
            </div>
        )
    }
}