import React from 'react';
import './styles/button.css';


class Button extends React.Component {


    render () {

        return (
                <div class="dropdown">
                    <button class="dropbtn">Dropdown</button>
                    <div class="dropdown-content">
                    <a href="#">Lisbon</a>
                    <a href="#">New York></a>
                    <a href="#">London</a>
                    </div>
                </div>
        )
    }
}


export default Button