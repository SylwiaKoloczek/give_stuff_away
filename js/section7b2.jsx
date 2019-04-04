import React from 'react';
import ReactDOM from 'react-dom';
import "./../scss/main.scss";

export class S7_Step extends React.Component{

    render() {
        return(
            <div className={'s7_step'}>
                <p>Krok 1/4</p>

            </div>
        )
    }
}


export class Section7b2 extends React.Component{

    render() {
        return(
            <div className={'s7b2_display_style'}>
                <S7_Step/>

            </div>
        )
    }
}