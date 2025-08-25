// src/entities/createObjectForms/components/TextFieldController.jsx
import { Controller } from "react-hook-form";
import { TextField } from "@mui/material";

export const TextFieldController = ({
  name,
  control,
  label,
  error,
  sx = { width: { xs: "100%", sm: "49%" } },
}) => (
  <Controller
    name={name}
    control={control}
    render={({ field }) => (
      <TextField
        {...field}
        label={label}
        sx={sx}
        fullWidth
        error={!!error}
        helperText={error?.message}
      />
    )}
  />
);
