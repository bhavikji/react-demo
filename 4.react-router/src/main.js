import React from "react";
import {Switch, Route} from 'react-router-dom';
import Home from './home';
import Roster from './Roster';
import Schedule from './schedule';

export default class Main extends React.Component{
    render(){
        return <main>
            <Switch>
                <Route exact path='/' component={Home}/>
                <Route path='/roster' component={Roster}/>
                <Route path='/schedule' component={Schedule}/>
            </Switch>
        </main>

    }
}