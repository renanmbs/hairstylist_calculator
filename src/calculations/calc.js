import React from "react";
import "./calc.css";
import { TipPer } from "../tip_per/tip_per";
import { TipAmount } from "../tip_amount/tip_amount";
import { Change } from "../change/change";

export class CalcType extends React.Component{

    render(){
        switch(this.props.calc){
            case "change":
                return <Change service={this.props.service}/>
            
            case "tip_per":
                return <TipPer service={this.props.service}/>
            
            case "tip_flat":
                return <TipAmount service={this.props.service}/>

            default:
                return <></>
        }

    }
}