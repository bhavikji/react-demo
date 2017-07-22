import React from "react";
import ReactDom from "react-dom";
import Demo, {DemoForm} from "./src/demo";

class App extends React.Component
{
    render(){
        return <div>
            <Demo/>
            <DemoForm/>
            </div>;
    }
}
ReactDom.render(
    <App/>,
    document.getElementById('app')
);
