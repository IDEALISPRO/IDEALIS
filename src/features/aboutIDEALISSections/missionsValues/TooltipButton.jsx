import "./tooltipButton.scss";
import { Grid } from "@mui/material";

export const TooltipButton = ({
  text,
  allText,
  trigger = "hover",
  isActive,
  link,
  onToggle,
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
        className={`tooltip-button ${isActive ? "tooltip-hover" : ""} special-button`}
      >
        {text}
      </button>

      {isActive && (
        <Grid
          className={`tooltip-info ${trigger === "click" ? "tooltip-mobile" : ""}`}
        >
          <p
            dangerouslySetInnerHTML={{
              __html:
                allText.length > 370 ? allText.slice(0, 370) + "..." : allText,
            }}
          ></p>
          <a className="link-text" href={link} target="_blank">
            Узнать больше
          </a>
        </Grid>
      )}
    </div>
  );
};
