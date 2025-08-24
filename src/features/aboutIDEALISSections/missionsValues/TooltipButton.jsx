import React from 'react';
import './tooltipButton.scss';
import { Grid } from '@mui/material';
import { Link } from 'react-router-dom';

export const TooltipButton = ({ 
  text, 
  tooltipText, 
  discText, 
  trigger = "hover",
  isActive,
  onToggle
}) => {



  const handleMouseEnter = () => {
    if (trigger === "hover") onToggle();
  };

  const handleMouseLeave = () => {
    if (trigger === "hover") onToggle();
  };

  const handleClick = () => {
    if (trigger === "click") onToggle();
  };

  return (
    <div
      className="tooltip-container"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={handleClick}
    >
      <button
        className={`tooltip-button ${isActive ? 'tooltip-hover' : ''} special-button`}
      >
        {text}
      </button>

      {isActive && (
        <Grid className={`tooltip-info ${trigger === "click" ? "tooltip-mobile" : ""}`}>
          <h6 className="main-text">{tooltipText}</h6>
          <p className="disc-text">{discText}</p>
          <Link className="link-text">Узнать больше</Link>
        </Grid>
      )}
    </div>
  );
};
