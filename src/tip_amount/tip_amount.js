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

        let total = (parseFloat(this.state.tip) + parseFloat(this.props.service)  * 100) / 100;
        let percentage = (parseFloat(this.state.tip) / parseFloat(this.props.service)) * 100 ;
        let change = parseFloat(this.state.paid) - parseFloat(total);
        return(
            <div>
                <h3>Flat Amount</h3>
                <input type="number" onChange={this.onChangeTip} />

                <h3>Paid</h3>
                <input type="number" onChange={this.onChangePaid} />

                <div>
                    <h4>Tip Amount: {this.state.tip}</h4>
                    <h4>Tip in Percentage: {percentage.toFixed(2)}</h4>
                    <h4>Total: {total.toFixed(2)}</h4>
                    <h4>Amount Paid: {this.state.paid}</h4>
                    <h4>
                        {(change > 0) ?
                        `Change: $${change.toFixed(2)}`
                        : `Still Owe: $${Math.abs(change).toFixed(2)}`
                        }   
                        
                    </h4>
                </div>


            </div>
        )
    }
}