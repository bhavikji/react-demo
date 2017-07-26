import React from "react";
export default class AlertFunction extends React.Component
{
    /*constructor for setting new value*/
    constructor(props){
        super(props);
        this.state={
            header: "hello world"
        };
    }
    //setting new value of header
    setHeader = () =>
    {
        this.props.newHeader(this.state.header);
    }

    render(){
        return <div>
            <button onClick={this.props.message}>Show Alert</button>
            <button onClick={this.setHeader}>Show Title</button>
            </div>;
    }
}