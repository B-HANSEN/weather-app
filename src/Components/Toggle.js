import React from 'react';
import './styles/toggle.css';


class Toggle extends React.Component {
    state = {
        checked: false
    };

    selectedUnit = () => {    
        this.setState({ checked: !this.state.checked });
        this.props.toggleTemp(this.state.checked);
    }

    render () {
        return (

            <div className="temp">

                <h4>ºC</h4>

                <label className="switch">
                    <input
                        type="checkbox"
                        onClick={ this.selectedUnit }
                    />
                    <span className="slider round"></span>
                </label>

                <h4>ºF</h4>
        
            </div>

        )   
    }
}

export default Toggle