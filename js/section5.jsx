import React from 'react';
import ReactDOM from 'react-dom';
import "./../scss/main.scss";

//zrobić button dynamicznie?
export class S5_Main_Buttons extends React.Component {
    render() {
        return (
            <div className={'s5_main_buttons'}>
                <button>Fundacjom</button>
                <button>Organizacjom pozarządowym</button>
                <button>Lokalnym zbiórkom</button>
            </div>
        )
    }
}

export class S5_Intro extends React.Component {
    render() {
        return (
                <div className={'s5_intro'}>
                    <h1>Komu pomagamy?</h1>
                    <img src={'images/decoration.png'}></img>
                </div>
        )
    }
}

export class S5_Header extends React.Component {
    render() {
        return (
            <div className={'s5_header'}>
                <S5_Intro/>
                <S5_Main_Buttons/>
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