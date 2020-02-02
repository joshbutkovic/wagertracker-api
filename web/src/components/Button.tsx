import React from 'react';

interface ButtonProps {
    classes?: string;
    onClick: () => void;
}

function Button({ classes, onClick }: ButtonProps) {
    const buttonClasses = `button${classes ? ` ${classes}` : ''}`;
    return (
        <button onClick={onClick} className={buttonClasses}>
            Button
        </button>
    );
}

export default Button;
