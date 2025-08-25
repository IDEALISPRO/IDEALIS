import { Box, Typography } from "@mui/material";
import { SelectField } from "./SelectField";
import { TextFieldController } from "./TextFieldController";
import { selectFields } from "../fields";

export const FormFields = ({ control, errors }) => (
  <>
    <Typography
      variant="h2"
      sx={{ fontSize: "28px", fontWeight: 600, mt: "80px" }}
    >
      Заполнение формы *
    </Typography>
    <Box
      sx={{
        mt: "15px",
        display: "flex",
        flexWrap: "wrap",
        gap: "20px",
        justifyContent: "space-between",
        alignItems: "start",
      }}
    >
      {selectFields.map((field) => (
        <SelectField
          key={field.name}
          name={field.name}
          control={control}
          label={field.label}
          options={field.options}
          error={errors[field.name]}
        />
      ))}

      <TextFieldController
        name="Floor"
        control={control}
        label="Этаж"
        error={errors.Floor}
      />
      <TextFieldController
        name="IntersectionStreets"
        control={control}
        label="Пересечение улиц"
        error={errors.IntersectionStreets}
      />
    </Box>
  </>
);
