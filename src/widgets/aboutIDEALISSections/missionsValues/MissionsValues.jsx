// MissionsValues.jsx
import React from 'react';
import { Grid } from '@mui/material';
import { TooltipButton } from '../../../features';
import './missionsValues.scss';

export const MissionsValues = () => {
    return (
    <section className="mv-container">
        <h4 className="mv-text">
        МИССИИ И ЦЕННОСТИ
        </h4>

        <div className="mv-lines">
        <TooltipButton
            text="Управление дизайном"
            tooltipText="ОТРАСЛЬ, СОЗРЕВШАЯ ДЛЯ ПЕРЕРЫВА"
            discText="Строительство — одна из наименее цифровизированных отраслей в мире. Наша цель — сократить разрыв между технологическим уровнем отрасли и её потенциалом."
        />

        <TooltipButton
            text="Инновации"
            tooltipText="ОТРАСЛЬ, СОЗРЕВШАЯ ДЛЯ ПЕРЕРЫВА"
            discText="Строительство — одна из наименее цифровизированных отраслей в мире. Наша цель — сократить разрыв между технологическим уровнем отрасли и её потенциалом."
        />

        <Grid container className='third-line'>
            <Grid item >
                <TooltipButton
                    text="План + Контроль"
                    tooltipText="ОТРАСЛЬ, СОЗРЕВШАЯ ДЛЯ ПЕРЕРЫВА"
                    discText="Строительство — одна из наименее цифровизированных отраслей в мире. Наша цель — сократить разрыв между технологическим уровнем отрасли и её потенциалом."
                />
            </Grid>
            <Grid item>
                <TooltipButton
                    text="Защита"
                    tooltipText="ОТРАСЛЬ, СОЗРЕВШАЯ ДЛЯ ПЕРЕРЫВА"
                    discText="Строительство — одна из наименее цифровизированных отраслей в мире. Наша цель — сократить разрыв между технологическим уровнем отрасли и её потенциалом."
                />
            </Grid>
        </Grid>

        <TooltipButton
            text="Развитие"
            tooltipText="ОТРАСЛЬ, СОЗРЕВШАЯ ДЛЯ ПЕРЕРЫВА"
            discText="Строительство — одна из наименее цифровизированных отраслей в мире. Наша цель — сократить разрыв между технологическим уровнем отрасли и её потенциалом."
        />
      </div>
    </section>
  );
};
