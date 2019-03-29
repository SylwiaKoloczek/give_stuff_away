import React from 'react';
import ReactDOM from 'react-dom';
import "./../scss/main.scss";
import App from './app.jsx'

document.addEventListener('DOMContentLoaded', function(){

    ReactDOM.render(
        <App/>,
        document.querySelector('#app')
    )
});