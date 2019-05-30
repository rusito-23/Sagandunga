import React from 'react';
import './Dropdown.scss';

export default ({onChange, name, options}) => {
    return (
        <select
            onChange={onChange}
            name={name}
            className={'Dropdown'}>
            {options.map((item) => (
                <option
                    key={item.key}
                    className={'Dropdown-option'}
                    value={item.value}>
                    {item.value}
                </option>
            ))}
        </select>
    )
};
