import React from 'react';

export default class Header extends React.Component
{
    /*getting value from app(parent) file*/
    render(){
        return <div>
            <h1>{this.props.headerTitle}</h1>
            </div>;
    }
}
