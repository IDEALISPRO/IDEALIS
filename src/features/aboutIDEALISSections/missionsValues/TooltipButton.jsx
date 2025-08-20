import React, { useState } from 'react';
import './tooltipButton.scss';
import { Grid } from '@mui/material'
import { Link } from 'react-router-dom'


export const TooltipButton = ({ text, tooltipText, discText }) => {
    const [isHovered, setIsHovered] = useState(false);

    return (
    <div
        className="tooltip-container"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
    >
    <button className={`tooltip-button ${isHovered ? 'tooltip-hover' : ''}`}>
        {text}
    </button>

    {isHovered && (
        <Grid className="tooltip-info">
            <h6 className="main-text">{tooltipText}</h6>
            <p className="disc-text">{discText}</p>
            <Link className="link-text">Узнать больше</Link>
        </Grid>
    )}
    </div>
    );
};

