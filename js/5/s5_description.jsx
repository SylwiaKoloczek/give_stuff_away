import React from 'react';
import ReactDOM from 'react-dom';
import "./../../scss/main.scss";

//DESCRIPTION
export class S5_Description extends React.Component {
    constructor(props){
        super(props);
        this.state={
            item: 'Fundacji',
        }
    }
    render() {
        return (
            <div className={'s5_description'}>
                <p>W naszej bazie znajdziesz listę zweryfikowanych {this.state.item}, z którymi współpracujemy. Możesz sprawdzić, czym się zajmują, komu pomagają i czego potrzebują.</p>
            </div>
        )
    }
}