import React from "react";
import './styles/time.css';


const Time = props => {

  return (
      <div className="times">
           
        {/* Get Times*/}
            <h4>Sunrise</h4>
              <p>{ props.sunrise } </p>
            <h4>Sunset</h4>
              <p>{ props.sunset } </p>
      </div>
  );
};

export default Time;