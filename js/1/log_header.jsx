import React from 'react';
import ReactDOM from 'react-dom';
import "./../../scss/main.scss";

export class Log_Header extends React.Component {
    render() {
        return (
            <div className={'log_header'}>
                <h1>Zaloguj się</h1>
                <img src={'images/decoration.png'}></img>
            </div>
        )
    }
}