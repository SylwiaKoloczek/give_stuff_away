import React from 'react';
import ReactDOM from 'react-dom';
import "./../../scss/main.scss";

export class S6_Form_Info extends React.Component {
    render() {
        return (
            <div className={'s6_form_info'}>
                <h2>FORMULARZ KONTAKTOWY</h2>
                <div className={'s6_input_info'}>
                    <input type={'text'} placeholder={"Imię"}/>
                    <input type={'email'} placeholder={"Email"}/>
                    <br></br>
                    <textarea rows={1} placeholder={'Wiadomość'}></textarea>
                </div>
            </div>
        )
    }
}