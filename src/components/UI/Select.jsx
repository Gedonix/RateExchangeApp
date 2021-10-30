import React from 'react';

const Select = ({value, onChange, options, cssc}) => {
    return (
        <select className={cssc} value={value} onChange={event => onChange(event.target.value)}>
            <option disabled value="">Выберите валюту</option>                
            {options.map(option =>
                <option key={option.value} value={option.value}>{option.name}</option>
            )}
        </select>
    );
}

export default Select;
