import React, { useState } from 'react';
import { Grid } from '@mui/material';
import { TooltipButton } from '../../../features';
import './missionsValues.scss';
import useMediaQuery from "@mui/material/useMediaQuery";

export const MissionsValues = () => {
  const isSmall = useMediaQuery("(max-width:655px)");
  const [activeIndex, setActiveIndex] = useState(null);

  const handleToggle = (index) => {
    setActiveIndex((prev) => (prev === index ? null : index)); 
  };

  return (
    <section className="mv-container">
      <h4 className="mv-text">
        МИССИИ И ЦЕННОСТИ
      </h4>

      <div className="mv-lines">
        <TooltipButton
          text="Управление дизайном"
          tooltipText="ОТРАСЛЬ, СОЗРЕВШАЯ ДЛЯ ПЕРЕРЫВА"
          discText="888Строительство — одна из наименее цифровизированных отраслей в мире. Наша цель — сократить разрыв между технологическим уровнем отрасли и её потенциалом."
          trigger={isSmall ? "click" : "hover"}
          isActive={activeIndex === 0}
          onToggle={() => handleToggle(0)}
        />

        <TooltipButton
          text="Инновации"
          tooltipText="ОТРАСЛЬ, СОЗРЕВШАЯ ДЛЯ ПЕРЕРЫВА"
          discText="777Строительство — одна из наименее цифровизированных отраслей в мире. Наша цель — сократить разрыв между технологическим уровнем отрасли и её потенциалом."
          trigger={isSmall ? "click" : "hover"}
          isActive={activeIndex === 1}
          onToggle={() => handleToggle(1)}
        />

        {isSmall ? (
          <>
            <Grid container className="third-line">
              <Grid item className="mobille-line">
                <TooltipButton
                  text="Развитие"
                  tooltipText="ОТРАСЛЬ, СОЗРЕВШАЯ ДЛЯ ПЕРЕРЫВА"
                  discText="666Строительство — одна из наименее цифровизированных отраслей в мире. Наша цель — сократить разрыв между технологическим уровнем отрасли и её потенциалом."
                  trigger="click"
                  isActive={activeIndex === 2}
                  onToggle={() => handleToggle(2)}
                />
              </Grid>
              <Grid item className="mobile-line">
                <TooltipButton
                  text="Защита"
                  tooltipText="ОТРАСЛЬ, СОЗРЕВШАЯ ДЛЯ ПЕРЕРЫВА"
                  discText="555Строительство — одна из наименее цифровизированных отраслей в мире. Наша цель — сократить разрыв между технологическим уровнем отрасли и её потенциалом."
                  trigger="click"
                  isActive={activeIndex === 3}
                  onToggle={() => handleToggle(3)}
                />
              </Grid>
            </Grid>

            <TooltipButton
              text="План + Контроль"
              tooltipText="ОТРАСЛЬ, СОЗРЕВШАЯ ДЛЯ ПЕРЕРЫВА"
              discText="444Строительство — одна из наименее цифровизированных отраслей в мире. Наша цель — сократить разрыв между технологическим уровнем отрасли и её потенциалом."
              trigger="click"
              isActive={activeIndex === 4}
              onToggle={() => handleToggle(4)}
            />
          </>
        ) : (
          <>
            <Grid container className="third-line">
              <Grid item>
                <TooltipButton
                  text="План + Контроль"
                  tooltipText="ОТРАСЛЬ, СОЗРЕВШАЯ ДЛЯ ПЕРЕРЫВА"
                  discText="333Строительство — одна из наименее цифровизированных отраслей в мире. Наша цель — сократить разрыв между технологическим уровнем отрасли и её потенциалом."
                  trigger="hover"
                  isActive={activeIndex === 5}
                  onToggle={() => handleToggle(5)}
                />
              </Grid>
              <Grid item>
                <TooltipButton
                  text="Защита"
                  tooltipText="ОТРАСЛЬ, СОЗРЕВШАЯ ДЛЯ ПЕРЕРЫВА"
                  discText="222Строительство — одна из наименее цифровизированных отраслей в мире. Наша цель — сократить разрыв между технологическим уровнем отрасли и её потенциалом."
                  trigger="hover"
                  isActive={activeIndex === 6}
                  onToggle={() => handleToggle(6)}
                />
              </Grid>
            </Grid>

            <TooltipButton
              text="Развитие"
              tooltipText="ОТРАСЛЬ, СОЗРЕВШАЯ ДЛЯ ПЕРЕРЫВА"
              discText="111Строительство — одна из наименее цифровизированных отраслей в мире. Наша цель — сократить разрыв между технологическим уровнем отрасли и её потенциалом."
              trigger="hover"
              isActive={activeIndex === 7}
              onToggle={() => handleToggle(7)}
            />
          </>
        )}
      </div>
    </section>
  );
};
