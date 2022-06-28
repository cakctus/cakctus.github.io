import React from 'react';


const Select = ({options, defaultValue, value, onChange}) => {
    return (
        <select 
        value={value}
        onChange={event => onChange(event.target.value)}
        >
            <option disabled>{defaultValue}</option>
            {
            options.map(option => 
                <option value={option.value} key={option.value}>
                    {option.name} 
                </option>
            )}
        </select>
    );
}

export default Select;
