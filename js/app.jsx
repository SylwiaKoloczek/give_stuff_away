import React from 'react';
import ReactDOM from 'react-dom';
import "./../scss/main.scss";
import {Section1, Menu, Slogan_Options} from './section1.jsx'
import Section2 from './section2.jsx'
import {Section3, S3_Header, S3_Steps, S3_Button} from './section3.jsx'
import {Section4, S4_About, S4_Picture} from './section4.jsx'
import {Section5, S5_Header, S5_Intro, S5_Main_Buttons} from './section5.jsx'
import {Section6, Form, S6_Header, S6_Form_Part, S6_Form_Info, S6_Button, Social_Media} from './section6.jsx'

class App extends React.Component {
    render() {
        return (<div className={'row'}>
                    <Section1/>
                    <Section2/>
                    <Section3/>
                    <Section4/>
                    <Section5/>
                    <Section6/>
                </div>
        )
    }
}

export default App;