import React from 'react';
import ReactDOM from 'react-dom';
import "./../scss/main.scss";
import {Section1} from './1/section1.jsx'
import Section2 from './2/section2.jsx'
import {Section3} from './3/section3.jsx'
import {Section4} from './4/section4.jsx'
import {Section5} from './5/section5.jsx'
import {Section6} from './6/section6.jsx'

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