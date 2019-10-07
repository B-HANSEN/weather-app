import React from "react";
// import './styles/time.css';

const Time = props => {

  return (

      <div>
           
        {/* Get Times*/}
             <h1>{ props.sunrise } </h1>
             <h1>{ props.sunset } </h1>
     
      </div>
  );
};

export default Time;