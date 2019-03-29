import React from 'react';
import ReactDOM from 'react-dom';
import "./../scss/main.scss";

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

export default Section2;