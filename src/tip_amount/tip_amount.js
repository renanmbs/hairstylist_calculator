import React from "react";

export class TipAmount extends React.Component{
    constructor(props){
        super(props);
        this.state = {tip: 0, paid: 0}
    }

    onChangeTip = ({target}) => {
        this.setState({tip: target.value})
    }

    onChangePaid = ({target}) => {
        this.setState({paid: target.value});
    }

    render(){

        let total = parseFloat(this.state.tip) + parseFloat(this.props.service);
        let percentage = (parseFloat(this.state.tip) / parseFloat(this.props.service)) * 100 ;
        let change = parseFloat(this.state.paid) - parseFloat(total);
        return(
            <div>
                <h3>Flat Amount</h3>
                <input type="number" onChange={this.onChangeTip} />

                <h3>Paid</h3>
                <input type="number" onChange={this.onChangePaid} />

                <div className="results_per">
                <h4>Service Price: <span>{(this.props.service !== 0 && !isNaN(this.props.service)) ? `$${parseFloat(this.props.service).toFixed(2)}` : ""}</span></h4>
                    <h4>Tip Amount: <span>{(this.state.tip !== 0 && !isNaN(this.state.tip)) ? `$${this.state.tip}` : ""}</span></h4>
                    <h4>Tip in Percentage<sup style={{fontSize:"small"}}>*</sup>: <span>{(percentage !== 0 && !isNaN(percentage)) ? `${percentage.toFixed(0)}%` : ""}</span></h4>
                    <h4>Total: <span>{(total !== 0 && !isNaN(total)) ? `$${total.toFixed(2)}` : ""}</span></h4>
                    <h4>Amount Paid: <span>{(this.state.paid !== 0 && !isNaN(this.state.paid)) ? `$${parseFloat(this.state.paid).toFixed(2)}` : ""}</span></h4>

                    <h4>{(change > 0 && !isNaN(change)) ? 
                        `Change: ` : (!isNaN(change) ? `Still Owed: ` : "")}
                    </h4>

                     <h4><span>{(change > 0 && !isNaN(change)) ? 
                        `$${change.toFixed(2)}` : (!isNaN(change) ? `$${Math.abs(change).toFixed(2)}` : "")}</span>
                    </h4>

                    <p style={{fontSize:"small"}}><sup>*</sup>Based on Flat Amount</p>

                </div>


            </div>
        )
    }
}