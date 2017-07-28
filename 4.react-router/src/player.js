import React from 'react';
import PlayerAPI from '../api';
import {Link} from 'react-router-dom';

export default class Player extends React.Component
{

// The Player looks up the player using the number parsed from
// the URL's pathname. If no player is found with the given
// number, then a "player not found" message is displayed.
    constructor(props) {
        super(props);
        const player = PlayerAPI.get(
            parseInt(props.match.params.number, 10)
        );
    }
    render(){
        if(!player){
            return <div>Sorry, but the player was not found</div>;
        }
        return <div>
            <h1>{player.name} (#{player.number})</h1>
            <h2>Position: {player.position}</h2>
            <Link to='/roster'>Back</Link>
        </div>;
    }
}