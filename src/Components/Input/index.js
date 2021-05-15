import React from "react";


const FormInput = ({ handleChange, label, ...otherProps}) => {
    return (
        <div className="input">
            {label && (
                <label>
                    {label}
                </label>
            )}
            <input onChange={handleChange} {...otherProps} />
        </div>
    );
}

export default FormInput