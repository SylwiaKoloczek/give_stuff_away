import React from 'react';
import ReactDOM from 'react-dom';
import "./../../scss/main.scss";
import {Reg_Header} from './reg_header.jsx'
import {Reg_Form} from './reg_form.jsx'
import {Reg_Buttons} from './reg_buttons.jsx'

export class Reg_Panel extends React.Component {
    render() {
        return (
            <div className={'log_reg_panel_display_style'}>
                <Reg_Header/>
                <Reg_Form/>
                <Reg_Buttons/>
            </div>
        )
    }
}