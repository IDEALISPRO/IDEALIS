import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
  Box,
} from "@mui/material";
import { useState } from "react";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import "./acardion.scss";
import { useLocation } from "react-router-dom";

export const Acardion = ({ data }) => {
  const [expanded, setExpanded] = useState(null);
  const { pathname } = useLocation();
  console.log(data);

  const handleChange = (panelId) => (event, isExpanded) => {
    setExpanded(isExpanded ? panelId : null);
  };

  return (
    <Box>
      {data.map((item) => (
        <Accordion
          key={item.id}
          expanded={expanded === item.id}
          onChange={handleChange(item.id)}
          sx={{
            borderTop: "2px solid #e0e0e0",
            boxShadow: "none",
            borderBottom: "2px solid #e0e0e0",
          }}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls={`panel${item.id}-content`}
            id={`panel${item.id}-header`}
            className="accordion-summary"
          >
            <Box className="accordion-summary-content">
              <Typography
                sx={{
                  color: expanded === item.id ? "#000" : "#00000099",
                }}
                className="accordion-summary-content-item"
              >
                {item.step}
              </Typography>

              <Typography
                sx={{
                  color: expanded === item.id ? "#000" : "#00000099",
                  display: { xs: "none", sm: "block" },
                }}
                className="accordion-summary-content-item accordion-item"
              >
                {pathname === "/news" ? item.useful_tips : item.service_name}
              </Typography>
            </Box>
            <Typography
              sx={{
                color: expanded === item.id ? "#000" : "#00000099",
              }}
              className="accordion-summary-content-item"
              dangerouslySetInnerHTML={{ __html: item.description }}
            ></Typography>
          </AccordionSummary>

          <AccordionDetails
            sx={{
              transition: "margin-top 0.5s ease",
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
                <img
                  src={item.image}
                  alt={item.description}
                  className="accordion-details-image"
                />
              </Box>
              <Box sx={{ width: "53%" }}>
                <Typography
                  sx={{
                    fontSize: { xs: "14px", md: "16px" },
                  }}
                  className="accordion-details-description"
                  dangerouslySetInnerHTML={{
                    __html: item.description,
                  }}
                ></Typography>
              </Box>
            </Box>
          </AccordionDetails>
        </Accordion>
      ))}
    </Box>
  );
};
