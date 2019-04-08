import React from 'react';
import ReactDOM from 'react-dom';
import "./../../scss/main.scss";

//zrobić button dynamicznie?
export class S5_Main_Buttons extends React.Component {

    funHandleClick = () => {
        //console.log("fundacja");
        if ( typeof this.props.choose_item_method === 'function' ) {
            this.props.choose_item_method("Fundacjom");
        }
    }
    OrgHandleClick = () => {
        //console.log("organizacja pozarządowa");
        if ( typeof this.props.choose_item_method === 'function' ) {
            this.props.choose_item_method("Organizacjom pozarządowym");
        }
    }
    LokHandleClick = () => {
        //console.log("lokala zbiórka");
        if ( typeof this.props.choose_item_method === 'function' ) {
            this.props.choose_item_method("Lokalnym zbiórkom");
        }
    }

    render() {
        return (
            <div className={'s5_main_buttons'}>
                <button onClick={this.funHandleClick}>Fundacjom</button>
                <button onClick={this.OrgHandleClick}>Organizacjom pozarządowym</button>
                <button onClick={this.LokHandleClick}>Lokalnym zbiórkom</button>
            </div>
        )
    }
}