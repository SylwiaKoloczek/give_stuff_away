import React from 'react';
import ReactDOM from 'react-dom';
import "./../../scss/main.scss";

export class S6_Header extends React.Component {
    render() {
        return (
            <div className={'s6_header'}>
                <h1>Skontaktuj się z nami</h1>
                <img src={'images/decoration.png'}></img>
            </div>
        )
    }
}