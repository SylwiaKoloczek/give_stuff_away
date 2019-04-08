import React from 'react';
import ReactDOM from 'react-dom';
import "./../../scss/main.scss";
import {Form} from './form.jsx';
import {Social_Media} from './social_media.jsx';

export class Section6 extends React.Component {
    render() {
        return (
            <div className={'main_config_s6'}>
                <Form/>
                <Social_Media/>
            </div>
        )
    }
}