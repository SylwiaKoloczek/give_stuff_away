import React from 'react';
import ReactDOM from 'react-dom';
import "./../../scss/main.scss";

export class Slogan_Options extends React.Component {

    give_away_btn = () => {
        if ( typeof this.props.clickMethodDD === 'function' ) {
            this.props.clickMethodDD("give_away");
        }
    }

    render() {
        return (
            <div className={'slogan_options_display_style'}>
                <div className={'slogan'}>
                    <h1>Zacznij pomagać!
                        <br/>
                        Oddaj niechciane rzeczy w zaufane ręce
                    </h1>
                    <img src={'images/decoration.png'}></img>
                </div>
                <div className={'options'}>
                    <button onClick={this.give_away_btn}>ODDAJ <br/> RZECZY</button>
                    <button>ZORGANIZUJ <br/> ZBIÓRKĘ</button>
                </div>
            </div>
        )
    }
}