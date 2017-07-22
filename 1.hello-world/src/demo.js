import React from "react";
export default class Demo extends React.Component
{
    render(){
        return <div><h1 style={{color:'#732584'}}>Form Demo</h1></div>;
    }
}

export class DemoForm extends React.Component
{
    render(){
        return <div>
            <form method="post" action="#">
                <label>First Name</label>
                <input type="text" name="firstName"></input>
                    <label>First Name</label>
                <input type="text" name="lastName"></input>
                <input type="submit" value="submit"></input>
            </form>
        </div>;
    }
}