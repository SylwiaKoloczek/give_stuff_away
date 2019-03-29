import React from 'react';
import ReactDOM from 'react-dom';
import "./../scss/main.scss";

export class Social_Media extends React.Component {
    render() {
        return (
            <div className={'social_media'}>
                <div className={'fb'}>
                    <a href={'#'}><i className="fab fa-facebook-f"></i></a>
                </div>
                <div className={'ig'}>
                    <a href={'#'}><i className="fab fa-instagram"></i></a>
                </div>
            </div>
        )
    }
}

export class S6_Button extends React.Component {
    render() {
        return (
            <div className={'s6_button'}>
                <button>Wyślij</button>
            </div>
        )
    }
}

export class S6_Form_Info extends React.Component {
    render() {
        return (
            <div className={'s6_form_info'}>
                <h2>FORMULARZ KONTAKTOWY</h2>
                <div className={'s6_input_info'}>
                    <input type={'text'} placeholder={"Imię"}/>
                    <input type={'email'} placeholder={"Email"}/>
                    <br></br>
                    <textarea rows={1} placeholder={'Wiadomość'}></textarea>
                </div>
            </div>
        )
    }
}

export class S6_Form_Part extends React.Component {
    render() {
        return (
            <div className={'form_part'}>
                <S6_Form_Info/>
                <S6_Button/>
            </div>
        )
    }
}

export class S6_Header extends React.Component {
    render() {
        return (
            <div className={'s6_header'}>
                <h1>Skontaktuj się z nami</h1>
                <img src={'images/decoration.png'}></img>
            </div>
        )
    }
}

export class Form extends React.Component {
    render() {
        return (
            <div className={'s6_form'}>
                <S6_Header/>
                <S6_Form_Part/>

            </div>
        )
    }
}

export class Section6 extends React.Component {
    render() {
        return (
            <div className={'main_config_s6'}>
                <Form/>
                <Social_Media/>
            </div>
        )
    }
}