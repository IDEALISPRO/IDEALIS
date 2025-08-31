import { Box, Typography } from "@mui/material";
import { SelectField } from "./SelectField";
import { TextFieldController } from "./TextFieldController";
import { characteristics } from "../fields";

export const Characteristics = ({ control, errors }) => (
  <>
    <Typography
      variant="h2"
      sx={{ fontSize: "28px", fontWeight: 600, mt: "80px" }}
    >
      Состояние и характеристики *
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
      {characteristics.map((field) => (
        <SelectField
          key={field.name}
          name={field.name}
          control={control}
          label={field.label}
          options={field.options}
          error={errors[field.name]}
          sx={{
            width: {
              xs: "100%",
              sm: "48%",
              md: "48%",
              lg: "32%",
            },
          }}
        />
      ))}

      <TextFieldController
        name="area_m2"
        control={control}
        label="полшадь"
        sx={{
          width: {
            xs: "50%",
            sm: "32%",
          },
        }}
      />

      <SelectField
        name="TypePayment"
        control={control}
        label="Вид платежа"
        options={["Наличные", "Безналичные", "Ипотека"]}
        error={errors.TypePayment}
        sx={{
          width: {
            xs: "100%",
            sm: "49%",
          },
        }}
      />
      <SelectField
        name="ObjectStatus"
        control={control}
        label="Статус объекта"
        options={["Сдан", "На стадии строительства"]}
        error={errors.ObjectStatus}
        sx={{
          width: {
            xs: "100%",
            sm: "49%",
          },
        }}
      />

      <TextFieldController
        name="price"
        control={control}
        label="Общая цена"
        error={errors.price}
        sx={{
          width: {
            xs: "100%",
            sm: "49%",
          },
        }}
      />
      <TextFieldController
        name="allPrice"
        control={control}
        label="Цена на руки"
        error={errors.allPrice}
        sx={{
          width: {
            xs: "100%",
            sm: "49%",
          },
        }}
      />
    </Box>
  </>
);
