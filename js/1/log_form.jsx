import React from 'react';
import ReactDOM from 'react-dom';
import "./../../scss/main.scss";

export class Log_Form extends React.Component {
    render() {
        return (
            <div className={'log_form'}>
                <input type={'email'} placeholder={"Email"}/>
                <input type={'password'} placeholder={"Hasło"}/>
                <p>Przypomnij hasło</p>
            </div>
        )
    }
}