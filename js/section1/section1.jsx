import React from 'react';
import ReactDOM from 'react-dom';
import "./../../scss/main.scss";
import {Section7a} from './../section7a.jsx'
import {Section7b} from './../section7b.jsx'



//MAIN PANEL
export class Slogan_Options extends React.Component {

    give_away_btn = () => {
        if ( typeof this.props.clickMethodDD === 'function' ) {
            this.props.clickMethodDD("give_away");
        }
    }

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
                    <button onClick={this.give_away_btn}>ODDAJ <br/> RZECZY</button>
                    <button>ZORGANIZUJ <br/> ZBIÓRKĘ</button>
                </div>
            </div>
        )
    }
}

//REG PANEL
export class Reg_Header extends React.Component {
    render() {
        return (
            <div className={'log_header'}>
                <h1>Załóż konto</h1>
                <img src={'images/decoration.png'}></img>
            </div>
        )
    }
}

export class Reg_Form extends React.Component {
    render() {
        return (
            <div className={'log_form'}>
                <input type={'email'} placeholder={"Email"}/>
                <input type={'password'} placeholder={"Hasło"}/>
                <input type={'password'} placeholder={"Powtórz hasło"}/>
            </div>
        )
    }
}

export class Reg_Buttons extends React.Component {
    render() {
        return (
            <div className={'log_buttons'}>
                <button>Załóż konto</button>
                <button>Zaloguj</button>
            </div>
        )
    }
}

export class Reg_Panel extends React.Component {
    render() {
        return (
            <div className={'log_reg_panel_display_style'}>
                <Reg_Header/>
                <Reg_Form/>
                <Reg_Buttons/>
            </div>
        )
    }
}

//LOG PANEL
export class Log_Header extends React.Component {
    render() {
        return (
            <div className={'log_header'}>
                <h1>Zaloguj się</h1>
                <img src={'images/decoration.png'}></img>
            </div>
        )
    }
}

export class Log_Form extends React.Component {
    render() {
        return (
            <div className={'log_form'}>
                <input type={'email'} placeholder={"Email"}/>
                <input type={'password'} placeholder={"Hasło"}/>
                <p>Przypomnij hasło</p>
            </div>
        )
    }
}

export class Log_Buttons extends React.Component {
    logged_in_click = () => {
       console.log('zalogowany');
    }

    registered_click = () => {
        console.log('pokaz reg panel');
    }

    render() {
        return (
            <div className={'log_buttons'}>
                <button onClick={this.logged_in_click}>Zaloguj</button>
                <button onClick={this.registered_click}>Załóż konto</button>
            </div>
        )
    }
}

//sprawdzić jakie imię jest wpisywane w Form w input, i wyświetlać je w zalogowanym panelu
//po naciśnięciu przysisku zaloguj
export class Log_Panel extends React.Component {
    render() {
        return (
            <div className={'log_reg_panel_display_style'}>
                <Log_Header/>
                <Log_Form/>
                <Log_Buttons/>
            </div>
        )
    }
}

//NIEZMIENNE MENU
export class Menu_Nav_Panel extends React.Component{

    start_click= () => {
        if ( typeof this.props.clickMethodDD === 'function' ) {
            this.props.clickMethodDD("yes");
        }
    }

    render() {
        return(
            <div>
                <ul className={'menu position'}>
                    <li onClick={this.start_click}>Start</li>
                    <li>O co chodzi?</li>
                    <li>O nas</li>
                    <li>Fundacje i organizacje</li>
                    <li>Kontakt</li>
                </ul>
            </div>
        )
    }

}

export class Menu extends React.Component {

    log_click = () => {
        if ( typeof this.props.clickMethodDD === 'function' ) {
            this.props.clickMethodDD("log");
        }
    }

    reg_click = () => {
        if ( typeof this.props.clickMethodDD === 'function' ) {
            this.props.clickMethodDD("reg");
        }
    }



    render() {
        return (
            <div className={'menu_display_style'}>
                <div className={'log_reg position'}>
                    <button onClick={this.log_click}>Zaloguj</button>
                    <button onClick={this.reg_click}>Załóż konto</button>
                </div>
                <Menu_Nav_Panel/>
            </div>
        )
    }
}


//GŁÓWNY PODZIAŁ
export class Section1 extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            sloganVisible: "yes",
        }
    }
    handleClickBox = (paramFromChild) => {
        this.setState({
            sloganVisible: paramFromChild
        });
    }
    render() {
        if(this.state.sloganVisible === "yes")
        {
            return(
                <div className={'main_config_s1'}>
                    <Menu clickMethodDD={this.handleClickBox} />
                    <Slogan_Options clickMethodDD={this.handleClickBox}/>
                </div>
            )
        }
        else if(this.state.sloganVisible === "log"){
            return(
                <div className={'main_config_s1'} style={{backgroundImage:"none"}}>
                    <Menu clickMethodDD={this.handleClickBox} />
                    <Log_Panel/>
                </div>
            )
        }
        else if(this.state.sloganVisible === "reg"){
            return(
                <div className={'main_config_s1'} style={{backgroundImage:"none"}}>
                    <Menu clickMethodDD={this.handleClickBox} />
                    <Reg_Panel/>
                </div>
            )
        }
        else if(this.state.sloganVisible === "give_away"){
            return(
                <div>
                    <div className={'main_config_s1'} style={{backgroundImage:'url("images/header_logged_img.jpg")'}}>
                        <Menu clickMethodDD={this.handleClickBox} />
                        <Section7a/>
                    </div>
                    <Section7b/>
                </div>
            )
        }
    }
}


//zamiast osobnych elementów w REG PANEL i LOG PANEL zrobić wspólne (za pomocą list?)
//i w zależności od klikniętego przycisku w MENU wyświetlać odpowiedni element z listy
