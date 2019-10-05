import React from 'react';
import './styles/toggle.css';


class Toggle extends React.Component {

    render () {

        return (

            <div>

                <label className="switch">
                    <input type="checkbox" />
                    <span className="slider round"></span>
                </label>
        

            </div>

        )
    }
}


export default Toggle