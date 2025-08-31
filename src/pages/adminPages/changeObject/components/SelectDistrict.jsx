import {
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  FormHelperText,
} from "@mui/material";

export const SelectDistrict = ({
  name,
  label,
  options,
  value,
  onChange,
  error,
  sx,
}) => (
  <FormControl fullWidth margin="0" error={!!error} sx={sx}>
    <InputLabel>{label}</InputLabel>
    <Select
      value={value || ""}
      label={label}
      onChange={(e) => onChange(name, e.target.value)}
    >
      {options.map((option, i) => (
        <MenuItem key={i} value={option.value}>
          {option.label}
        </MenuItem>
      ))}
    </Select>
    <FormHelperText>{error || ""}</FormHelperText>
  </FormControl>
);
