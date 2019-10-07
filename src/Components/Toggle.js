import React from 'react';
import './styles/toggle.css';

class Toggle extends React.Component {
toggleUnit() {}

    render () {

        return (

            <div className="temp">

                <h4>ºC</h4>

                <label className="switch">
                    <input type="checkbox"
                    onChange="toggleUnit()"
                     />
                    <span className="slider round"></span>
                </label>

                <h4>ºF</h4>
        

            </div>

        )   
    }
}

{/* <div className='buttons'>
<div className='btn'>
  {props.tempSymbol === 'C' ?
    <button className='clicked'>C</button>
    :
    <button onClick={props.setTempSymbol}>C</button>
  }
  <p>Celsius</p>
</div> */}

export default Toggle


