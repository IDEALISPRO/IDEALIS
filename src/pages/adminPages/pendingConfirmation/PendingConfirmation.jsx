import { Box } from "@mui/material";
import { AdFreeCard } from "../../../features";

export const PendingConfirmation = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: "60px",
        mt: "40px",
      }}
      className="container"
    >
      <AdFreeCard />
      <AdFreeCard />
      <AdFreeCard />
      <AdFreeCard />
    </Box>
  );
};
