import React from 'react';
import ReactDOM from 'react-dom';
import "./../../scss/main.scss";
import {S6_Form_Info} from './s6_form_info.jsx';
import {S6_Button} from './s6_button.jsx';

export class S6_Form_Part extends React.Component {
    render() {
        return (
            <div className={'form_part'}>
                <S6_Form_Info/>
                <S6_Button/>
            </div>
        )
    }
}