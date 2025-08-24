import { Box } from "@mui/material";
import { TextFieldController } from "./TextFieldController";

export const OwnerContacts = ({ control, errors }) => (
  <Box
    sx={{
      mt: "60px",
      display: "flex",
      flexWrap: "wrap",
      gap: "20px",
      justifyContent: "space-between",
      alignItems: "start",
    }}
  >
    <TextFieldController
      name="userName"
      control={control}
      label="ФИО"
      error={errors.userName}
    />
    <TextFieldController
      name="number"
      control={control}
      label="Телефон"
      error={errors.number}
    />
  </Box>
);
