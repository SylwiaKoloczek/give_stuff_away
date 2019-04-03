import React from 'react';
import ReactDOM from 'react-dom';
import "./../scss/main.scss";


//MAIN PANEL
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
    render() {
        return (
            <div className={'log_buttons'}>
                <button>Zaloguj</button>
                <button>Załóż konto</button>
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
            console.log(this.state.sloganVisible);
            return(
                <div className={'main_config_s1'}>
                    <Menu clickMethodDD={this.handleClickBox} />
                    <Slogan_Options/>
                </div>
            )
        }
        else if(this.state.sloganVisible === "log"){
            console.log(this.state.sloganVisible);
            return(
                <div className={'main_config_s1'} style={{backgroundImage:"none"}}>
                    <Menu clickMethodDD={this.handleClickBox} />
                    <Log_Panel/>
                </div>
            )
        }
        else{
            console.log(this.state.sloganVisible);
            return(
                <div className={'main_config_s1'} style={{backgroundImage:"none"}}>
                    <Menu clickMethodDD={this.handleClickBox} />
                    <Reg_Panel/>
                </div>
            )
        }
    }
}


//zamiast osobnych elementów w REG PANEL i LOG PANEL zrobić wspólne (za pomocą list?)
//i w zależności od klikniętego przycisku w MENU wyświetlać odpowiedni element z listy
