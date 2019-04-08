import React from 'react';
import ReactDOM from 'react-dom';
import "./../../scss/main.scss";

export class Log_Buttons extends React.Component {
    logged_in_click = () => {
        console.log('zalogowany');
    }

    registered_click = () => {
        console.log('pokaz reg panel');
    }

    render() {
        return (
            <div className={'log_buttons'}>
                <button onClick={this.logged_in_click}>Zaloguj</button>
                <button onClick={this.registered_click}>Załóż konto</button>
            </div>
        )
    }
}