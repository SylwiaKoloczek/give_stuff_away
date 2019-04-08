import React from 'react';
import ReactDOM from 'react-dom';
import "./../../scss/main.scss";
import {S4_About} from './s4_about.jsx';
import {S4_Picture} from  './s4_picture.jsx'

export class Section4 extends React.Component {
    render() {
        return (
            <div className={'main_config_s4'}>
                <S4_About/>
                <S4_Picture/>
            </div>
        )
    }
}