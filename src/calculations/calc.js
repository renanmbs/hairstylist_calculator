import React from "react";
import "./calc.css";
import { TipPer } from "../tip_per/tip_per";

export class CalcType extends React.Component{

    render(){
        switch(this.props.calc){
            // case "change":
            //     return <Change/>
            
            case "tip_per":
                return <TipPer service={this.props.service}/>
            
            // case "tip_amount":
            //     return <TipAmount/>

            default:
                return <></>
        }

    }
}