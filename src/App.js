import React from 'react';
import Toggle from './Components/Toggle'
import Icon from './Components/Icon'
import Time from './Components/Time'
import Button from './Components/Button'
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">

      <h3>Awesome Weather App</h3>
      </header>

      <main>
     
      <figure>
        <Icon />

        <Toggle />
      </figure>

      <Icon />

      <Time />
      <Button />

      </main>


    </div>
  );
}

export default App;