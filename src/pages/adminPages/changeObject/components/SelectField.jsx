  import { Controller } from "react-hook-form";
  import {
    FormControl,
    InputLabel,
    Select,
    MenuItem,
    FormHelperText,
  } from "@mui/material";

  export const SelectField = ({
    name,
    control,
    label,
    options,
    error,
    sx = {
      width: {
        xs: "100%",
        sm: "48%",
        md: "48%",
        lg: "32%",
      },
    },
  }) => (
    <Controller
      name={name}
      control={control}
      render={({ field }) => (
        <FormControl fullWidth margin="0" error={!!error} sx={sx}>
          <InputLabel>{label}</InputLabel>
          <Select {...field} label={label}>
            {options.map((option, i) => (
              <MenuItem key={i} value={option}>
                {option}
              </MenuItem>
            ))}
          </Select>
          <FormHelperText>{error?.message}</FormHelperText>
        </FormControl>
      )}
    />
  );
