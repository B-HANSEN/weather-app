import React from "react";
// import './styles/time.css';

const Time = props => {

  return (

      <div>
           
        {/* Get Times*/}
             <h1>{ props.sunrise } &deg;</h1>
             <h1>{ props.sunset } &deg;</h1>
     
      </div>
  );
};

export default Time;




// http://api.openweathermap.org/data/2.5/weather?q=NEw%20YORK&appid=8e9f74a0deea83b7b887ba94b226da27
// http://api.openweathermap.org/data/2.5/weather?q=lisbon&appid=ec6694f09973f55ba760f03ec141f047
// http://api.openweathermap.org/data/2.5/weather?q=london&appid=8e2f3e40a039f286e61d6b7565fd920a


// How to get icon URL
// For code 501 - moderate rain icon = "10d"
// URL is
// http://openweathermap.org/img/wn/10d@2x.png