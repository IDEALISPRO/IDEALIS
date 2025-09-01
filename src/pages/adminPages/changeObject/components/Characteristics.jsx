import { Box, Typography, TextField, MenuItem } from "@mui/material";
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

export const Characteristics = ({ formData, handleChange }) => (
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
        <TextField
          key={field.name}
          select
          label={field.label}
          value={formData[field.name] || ""}
          onChange={(e) => handleChange(field.name, e.target.value)}
          sx={{
            width: {
              xs: "100%",
              sm: "48%",
              md: "48%",
              lg: "32%",
            },
          }}
        >
          {field.options.map((option) => (
            <MenuItem key={option} value={option}>
              {option}
            </MenuItem>
          ))}
        </TextField>
      ))}

      <TextField
        label="Площадь"
        type="number"
        value={formData.area_m2 || ""}
        onChange={(e) => handleChange("area_m2", e.target.value)}
        sx={{ width: { xs: "50%", sm: "32%" } }}
      />

      <TextField
        select
        label="Вид платежа"
        value={formData.TypePayment || ""}
        onChange={(e) => handleChange("TypePayment", e.target.value)}
        sx={{ width: { xs: "100%", sm: "49%" } }}
      >
        {["Наличные", "Безналичные", "Ипотека"].map((option) => (
          <MenuItem key={option} value={option}>
            {option}
          </MenuItem>
        ))}
      </TextField>

      <TextField
        select
        label="Статус объекта"
        name="status"
        value={formData.ObjectStatus || ""}
        onChange={(e) => handleChange("ObjectStatus", e.target.value)}
        sx={{ width: { xs: "100%", sm: "49%" } }}
      >
        {objectStatusOptions.map((option) => (
          <MenuItem key={option.value} value={option.value}>
            {option.label}
          </MenuItem>
        ))}
      </TextField>

      <TextField
        label="Общая цена"
        type="number"
        value={formData.price || ""}
        onChange={(e) => handleChange("price", e.target.value)}
        sx={{ width: { xs: "100%", sm: "49%" } }}
      />

      <TextField
        label="Цена на руки"
        type="number"
        value={formData.allPrice || ""}
        onChange={(e) => handleChange("typepayment", e.target.value)}
        sx={{ width: { xs: "100%", sm: "49%" } }}
      />
    </Box>
  </>
);
