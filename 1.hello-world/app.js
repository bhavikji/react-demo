import React from "react";
import ReactDom from "react-dom";
import Demo, {DemoForm} from "./src/demo";

class App extends React.Component
{
    render(){
        return <DemoForm/>;
    }
}
ReactDom.render(
    <App/>,
    document.getElementById('app')
);
