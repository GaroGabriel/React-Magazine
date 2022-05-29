import React from 'react';
import './button.scss'

const BUTTON_TYPE_CLASSES = {
    google:'button__google',
    inverted:'button__inverted',
}

const Button = ({children,buttonType,...otherProps}) => {
    return (
        <button
            className={`button ${BUTTON_TYPE_CLASSES[buttonType]}`}
            {...otherProps}
        >
            {children}
        </button>
    );
};

export default Button;
