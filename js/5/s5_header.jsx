import React from 'react';
import ReactDOM from 'react-dom';
import "./../../scss/main.scss";
import "./../../scss/main.scss";
import {S5_Main_Buttons} from './s5_main_buttons.jsx'
import {S5_Intro} from './s5_intro.jsx'

export class S5_Header extends React.Component {

    //jak przekazać ten item_name wyżej? czyli do rodzica?
    constructor(props) {
        super(props);
        this.state = {
            item_name: "Fundacjom"
        }
    }

    choose_item = (paramFromChild) => {
        this.setState({
            item_name: paramFromChild
        });
        console.log(this.state.item_name);
    }

    render() {
        return (
            <div className={'s5_header'}>
                <S5_Intro/>
                <S5_Main_Buttons choose_item_method={this.choose_item}/>
            </div>
        )
    }
}