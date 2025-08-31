import { Typography, TextField } from "@mui/material";

export const DescriptionField = ({ value, onChange }) => (
  <>
    <Typography
      variant="h2"
      sx={{ fontSize: "28px", fontWeight: 600, mt: "80px" }}
    >
      Описание *
    </Typography>

    <TextField
      sx={{
        mt: "15px",
        width: {
          xs: "100%",
          sm: "60%",
        },
      }}
      label="Напишите описание о недвижимости"
      fullWidth
      value={value}
      onChange={(e) => onChange(e.target.value)}
      rows={2}
    />
  </>
);
