import { Accordion, AccordionSummary, AccordionDetails, Typography, Box } from "@mui/material";
import { useState } from "react";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import "./acardion.scss";

export const Acardion = ({ data }) => {
  const [expanded, setExpanded] = useState(null);

  const handleChange = (panelId) => (event, isExpanded) => {
    setExpanded(isExpanded ? panelId : null);
  };

  return (
    <Box
    >
      {data.map(({ id, shag, work, title, description, img }) => (
        <Accordion
          key={id}
          expanded={expanded === id}
          onChange={handleChange(id)}
          sx={{
            borderTop: "1px solid #e0e0e0",
            borderBottom: "1px solid #e0e0e0"
          }}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls={`panel${id}-content`}
            id={`panel${id}-header`}
            className="accordion-summary"
          >
            <Box className="accordion-summary-content">
              <Typography
                sx={{
                  color: expanded === id ? "#000" : "#00000099"
                }}
                className="accordion-summary-content-item">{shag}</Typography>

              <Typography sx={{
                color: expanded === id ? "#000" : "#00000099",
                display: { xs: "none", sm: "block" },
              }} className="accordion-summary-content-item accordion-item">{work}</Typography>


            </Box>
            <Typography sx={{
              color: expanded === id ? "#000" : "#00000099"
            }} className="accordion-summary-content-item">{title}</Typography>

          </AccordionSummary>

          <AccordionDetails
            sx={{
              transition: "margin-top 0.5s ease"
            }}
          >
            <Box className="accordion-details">
              <Box
                sx={{
                  width: "50%",
                  display: "flex",
                  alignItems: "start",
                  justifyContent: "flex-end",

                }}
              >
                <img src={img} alt={title} className="accordion-details-image" />
              </Box>
              <Box sx={{ width: "53%" }}>
                <Typography
                sx={{
                  fontSize: {xs: "14px",  md: "16px"},
               
                }}
                className="accordion-details-description">{description}</Typography>
              </Box>
            </Box>
          </AccordionDetails>
        </Accordion>
      ))}
    </Box>
  );
};
