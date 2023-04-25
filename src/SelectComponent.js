import React, { useState } from "react";

const SelectComponent = ({
    options,
    placeholder = "",
    onChange,
    selectedKey,
    open,
    setOpen,
    label
}) => {
    const[inputValue, setInputValue] = useState("");

    const onInputChange = (e) => {
        setInputValue(e.target.value);
    }

    const onItemSelected = (option) => {
        onChange !== undefined && onChange(option.key);
        onChange !== undefined && setInputValue(option.value);
        setOpen(false);
    }

    return (
        <div>
            <div>
            <label>{label}</label>
                <input 
                    type="text"
                    value={inputValue}
                    placeholder={placeholder}
                    onChange={onInputChange}
                />    
            </div>
            <div>
                {options.map(opt =>{
                    return (
                    <div key={opt.key}
                        onClick={() => onItemSelected(opt)}>
                        {opt.value}
                    </div>   
                    ); 
                })}
            </div>
        </div>
    );
};

export default SelectComponent;