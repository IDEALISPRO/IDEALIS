import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { TextField, Button, MenuItem, Box, Typography } from "@mui/material";
import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";

const schema = yup.object().shape({
  email: yup.string().email("Некорректный email").required("Введите email"),
  password: yup
    .string()
    .min(6, "Минимум 6 символов")
    .required("Введите пароль"),
  role: yup.string().oneOf(["admin", "manager"], "Выберите роль").required(),
});

export const Login = () => {
  const navigate = useNavigate();

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
    defaultValues: { email: "", password: "", role: "" },
  });

  const onSubmit = (data) => {
    Cookies.set("token", "fake-jwt-token", { expires: 1 });
    Cookies.set("role", data.role, { expires: 1 });

    navigate("/admin/published");
  };
  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      minHeight="100vh"
      bgcolor="#f9f9f9"
    >
      <Box
        component="form"
        onSubmit={handleSubmit(onSubmit)}
        sx={{
          p: 4,
          borderRadius: 3,
          boxShadow: 3,
          bgcolor: "white",
          width: 400,
        }}
      >
        <Typography variant="h5" mb={2} textAlign="center">
          Вход в систему
        </Typography>

        <Controller
          name="email"
          control={control}
          render={({ field }) => (
            <TextField
              {...field}
              label="Email"
              type="email"
              fullWidth
              margin="normal"
              error={!!errors.email}
              helperText={errors.email?.message}
            />
          )}
        />

        <Controller
          name="password"
          control={control}
          render={({ field }) => (
            <TextField
              {...field}
              label="Пароль"
              type="password"
              fullWidth
              margin="normal"
              error={!!errors.password}
              helperText={errors.password?.message}
            />
          )}
        />

        <Controller
          name="role"
          control={control}
          render={({ field }) => (
            <TextField
              {...field}
              select
              label="Роль"
              fullWidth
              margin="normal"
              error={!!errors.role}
              helperText={errors.role?.message}
            >
              <MenuItem value="admin">Админ</MenuItem>
              <MenuItem value="manager">Менеджер</MenuItem>
            </TextField>
          )}
        />

        <Button
          type="submit"
          fullWidth
          variant="contained"
          sx={{ mt: 2, borderRadius: 2 }}
        >
          Войти
        </Button>
      </Box>
    </Box>
  );
};
