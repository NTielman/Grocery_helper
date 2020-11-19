import React from 'react';

function InputField(props) {
    return (
        <div className="text-input-container">
            <input
                placeholder="Add an item..."
                type="text"
                id="input-field" />
            <button className="btn add-btn" onClick={props.addItem}>+</button>
        </div>);
}

export default InputField 