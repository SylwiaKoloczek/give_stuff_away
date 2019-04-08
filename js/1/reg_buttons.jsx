import React from 'react';
import ReactDOM from 'react-dom';
import "./../../scss/main.scss";

export class Reg_Buttons extends React.Component {
    render() {
        return (
            <div className={'log_buttons'}>
                <button>Załóż konto</button>
                <button>Zaloguj</button>
            </div>
        )
    }
}