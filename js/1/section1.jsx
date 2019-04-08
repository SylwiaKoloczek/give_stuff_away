import React from 'react';
import ReactDOM from 'react-dom';
import "./../../scss/main.scss";
import {Section7a} from './../7/section7a.jsx'
import {Section7b} from './../7/section7b.jsx'
import {Menu} from './menu.jsx'
import {Log_Panel} from './log_panel.jsx'
import {Reg_Panel} from './reg_panel.jsx'
import {Slogan_Options} from './slogan_options.jsx'

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
