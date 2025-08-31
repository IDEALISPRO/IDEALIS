import { Box, TextField } from "@mui/material";

export const OwnerContacts = ({ formData, handleChange }) => (
  <Box
    sx={{
      mt: "60px",
      display: "flex",
      flexWrap: "wrap",
      gap: "20px",
      justifyContent: "space-between",
      alignItems: "start",
    }}
  >
    <TextField
      label="ФИО"
      value={formData.userName || ""}
      onChange={(e) => handleChange("userName", e.target.value)}
      sx={{ width: { xs: "100%", sm: "48%" } }}
    />
    <TextField
      label="Телефон"
      value={formData.number || ""}
      onChange={(e) => handleChange("number", e.target.value)}
      sx={{ width: { xs: "100%", sm: "48%" } }}
    />
  </Box>
);
