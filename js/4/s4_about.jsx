import React from 'react';
import ReactDOM from 'react-dom';
import "./../../scss/main.scss";

export class S4_About extends React.Component {
    render() {
        return (
            <div className={'about'}>
                <h1>O nas</h1>
                <img src={'images/decoration.png'}></img>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolor error est iusto labore mollitia rerum similique tempora! Ab assumenda, beatae consequuntur cumque dolore doloribus ea eos explicabo impedit itaque libero, maxime molestiae officia quod saepe sapiente suscipit ut veritatis voluptatum?</p>
            </div>
        )
    }
}