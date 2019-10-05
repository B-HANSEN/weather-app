import React from 'react';
import './styles/city.css';


const City = props => {
    
        return (
            <div className="dropdown">
                <button className="dropbtn">Dropdown</button>
                    <div className="dropdown-content">
                        <a href="#" onClick= { props.loadweather } value= "Lisbon"> Lisbon</a>
                        <a href="#" onClick={ props.loadweather } value= "Ney York">New York</a>
                        <a href="#" onClick={ props.loadweather } value= "London">London</a>
                    </div>
            </div>
        )
};



export default City