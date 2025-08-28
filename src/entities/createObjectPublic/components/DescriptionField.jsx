import { Controller } from "react-hook-form";
import { Typography, TextField, FormControlLabel, Checkbox } from "@mui/material";

export const DescriptionField = ({ control, errors }) => (
  <>
    <Typography
      variant="h2"
      sx={{ fontSize: "28px", fontWeight: 600, mt: "80px" }}
    >
      О вас *
    </Typography>

    <Controller
      name="agreement"
      control={control}
      render={({ field }) => (
        <FormControlLabel
          control={<Checkbox {...field} checked={field.value || false} />}
          label="Согласен с условиями"
        />
      )}
    />
  </>
);
