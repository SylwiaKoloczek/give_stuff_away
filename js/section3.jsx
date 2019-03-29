import React from 'react';
import ReactDOM from 'react-dom';
import "./../scss/main.scss";

export class S3_Button extends React.Component {
    render() {
        return (
            <div className={'s3_button'}>
                <button>ZAŁÓŻ KONTO</button>
            </div>
        )
    }
}

//zrobić step jako jeden element
export class S3_Steps extends React.Component {
    render() {
        return (
            <div className={'s3_steps'}>
                <div className={'step'}>
                    <i className="fas fa-hands fa-3x"></i>
                    <h3>Wybierz rzeczy</h3>
                    <hr></hr>
                    <p>ubrania, zabawki, sprzęt, inne</p>
                </div>
                <div className={'step'}>
                    <i className="fas fa-box-open fa-3x"></i>
                    <h3>Spakuj je</h3>
                    <hr></hr>
                    <p>skorzystaj z worków na śmieci</p>
                </div>
                <div className={'step'}>
                    <i className="fas fa-question fa-3x"></i>
                    <h3>Zdecyduj komu chcesz pomóc</h3>
                    <hr></hr>
                    <p>wybierz zaufane miejsce</p>
                </div>
                <div className={'step'}>
                    <i className="fas fa-truck-moving fa-3x"></i>
                    <h3>Zamów kuriera</h3>
                    <hr></hr>
                    <p>kurier przyjedzie w dogodnym terminie</p>
                </div>
            </div>
        )
    }
}

export class S3_Header extends React.Component {
    render() {
        return (
            <div className={'s3_header'}>
                <h1>Wystarczą 4 proste kroki</h1>
                <img src={'images/decoration.png'}></img>
            </div>
        )
    }
}
export class Section3 extends React.Component {
    render() {
        return (
            <div className={'main_config_s3'}>
                <S3_Header/>
                <S3_Steps/>
                <S3_Button/>
            </div>
        )
    }
}