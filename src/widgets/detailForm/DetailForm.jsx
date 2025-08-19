import React, { useState } from "react";
import {
  Box,
  Typography,
  TextField,
  Checkbox,
  FormControlLabel,
  Button,
  Paper,
} from "@mui/material";

export const DetailForm = () => {
  const [checked, setChecked] = useState(false);

  return (
    <Paper
      elevation={0}
      sx={{
        border: "2px solid #163659",
        borderRadius: 12,
        p: { xs: 2, md: 5 },
        maxWidth: 720,
        mx: "auto",
        mt: 4,
        position: "relative",
      }}
    >
      <Typography
        variant="h4"
        align="center"
        sx={{
          fontWeight: 900,
          textTransform: "uppercase",
          mt: 2,
          mb: 0,
          letterSpacing: 0.5,
          lineHeight: 1.1,
        }}
      >
        Хотите приобрести?<br />Напишите нам!
      </Typography>
      <Typography
        align="center"
        sx={{
          mt: 2,
          mb: 3,
          fontSize: 18,
          color: "#163659",
        }}
      >
        Оставьте заявку и мы проконсультируем<br />вас в ближайшее время
      </Typography>
      <Box
        component="form"
        sx={{ display: "flex", flexDirection: "column", gap: 2 }}
      >
        <TextField
          label="Имя"
          variant="standard"
          fullWidth
          InputLabelProps={{ shrink: true }}
        />
        <TextField
          label="Телефон"
          variant="standard"
          fullWidth
          InputLabelProps={{ shrink: true }}
        />
        <TextField
          label="Комментарий"
          variant="standard"
          fullWidth
          InputLabelProps={{ shrink: true }}
        />
        <FormControlLabel
          control={
            <Checkbox
              checked={checked}
              onChange={(e) => setChecked(e.target.checked)}
              sx={{ p: 0.5 }}
            />
          }
          label={
            <Typography sx={{ fontSize: 14, color: "#8A8A8A" }}>
              Я соглашаюсь с политикой конфиденциальности сайта
            </Typography>
          }
          sx={{ mt: 1, mb: 1 }}
        />
        <Button
          variant="contained"
          fullWidth
          sx={{
            bgcolor: "#163659",
            color: "#fff",
            fontWeight: 700,
            fontSize: 20,
            borderRadius: 2,
            mt: 2,
            py: 1.5,
            "&:hover": { bgcolor: "#12294d" },
          }}
        >
          ОТПРАВИТЬ
        </Button>
      </Box>
    </Paper>
  );
};


