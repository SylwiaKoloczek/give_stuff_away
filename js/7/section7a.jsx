import React from 'react';
import ReactDOM from 'react-dom';
import "./../../scss/main.scss";

export class Section7a extends React.Component{

    render() {
        return(
            <div className={'slogan_options_display_style'}>
                <div className={'slogan'}>
                    <h1>Oddaj rzeczy, których już nie chcesz
                        <br/>
                        POTRZEBUJĄCYM
                    </h1>
                    <img src={'images/decoration.png'}></img>
                </div>
                <div className={'steps'}>
                    <h2>Wystarczą 4 proste kroki:</h2>
                    <div className={'steps_display'}>
                        <div className={'step_style'}>
                            <h3>1</h3>
                            <p>Wybierz rzeczy</p>
                        </div>
                        <div className={'step_style'}>
                            <h3>2</h3>
                            <p>Spakuj je w worki</p>
                        </div>
                        <div className={'step_style'}>
                            <h3>3</h3>
                            <p>Wybierz fundację</p>
                        </div>
                        <div className={'step_style'}>
                            <h3>4</h3>
                            <p>Zamów kuriera</p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}