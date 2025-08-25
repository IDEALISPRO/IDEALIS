import { Controller } from "react-hook-form";
import { Typography, TextField } from "@mui/material";

export const DescriptionField = ({ control, errors }) => (
  <>
    <Typography
      variant="h2"
      sx={{ fontSize: "28px", fontWeight: 600, mt: "80px" }}
    >
      Описание *
    </Typography>

    <Controller
      name="description"
      control={control}
      render={({ field }) => (
        <TextField
          sx={{
            mt: '15px',
            width: {
              xs: "100%",
              sm: "60%",
            },
          }}
          {...field}
          label="Напишите описание о недвижимосте"
          fullWidth
          error={!!errors.description}
          helperText={errors.description?.message}
        />
      )}
    />
  </>
);
