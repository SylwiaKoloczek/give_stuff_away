import React from 'react';
import ReactDOM from 'react-dom';
import "./../scss/main.scss";
import {Section7b1} from './section7b1.jsx'
import {Section7b2} from './section7b2.jsx'

export class Section7b extends React.Component{

    render() {
        return(
            <div className={'s7b_display_style'}>
                <Section7b1/>
                <Section7b2/>
            </div>
        )
    }
}