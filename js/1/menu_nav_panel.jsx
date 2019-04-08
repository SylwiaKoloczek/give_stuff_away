import React from 'react';
import ReactDOM from 'react-dom';
import "./../../scss/main.scss";

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
