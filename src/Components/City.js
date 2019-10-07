import React from 'react';
import Select from 'react-select';
import './styles/city.css';

const options = [
    { value: 'Lisbon', label: 'Lisbon' },
    { value: 'New York', label: 'New York' },
    { value: 'London', label: 'London' },
];


class City extends React.Component {
    state = { 
        selectedOption: null     
    };

    selectedOption = (option) => {   
        this.props.loadweather(option.value);
    }

        render() {
            const { selectedOption } = this.state;

            return (
                    <Select
                        value={selectedOption}
                        onChange={this.selectedOption}
                        options={options}
                    />
            );
        }
}

export default City