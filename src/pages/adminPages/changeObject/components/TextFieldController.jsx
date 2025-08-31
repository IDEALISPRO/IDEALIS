import { TextField } from "@mui/material";

export const TextFieldController = ({
  name,
  label,
  value,
  onChange,
  error,
  sx = { width: { xs: "100%", sm: "49%" } },
}) => (
  <TextField
    name={name}
    label={label}
    value={value || ""}
    onChange={(e) => onChange(name, e.target.value)}
    sx={sx}
    fullWidth
    error={!!error}
    helperText={error || ""}
  />
);
