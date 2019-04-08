import React from 'react';
import ReactDOM from 'react-dom';
import "./../../scss/main.scss";
import {S5_Main_Buttons} from './s5_main_buttons.jsx'
import {S5_Intro} from './s5_intro.jsx'
import {S5_Header} from './s5_header.jsx'
import {S5_Description} from './s5_description.jsx'

export class Section5 extends React.Component {
    render() {
        return (
            <div className={'main_config_s5'}>
                <S5_Header/>
                <S5_Description/>
            </div>
        )
    }
}