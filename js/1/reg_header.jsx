import React from 'react';
import ReactDOM from 'react-dom';
import "./../../scss/main.scss";

export class Reg_Header extends React.Component {
    render() {
        return (
            <div className={'log_header'}>
                <h1>Załóż konto</h1>
                <img src={'images/decoration.png'}></img>
            </div>
        )
    }
}