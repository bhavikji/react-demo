import React from "react";
import ReactDom from "react-dom";
import Demo, {FormDemo, Clock, ArrayListDemo, AppendArrayList}from "./src/demo";

class App extends React.Component
{
    render(){
        return <div>
            <Demo name="Bhavik" company="WMT"/>
            <Clock/>
            <FormDemo/>
            <ArrayListDemo/>
            <AppendArrayList/>
        </div>
    }
}
ReactDom.render(
    <App/>,
    document.getElementById('app')
);
