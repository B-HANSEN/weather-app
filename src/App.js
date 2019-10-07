import React from 'react';
import Toggle from './Components/Toggle'
// import Icon from './Components/Icon'
import Time from './Components/Time'
import City from './Components/City'
import './App.css';

const Api_Key = "c1d79600e28a5b4a4ef959688dfa55d3";

class App extends React.Component {
   state = {
      city: undefined,
      icon: undefined,
      main: undefined,
      celsius: undefined,
      fahrenheit: undefined,
      sunset: null,
      sunrise: null,
      description: "",
      error: false,
      selectedOption: null
    };

calCelsius(temp) {
  let cell = Math.floor(temp - 273.15);
  return cell;
}

calFahrenheit(cell) {
  let fahrenheit = Math.floor(9/5 * cell + 32);
  return fahrenheit;
}

getWeather = async (selectedOption) => {

    const api_call = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${selectedOption}&appid=${Api_Key}`)
    // http://api.openweathermap.org/data/2.5/weather?q=Lisbon&appid=c1d79600e28a5b4a4ef959688dfa55d3

    const response = await api_call.json();
    console.log(response);

    this.setState({
      city: `${response.name}`,
      main: response.weather[0].main,
      celsius: this.calCelsius(response.main.temp),
      fahrenheit: this.calFahrenheit(response.main.temp),
      sunset: response.sys.sunset,
      sunrise: response.sys.sunrise,
      description: response.weather[0].description,
      error: false,
      icon : response.weather[0].icon
    });

    console.log(response);
};

      render () {
        return (
          <div className="App">
              <header className="App-header">
                <h3>Awesome Weather App</h3>
              </header>      

              <main>
                <figure>
                  
                  <img src={`https://openweathermap.org/img/wn/${this.state.icon}.png`} />

                  <Time
                    sunset={this.state.sunset}
                    sunrise={this.state.sunrise}
                  />

                  <City className="dropdown"
                    city={this.state.city}
                    loadweather={this.getWeather}
                    error={this.state.error}
                  />
                </figure>

                <Toggle /> 
              </main>

          </div>
        );
      }
}

export default App;