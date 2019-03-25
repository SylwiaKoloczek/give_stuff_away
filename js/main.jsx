import React from 'react';
import ReactDOM from 'react-dom';
import "./../scss/main.scss";


document.addEventListener('DOMContentLoaded', function(){

    class Slogan_Options extends React.Component {
        render() {
            return (
                <div className={'slogan_options_display_style'}>
                      <div className={'slogan'}>
                          <h3>Zacznij pomagać!</h3>
                          <h3>Oddaj niechciane rzeczy w zaufane ręce</h3>
                          <img src={'images/decoration.png'}></img>
                      </div>
                    <div className={'options'}>
                        <button>ODDAJ RZECZY</button>
                        <button>ZORGANIZUJ ZBIÓRKĘ</button>
                    </div>
                </div>
            )
        }
    }

    class Menu extends React.Component {
        render() {
            return (
                <div className={'menu_display_style'}>
                    <div className={'log_reg'}>
                        <button>Zaloguj</button>
                        <button>Załóż konto</button>
                    </div>
                    <div>
                        <ul className={'menu'}>
                            <li>Start</li>
                            <li>O co chodzi?</li>
                            <li>O nas</li>
                            <li>Fundacje i organizacje</li>
                            <li>Kontakt</li>
                        </ul>
                    </div>
                </div>
            )
        }
    }

    class Section1 extends React.Component {
        render() {
            return (
                <div className={'main_config'}>
                    <Menu/>
                    <Slogan_Options/>
                </div>
            )
        }
    }

    const App = () => <Section1/>

    ReactDOM.render(
        <App/>,
        document.querySelector('#app')
    )
});