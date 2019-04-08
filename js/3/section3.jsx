import React from 'react';
import ReactDOM from 'react-dom';
import "./../../scss/main.scss";
import {S3_Button} from './s3_button.jsx'
import {S3_Header} from './s3_header.jsx'
import {S3_Steps} from './s3_steps.jsx'

export class Section3 extends React.Component {
    render() {
        return (
            <div className={'main_config_s3'}>
                <S3_Header/>
                <S3_Steps/>
                <S3_Button/>
            </div>
        )
    }
}