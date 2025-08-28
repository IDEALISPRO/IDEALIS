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
      Описание *
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
      <TextFieldController
        name="Square"
        control={control}
        label="Адресс"
        error={errors.address}
      />
      <TextFieldController
        name="Floor"
        control={control}
        label="Площадь"
        error={errors.Square}
      />
      <TextFieldController
        name="Floor"
        control={control}
        label="Этажность"
        error={errors.Floor}
      />
      <TextFieldController
        name="Price"
        control={control}
        label="Цена"
        error={errors.Price}
      />
    </Box>
  </>
);
