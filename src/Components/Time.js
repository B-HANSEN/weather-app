import React from "react";
import './styles/time.css';

const Time = props => {

  return (
      <div className="times">
           
        {/* Get Times*/}
            <h3>Sunrise</h3>
              <p>{ props.sunrise } </p>
            <h3>Sunset</h3>
             <p>{ props.sunset } </p>
      </div>
  );
};

export default Time;