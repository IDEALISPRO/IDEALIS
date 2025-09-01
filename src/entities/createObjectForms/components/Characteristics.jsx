import { Box, Typography, MenuItem, TextField } from "@mui/material";
import { SelectField } from "./SelectField";
import { TextFieldController } from "./TextFieldController";
import { Controller } from "react-hook-form";
import { characteristics } from "../fields";

const objectStatusOptions = [
  { value: "draft", label: "Черновик" },
  { value: "no_ads", label: "Без рекламы" },
  { value: "ad_requested", label: "Заявка на рекламу" },
  { value: "pending", label: "Ожидает подтверждения" },
  { value: "published", label: "Опубликовано" },
  { value: "deleted", label: "Удалено" },
  { value: "sold", label: "Продано" },
  { value: "in_process", label: "В работе" },
];

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
        name="Square"
        control={control}
        label="Площадь"
        sx={{
          width: {
            xs: "100%",
            sm: "48%",
            md: "48%",
            lg: "32%",
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

      {/* Используем Controller вместо formData и handleChange */}
      <Controller
        name="ObjectStatus"
        control={control}
        render={({ field }) => (
          <TextField
            select
            label="Статус объекта"
            {...field}
            error={!!errors.ObjectStatus}
            helperText={errors.ObjectStatus?.message}
            sx={{ width: { xs: "100%", sm: "49%" } }}
          >
            {objectStatusOptions.map((option) => (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
          </TextField>
        )}
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
