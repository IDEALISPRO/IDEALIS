import React, { useState } from 'react';
import './tooltipButton.scss';


export const TooltipButton = ({ text, tooltipText, discText }) => {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <div className="tooltip-container">
            <button
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            >
            {text}
            {isHovered && (
                <div className="tooltip-info">
                    <h5 className='main-text'>{tooltipText}</h5>
                    <p className='disc-text'>{discText}</p>
                    <a className='link-text'>Узнать больше</a>
                </div>
            )}
            </button>
        </div>
    );
};

