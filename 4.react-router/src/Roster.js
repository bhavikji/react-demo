import React from 'react';
import {Switch, Route} from 'react-router-dom';
import FullRoster from './fullRoster'
import Player from './player'

export default class Roster extends React.Component
{

// The Roster component matches one of two different routes
// depending on the full pathname
    render(){
        return <Switch>
            <Route exact path='/roster' component={FullRoster}/>
            <Route path='/roster/:number' component={Player}/>
        </Switch>;
    }
}