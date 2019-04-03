import React from 'react';
import ReactDOM from 'react-dom';
import "./../scss/main.scss";


//HEADER
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

//DESCRIPTION
export class S5_Description extends React.Component {
    constructor(props){
        super(props);
        this.state={
            item: 'Fundacji',
        }
    }
    render() {
        return (
            <div className={'s5_description'}>
                <p>W naszej bazie znajdziesz listę zweryfikowanych {this.state.item}, z którymi współpracujemy. Możesz sprawdzić, czym się zajmują, komu pomagają i czego potrzebują.</p>
            </div>
        )
    }
}

export class Section5 extends React.Component {
    render() {
        return (
            <div className={'main_config_s5'}>
                <S5_Header/>
                <S5_Description/>
            </div>
        )
    }
}