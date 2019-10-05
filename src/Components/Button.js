import React from 'react';
import './styles/button.css';


class Button extends React.Component {


    render () {

        return (
                <div className="dropdown">
                    <button className="dropbtn">Dropdown</button>
                    <div className="dropdown-content">
                    <a href="#">Lisbon</a>
                    <a href="#">New York</a>
                    <a href="#">London</a>
                    </div>
                </div>
        )
    }
}


export default Button