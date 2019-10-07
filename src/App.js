import React from 'react';
import Toggle from './Components/Toggle'
import Time from './Components/Time'
import City from './Components/City'
import './App.css';

const Api_Key = "c1d79600e28a5b4a4ef959688dfa55d3";
// http://api.openweathermap.org/data/2.5/weather?q=Lisbon&appid=c1d79600e28a5b4a4ef959688dfa55d3

class App extends React.Component {
   state = {
      city: null,
      icon: null,
      main: null,
      celsius: null,
      fahrenheit: null,
      formatteSunset: null,
      formattedSunrise: null,
      description: "",
      error: false,
      selectedOption: null
    };

calCelsius(temp) {
  let celsius = Math.floor(temp - 273.15);
  return celsius;
}

calFahrenheit(celsius) {
  let fahrenheit = Math.floor(9/5 * celsius + 32);
  return fahrenheit;
}

calUnix(t) {
  var dt = new Date(t*1000);
  var hr = dt.getHours();
  var m = "0" + dt.getMinutes();
  return hr + ':' + m.substr(-2)
}

switchTemp = (checked) => { 
  this.setState({ checked: checked })
};

getWeather = async (selectedOption) => {
    const api_call = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${selectedOption}&appid=${Api_Key}`)
    const response = await api_call.json();
    console.log(response);

    this.setState({
      city: `${response.name}`,
      main: response.weather[0].main,
      celsius: this.calCelsius(response.main.temp),
      fahrenheit: this.calFahrenheit(this.calCelsius(response.main.temp)),
      formattedSunrise: this.calUnix(response.sys.sunrise),
      formattedSunset: this.calUnix(response.sys.sunset),
      description: response.weather[0].description,
      error: false,
      icon : response.weather[0].icon
    });
};

      render () {
        return (
          <div className="App">
              <header className="App-header">
                <h3>Awesome Weather App</h3>
              </header>      
              
              <main>
                <figure>
                  
                  <img src={`https://openweathermap.org/img/wn/${this.state.icon}.png`} alt="" />
                  { this.state.checked
                    ? <p>{ this.state.celsius } °C </p>
                    : <p>{ this.state.fahrenheit } °F </p>
                  }
                  { this.state.description }
                
          {/* TODO: revise time code to actual local time */}
                  <Time
                    sunset={ this.state.formattedSunset }
                    sunrise={ this.state.formattedSunrise }
                  />

          {/* TODO: add label to drop-down */}
                  <City className="dropdown"
                    city={ this.state.city }
                    loadweather={ this.getWeather }
                    error={ this.state.error }
                  />
                </figure>

                <Toggle
                  toggleTemp= { this.switchTemp }
                /> 
              </main>

          </div>
        );
      }
}

export default App;


