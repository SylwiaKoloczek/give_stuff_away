import React from 'react';
import ReactDOM from 'react-dom';
import "./../../scss/main.scss";
import {Menu_Nav_Panel} from './menu_nav_panel.jsx'

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