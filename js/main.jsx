import React from 'react';
import ReactDOM from 'react-dom';
import "./../scss/main.scss";



document.addEventListener('DOMContentLoaded', function(){

//SEKCJA 6
    class Social_Media extends React.Component {
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

    class S6_Button extends React.Component {
        render() {
            return (
                <div className={'s6_button'}>
                    <button>Wyślij</button>
                </div>
            )
        }
    }

    class S6_Form_Info extends React.Component {
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

    class S6_Form_Part extends React.Component {
        render() {
            return (
                <div className={'form_part'}>
                    <S6_Form_Info/>
                    <S6_Button/>
                </div>
            )
        }
    }

    class S6_Header extends React.Component {
        render() {
            return (
                <div className={'s6_header'}>
                    <h1>Skontaktuj się z nami</h1>
                    <img src={'images/decoration.png'}></img>
                </div>
            )
        }
    }

    class Form extends React.Component {
        render() {
            return (
                <div className={'s6_form'}>
                    <S6_Header/>
                    <S6_Form_Part/>

                </div>
            )
        }
    }

    class Section6 extends React.Component {
        render() {
            return (
                <div className={'main_config_s6'}>
                    <Form/>
                    <Social_Media/>
                </div>
            )
        }
    }

//SEKCJA 4
    class S4_Picture extends React.Component {
        render() {
            return (
                <div className={'s4_picture'}>
                    <img src={'images/about.jpg'}></img>
                </div>
            )
        }
    }

    class S4_About extends React.Component {
        render() {
            return (
                <div className={'about'}>
                    <h1>O nas</h1>
                    <img src={'images/decoration.png'}></img>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolor error est iusto labore mollitia rerum similique tempora! Ab assumenda, beatae consequuntur cumque dolore doloribus ea eos explicabo impedit itaque libero, maxime molestiae officia quod saepe sapiente suscipit ut veritatis voluptatum?</p>
                </div>
            )
        }
    }

    class Section4 extends React.Component {
        render() {
            return (
                <div className={'main_config_s4'}>
                    <S4_About/>
                    <S4_Picture/>

                </div>
            )
        }
    }

//SEKCJA 3
    class S3_Button extends React.Component {
        render() {
            return (
                <div className={'s3_button'}>
                    <button>ZAŁÓŻ KONTO</button>
                </div>
            )
        }
    }

    //zrobić step jako jeden element
    class S3_Steps extends React.Component {
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

    class S3_Header extends React.Component {
        render() {
            return (
                <div className={'s3_header'}>
                    <h1>Wystarczą 4 proste kroki</h1>
                    <img src={'images/decoration.png'}></img>
                </div>
            )
        }
    }
    class Section3 extends React.Component {
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

//SEKCJA 2
    //zrobić statistics_col jako jeden element
    class Section2 extends React.Component {
        render() {
            return (
                <div className={'main_config_s2'}>
                    <div className={'statistics_col'}>
                        <h2>10</h2>
                        <h3>ODDANYCH WORKÓW</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis et facilis inventore magnam maxime mollitia, nobis quo. Eum, nesciunt tempora?</p>
                    </div>
                    <div className={'statistics_col'}>
                        <h2>5</h2>
                        <h3>WSPARTYCH ORGANIZACJI</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. A architecto dolorum facere laboriosam optio provident quia sint soluta tempore velit!</p>
                    </div>
                    <div className={'statistics_col'}>
                        <h2>7</h2>
                        <h3>ZORGANIZOWANYCH ZBIÓREK</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur aut cupiditate facilis perferendis praesentium quo rem sapiente sunt vel voluptatum.</p>
                    </div>
                </div>
            )
        }
    }

//SEKCJA 1
    class Slogan_Options extends React.Component {
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
                        <button>ODDAJ <br/> RZECZY</button>
                        <button>ZORGANIZUJ <br/> ZBIÓRKĘ</button>
                    </div>
                </div>
            )
        }
    }

    class Menu extends React.Component {
        render() {
            return (
                <div className={'menu_display_style'}>
                    <div className={'log_reg position'}>
                        <button>Zaloguj</button>
                        <button>Załóż konto</button>
                    </div>
                    <div>
                        <ul className={'menu position'}>
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
                <div className={'main_config_s1'}>
                    <Menu/>
                    <Slogan_Options/>
                </div>
            )
        }
    }

//GŁÓWNY PODZIAŁ
    class App extends React.Component {
        render() {
            return (<div>
                    <Section1/>
                    <Section2/>
                    <Section3/>
                    <Section4/>

                    <Section6/>
                </div>
            )
        }
    }


    ReactDOM.render(
        <App/>,
        document.querySelector('#app')
    )
});