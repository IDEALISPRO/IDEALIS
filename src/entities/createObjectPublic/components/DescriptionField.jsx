import { Controller } from "react-hook-form";
import { Typography, TextField, Checkbox, Box } from "@mui/material";
const label = { inputProps: { "aria-label": "Checkbox demo" } };

export const DescriptionField = ({ control, errors }) => (
  <>
    <Typography
      variant="h2"
      sx={{ fontSize: "28px", fontWeight: 600, mt: "80px" }}
    >
      О вас *
    </Typography>

    <Box
      sx={{
        display: "grid",
        gridTemplateColumns: { xs: "1fr ", sm: "repeat(2, 1fr)" },
        gap: "20px",
      }}
    >
      <Controller
        name="description"
        control={control}
        render={({ field }) => (
          <TextField
            sx={{
              mt: "15px",
              width: "100%",
            }}
            {...field}
            label="Напишите описание о недвижимосте"
            fullWidth
            error={!!errors.description}
            helperText={errors.description?.message}
          />
        )}
      />

      <Box
        className="form-box box"
        sx={{
          width: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          border: "1px solid #ccc",
          padding: '0 16px',
          borderRadius: '8px',
          mt: '14px'
        }}
      >
        <Typography variant="body1">
          Срочно{" "}
          <span style={{ fontSize: "20", color: "#00000099" }}>(платно)</span>
        </Typography>
        <Checkbox {...label} />
      </Box>
    </Box>
  </>
);
