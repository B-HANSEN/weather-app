import React from "react";
import './styles/icon.css';

const Icon = props => {

  return (
    
      <div>
            <h1>{props.city}</h1>
            <h5>
                <i className={`wi ${props.weatherIcon}`} />
            </h5>

        {/* Get Celsius */}
            {   props.temp_celsius
                ? <h1>{ props.temp_celsius }&deg;</h1>
                : <h1>{ props.temp_fahrenheit }&deg;</h1>
            }

        {/* Weather description */}
            <h4>
                {props.description.charAt(0).toUpperCase() + props.description.slice(1)}
            </h4>
      </div>
  
  );
};

export default Icon;


// if (props.cities) {
//     let fahrenheit = parseInt(props.cities.main.temp);
//     let celsius = parseInt((fahrenheit - 32) * (5 / 9));
//     if (props.tempSymbol === 'F') {
//       currentTemp = fahrenheit;
//     } else {
//       currentTemp = celsius;
//     }
//   }


{/* <p id='temp'>{props.cities ? currentTemp : ''}°</p> */}