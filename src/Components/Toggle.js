import React from 'react';
import './styles/toggle.css';


class Toggle extends React.Component {

    render () {

        return (

            <div className="temp">

                <h4>ºC</h4>
                <label className="switch">
                    <input type="checkbox" />
                    <span className="slider round"></span>
                </label>
                <h4>ºF</h4>
        

            </div>

        )
    }
}


export default Toggle