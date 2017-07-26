import React from "react";
export default class Demo extends React.Component
{
    render(){
        return <div><h1 style={{color:'#732584'}}>Form Demo by {this.props.name} from {this.props.company}</h1></div>;
    }
}
export class Clock extends  React.Component
{
    constructor(props) {
        super(props);
        this.state = {date: new Date()};
    }

    // mounting set up something when DOM is rendered for 1st time
    componentDidMount() {
        this.timerID = setInterval(
            () => this.tick(),
            1000
        )

    }

    // unmounting clear up something when DOM is removed
    componentWillUnmount() {
        clearInterval(this.timerID);

    }

    // function to implement update of seconds on every second setState use to set the state values.
    tick() {
        this.setState({
           date : new Date()
        });
    }
    render() {
        return (
            <div>
                <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
            </div>
        );
    }
}

export class FormDemo extends React.Component
{
    //an example of controlled components
    constructor(props){
        super(props);
        this.state ={value: '', temp: ''};
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);

    }
    handleChange(event)
    {
        this.setState({temp: event.target.value});
    }
    handleSubmit(event)
    {
        event.preventDefault();<div><h1 style={{color:'#732584'}}>Form Demo by {this.props.name} from {this.props.company}</h1></div>
        this.setState({
            value: this.state.temp
        });

    }
    render(){
        return <div>
            <form method="post" onSubmit={this.handleSubmit}>
                <label>First Name</label>
                <input type="text" name="firstName" value={this.state.temp} onChange={this.handleChange}></input>
                <input type="submit" value="submit"></input>
            </form>
            <p>{this.state.value}</p>
        </div>;
    }
}

export class ArrayListDemo extends React.Component
{
    constructor(props)
    {
        super(props);
        this.state = {
            num : [1, 2, 3, 4, 5],
            bufferValue : ''
        };

    }
    render(){
        const listItems = this.state.num.map((number,id) =>
            <li key={id}>
                {number}
            </li>
        );
        return <ul>
            {listItems}
        </ul>;
    }
}

export class AppendArrayList extends React.Component
{
    constructor(props){
        super(props);
        this.state = {
            num : [1, 2, 3, 4, 5],
            bufferValue : ''
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);

    }
    componentWillUpdate(nextState) {
        nextState.invalidData = !(nextState.number);
    }
    handleChange(event)
    {
        this.setState({
            bufferValue: event.target.value
        });
    }
    handleSubmit(event)
    {
        event.preventDefault();
        this.state.num.push(this.state.bufferValue);
        this.setState({
            num : this.state.num
        });
    }
    render(){
        const listItems = this.state.num.map((number,id) =>
            <li key={id}>
                {number}
            </li>
        );
        const isEnabled= this.state.bufferValue !=="";
        return <div>
            <form method="post" onSubmit={this.handleSubmit}>
                <label>Number</label>
                <input type="number" name="number" value={this.state.bufferValue} onChange={this.handleChange}></input>
                <input type="submit" value="submit" disabled={!isEnabled}></input>
            </form>
            <ul>
                {listItems}
            </ul>
        </div>;
    }
}