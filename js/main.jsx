import React from 'react';
import ReactDOM from 'react-dom';
import 'scss/partials/main.scss';
//import 'scss/partials/_Section1.scss'; // assuming a styles directory under src/
//@import '~nprogress/nprogress'; // importing a css file from the nprogress node module


document.addEventListener('DOMContentLoaded', function(){

    class Log_Register extends React.Component {
        render() {
            let className='a';
            return (
                <div>
                <h1 className={className}>elo</h1>
                </div>
            )
        }
    }

    class Section1 extends React.Component {
        render() {
            return (
                <div>
                    <Log_Register/>
                    {/*<Menu/>,*/}
                    {/*<Slogan/>,*/}
                    {/*<Options />*/}
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