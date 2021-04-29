import React from 'react';

function InputField(props) {

    return (
        <form className="form">
            <input
                placeholder="Add an item..."
                type="text"
                className="form__input"
                id="input-field" />
            <button className="form__btn" onClick={props.addItem}>+</button>
        </form>);
}

export default InputField