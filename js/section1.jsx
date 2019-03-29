import React from 'react';
import ReactDOM from 'react-dom';
import "./../scss/main.scss";

export class Slogan_Options extends React.Component {
    render() {
        return (
            <div className={'slogan_options_display_style'}>
                <div className={'slogan'}>
                    <h1>Zacznij pomagać!
                        <br/>
                        Oddaj niechciane rzeczy w zaufane ręce
                    </h1>
                    <img src={'images/decoration.png'}></img>
                </div>
                <div className={'options'}>
                    <button>ODDAJ <br/> RZECZY</button>
                    <button>ZORGANIZUJ <br/> ZBIÓRKĘ</button>
                </div>
            </div>
        )
    }
}

export class Menu extends React.Component {

    log_click = () => {
        console.log("Logged in");
    }

    reg_click = () => {
        console.log("Registered");
    }

    render() {
        return (
            <div className={'menu_display_style'}>
                <div className={'log_reg position'}>
                    <button onClick={this.log_click}>Zaloguj</button>
                    <button onClick={this.reg_click}>Załóż konto</button>
                </div>
                <div>
                    <ul className={'menu position'}>
                        <li>Start</li>
                        <li>O co chodzi?</li>
                        <li>O nas</li>
                        <li>Fundacje i organizacje</li>
                        <li>Kontakt</li>
                    </ul>
                </div>
            </div>
        )
    }
}

export class Section1 extends React.Component {
    render() {
        return (
            <div className={'main_config_s1'}>
                <Menu/>
                <Slogan_Options/>
            </div>
        )
    }
}