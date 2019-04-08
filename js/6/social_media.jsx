import React from 'react';
import ReactDOM from 'react-dom';
import "./../../scss/main.scss";

export class Social_Media extends React.Component {
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