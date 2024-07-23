import React from "react";

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

                <div>
                    <h4>Tip Percentage: {this.state.per !== 0 ? `${this.state.per}%` : ""}</h4>
                    <hr/>

                    <h4>Tip Amount: {tip_amount !== 0 ? `$${tip_amount.toFixed(2)}` : ""}</h4>
                    <hr/>

                    <h4>Total Amount: {total_amount !== 0 ? `$${total_amount.toFixed(2)}` : ""}</h4>
                    <hr/>

                    <h4>Amount Paid: {this.state.paid !== 0 ? `$${this.state.paid}` : ""}</h4>
                    <hr/>
                    
                    <h4>{(change > 0) ? 
                        `Change: $${change.toFixed(2)}` : `Still Owe: $${Math.abs(change).toFixed(2)}`}
                    </h4>
                </div>
            </div>
        )
    }
}