import React from 'react';
import ReactDOM from 'react-dom';
import "./../../scss/main.scss";

export class S4_Picture extends React.Component {
    render() {
        return (
            <div className={'s4_picture'}>
                <img src={'images/about.jpg'}></img>
            </div>
        )
    }
}