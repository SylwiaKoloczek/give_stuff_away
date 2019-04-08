import React from 'react';
import ReactDOM from 'react-dom';
import "./../../scss/main.scss";
import {S6_Header} from './s6_header.jsx';
import {S6_Form_Part} from './s6_form_part.jsx';

export class Form extends React.Component {
    render() {
        return (
            <div className={'s6_form'}>
                <S6_Header/>
                <S6_Form_Part/>

            </div>
        )
    }
}