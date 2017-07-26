import React from "react";
import ReactDom from "react-dom";
import AlertFunction from "./src/welcome";
import Header from "./src/header";

class App extends React.Component {

    //constructor having old values

    constructor(props){
        super(props);
        this.state ={
            header: "Alert Header"
        };
    }
    render() {
        return <div>
        <AlertFunction message={this.showAlert} newHeader={this.changeHeader}/>
        <Header headerTitle={this.state.header}/>
        </div>;
    }

    showAlert = () => {
        alert("hello world");
    };

    /*to change the old value of header*/
    changeHeader = (newValue) => {
        this.setState({
            header: newValue
        });
    }
}
ReactDom.render(
    <App/>,
    document.getElementById('app')
);
