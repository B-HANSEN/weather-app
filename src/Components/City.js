import React from 'react';
import Select from 'react-select';

const options = [
    { value: 'Lisbon', label: 'Lisbon' },
    { value: 'New York', label: 'New York' },
    { value: 'London', label: 'London' },
];


class City extends React.Component {
    state = { 
        selectedOption: null
    };

    componentDidMount() {
        this.props.loadweather(options[0].value);
    }

    selectedOption = (option) => {  
    this.props.loadweather(option.value);
    }

        render() {
            const { selectedValue } = this.state;

            return (
                    <Select
                        value={ selectedValue }
                        label={ this.state.label }
                        options={ options }   
                        defaultValue={{ value: 'Lisbon', label: 'Lisbon' }}
                        onChange={ this.selectedOption }  
                    />
            );
        }
}

export default City