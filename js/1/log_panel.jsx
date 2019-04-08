import React from 'react';
import ReactDOM from 'react-dom';
import "./../../scss/main.scss";
import {Log_Header} from './log_header.jsx'
import {Log_Form} from './log_form.jsx'
import {Log_Buttons} from './log_buttons.jsx'

//sprawdzić jakie imię jest wpisywane w Form w input, i wyświetlać je w zalogowanym panelu
//po naciśnięciu przysisku zaloguj
export class Log_Panel extends React.Component {
    render() {
        return (
            <div className={'log_reg_panel_display_style'}>
                <Log_Header/>
                <Log_Form/>
                <Log_Buttons/>
            </div>
        )
    }
}