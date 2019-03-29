import React from 'react';
import ReactDOM from 'react-dom';
import "./../scss/main.scss";

export class S5_Header extends React.Component {
    render() {
        return (
            <div className={'s5_header'}>
                <div className={'s5_intro'}>
                    <h1>Komu pomagamy?</h1>
                    <img src={'images/decoration.png'}></img>
                </div>
                <div className={'s5_main_buttons'}>
                    <button>Fundacjom</button>
                    <button>Organizacjom pozarządowym</button>
                    <button>Lokalnym zbiórkom</button>
                </div>
            </div>
        )
    }
}

export class Section5 extends React.Component {
    render() {
        return (
            <div className={'main_config_s5'}>
                <S5_Header/>
            </div>
        )
    }
}