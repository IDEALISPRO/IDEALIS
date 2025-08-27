import { useEffect, useState } from "react";
import { Grid } from "@mui/material";
import { TooltipButton } from "../../../features";
import "./missionsValues.scss";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useDispatch } from "react-redux";
import { missionValuesGet } from "../../../app/store/reducers/public/about/aboutThunks";
import { useAbout } from "../../../app/store/reducers/public/about/aboutSlice";

export const MissionsValues = () => {
  const isSmall = useMediaQuery("(max-width:655px)");
  const [activeIndex, setActiveIndex] = useState(null);
  const dispatch = useDispatch();
  const { missionValues } = useAbout();

  const handleToggle = (index) => {
    setActiveIndex((prev) => (prev === index ? null : index));
  };

  useEffect(() => {
    dispatch(missionValuesGet());
  }, [dispatch]);

  return (
    <section className="mv-container">
      <h4 className="mv-text">МИССИИ И ЦЕННОСТИ</h4>

      <div className="mv-lines">
        {missionValues.slice(0, 2).map((mission, index) => (
          <TooltipButton
            key={index}
            text={mission.title}
            allText={mission.description}
            tooltipText={mission.tooltip}
            trigger={isSmall ? "click" : "hover"}
            isActive={activeIndex === index}
            onToggle={() => handleToggle(index)}
          />
        ))}

        <Grid container className="third-line">
          {missionValues.slice(2, 4).map((mission, index) => {
            const realIndex = index + 2;
            return (
              <Grid item key={index} className={isSmall ? "mobille-line" : ""}>
                <TooltipButton
                  text={mission.title}
                  allText={mission.description}
                  tooltipText={mission.tooltip}
                  trigger={isSmall ? "click" : "hover"}
                  isActive={activeIndex === realIndex}
                  onToggle={() => handleToggle(realIndex)}
                />
              </Grid>
            );
          })}
        </Grid>

        {missionValues[4] && (
          <TooltipButton
            text={values[4].title}
            allText={values[4].description}
            tooltipText={values[4].tooltip}
            trigger={isSmall ? "click" : "hover"}
            isActive={activeIndex === 4}
            onToggle={() => handleToggle(4)}
          />
        )}
      </div>
    </section>
  );
};
