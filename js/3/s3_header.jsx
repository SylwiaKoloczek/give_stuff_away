import React from 'react';
import ReactDOM from 'react-dom';
import "./../../scss/main.scss";

export class S3_Header extends React.Component {
    render() {
        return (
            <div className={'s3_header'}>
                <h1>Wystarczą 4 proste kroki</h1>
                <img src={'images/decoration.png'}></img>
            </div>
        )
    }
}
