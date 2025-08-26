import { yupResolver } from "@hookform/resolvers/yup";
import { Box, Button, TextField, Typography } from "@mui/material";
import { Controller, useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import * as yup from "yup";
import { userLogin } from "../../../app/store/reducers/auth/authThunks";

const schema = yup.object().shape({
  email: yup.string().email("Некорректный email").required("Введите email"),
  password: yup
    .string()
    .min(1, "Минимум 6 символов")
    .required("Введите пароль"),
});

export const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
    defaultValues: { email: "", password: "", role: "" },
  });

  const onSubmit = async (data) => {
    try {
      const response = await dispatch(userLogin(data)).unwrap();
      // Cookies.set("token", response.access);
      // Cookies.set("refresh", response.refresh);
      // Cookies.set("role", response.role);
      navigate("/admin/published");
      return response;
    } catch (error) {
      return { error };
    }
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

        {/* <Controller
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
        /> */}

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
