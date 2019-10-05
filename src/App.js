import React from 'react';
import Toggle from './Components/Toggle'
import Icon from './Components/Icon'
import Time from './Components/Time'
import City from './Components/City'
import './App.css';

const Api_Key = "c1d79600e28a5b4a4ef959688dfa55d3";


class App extends React.Component {
  constructor() {
    super();
    this.state = {
      city: undefined,
      icon: undefined,
      main: undefined,
      celsius: undefined,
      fahrenheit: undefined,
      sunset: null,
      sunrise: null,
      description: "",
      error: false
    };

    this.weatherIcon = {
      Thunderstorm: "wi-thunderstorm",
      Drizzle: "wi-sleet",
      Rain: "wi-storm-showers",
      Snow: "wi-snow",
      Atmosphere: "wi-fog",
      Clear: "wi-day-sunny",
      Clouds: "wi-day-fog"
    };
  }

get_WeatherIcon(icons, rangeId) {
  switch (true) {
    case rangeId >= 200 && rangeId < 232:
      this.setState({ icon: icons.Thunderstorm });
      break;
    case rangeId >= 300 && rangeId <= 321:
      this.setState({ icon: icons.Drizzle });
      break;
    case rangeId >= 500 && rangeId <= 521:
      this.setState({ icon: icons.Rain });
      break;
    case rangeId >= 600 && rangeId <= 622:
      this.setState({ icon: icons.Snow });
      break;
    case rangeId >= 701 && rangeId <= 781:
      this.setState({ icon: icons.Atmosphere });
      break;
    case rangeId === 800:
      this.setState({ icon: icons.Clear });
      break;
    case rangeId >= 801 && rangeId <= 804:
      this.setState({ icon: icons.Clouds });
      break;
    default:
      this.setState({ icon: icons.Clouds });
  }
}

calCelsius(temp) {
  let cell = Math.floor(temp - 273.15);
  return cell;
}

calFahrenheit(cell) {
  let fahrenheit = Math.floor(9/5 * cell + 32);
  return fahrenheit;
}

// handleInput = (e) => {
//   console.log(e.target.value)
//   this.setState({ searchfield: e.target.value })
// }



getWeather = async (e, city) => {
    e.preventDefault();
    // const city = e.target.elements.city.value;
    city = e.target.value;

    const api_call = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${Api_Key}`)
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
      error: false
    });

    // setting icons
    this.get_WeatherIcon(this.weatherIcon, response.weather[0].id);

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
                  <Icon 
                    weatherIcon={this.state.icon}
                    temp_celsius={this.state.celsius}
                    description={this.state.description}
                  />
                
                  <Time
                    sunset={this.state.sunset}
                    sunrise={this.state.sunrise}
                  />

                  <City
                    cityname={this.state.city}
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