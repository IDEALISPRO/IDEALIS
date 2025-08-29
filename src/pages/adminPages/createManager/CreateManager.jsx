import React, { useState } from "react";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import {
  TextField,
  Button,
  Typography,
  Box,
  FormHelperText,
  IconButton,
  Grid,
} from "@mui/material";
import AddAPhotoIcon from "@mui/icons-material/AddAPhoto";
import DeleteIcon from "@mui/icons-material/Delete";
import { useDispatch } from "react-redux";
import { createManagerPost } from "../../../app/store/reducers/admin/createManager/createManagerThunks";

const schema = yup.object().shape({
  photo: yup
    .mixed()
    .required("Фото обязательно")
    .test("fileSize", "Файл слишком большой", (value) => {
      return value && value[0]?.size <= 2 * 1024 * 1024;
    })
    .test("fileType", "Неверный формат файла", (value) => {
      return value && ["image/jpeg", "image/png"].includes(value[0]?.type);
    }),
  name: yup.string().required("Имя обязательно"),
  email: yup.string().email("Неверный email").required("Email обязателен"),
  phone: yup
    .string()
    .matches(/^\+996\d{9}$/, "Введите номер в формате +996XXXXXXXXX")
    .required("Телефон обязателен"),
  document: yup
    .mixed()
    .required("Документ обязателен")
    .test("fileSize", "Файл слишком большой", (value) => {
      return value && value.size <= 5 * 1024 * 1024;
    })
    .test("fileType", "Неверный формат файла", (value) => {
      return (
        value &&
        [
          "application/pdf",
          "application/msword",
          "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
        ].includes(value.type)
      );
    }),
  password: yup
    .string()
    .min(6, "Минимум 6 символов")
    .required("Пароль обязателен"),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref("password"), null], "Пароли не совпадают")
    .required("Подтверждение пароля обязательно"),
});

export const CreateManager = () => {
  const [preview, setPreview] = useState(null);
  const dispatch = useDispatch();

  const {
    handleSubmit,
    control,
    reset,
    setValue,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const handlePhotoChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setValue("photo", e.target.files, { shouldValidate: true });
      setPreview(URL.createObjectURL(file));
    }
  };

  const removePhoto = () => {
    setPreview(null);
    setValue("photo", null, { shouldValidate: true });
  };

  const onSubmit = (data) => {
    const formData = new FormData();
    formData.append("avatar", data.photo[0]);
    formData.append("document", data.document);
    formData.append("name", data.name);
    formData.append("email", data.email);
    formData.append("phone", data.phone);
    formData.append("password", data.password);
    formData.append("password2", data.confirmPassword);

    console.log("FormData ready for submission:", formData);

    reset();
    setPreview(null);
    dispatch(createManagerPost(formData));
  };

  const fields = [
    { name: "name", label: "Имя", type: "text" },
    { name: "email", label: "Email", type: "email" },
    { name: "phone", label: "Номер телефона", type: "text" },
    { name: "password", label: "Пароль", type: "password" },
    {
      name: "confirmPassword",
      label: "Подтверждение пароля",
      type: "password",
    },
  ];

  return (
    <Box className="container" sx={{ mx: "auto", mt: 4, p: 2 }}>
      <Typography variant="h4" mb={3} align="center">
        Создание менеджера
      </Typography>

      <form onSubmit={handleSubmit(onSubmit)} noValidate>
        <Controller
          name="photo"
          control={control}
          defaultValue={null}
          render={({ field }) => (
            <Box mb={3}>
              <input
                type="file"
                accept="image/*"
                hidden
                id="photo-upload"
                onChange={handlePhotoChange}
              />
              {preview ? (
                <Box sx={{ position: "relative", display: "inline-block" }}>
                  <Box
                    component="img"
                    src={preview}
                    alt="preview"
                    sx={{
                      width: 200,
                      height: 200,
                      objectFit: "cover",
                      borderRadius: 4,
                      border: "2px solid #1976d2",
                    }}
                  />
                  <IconButton
                    onClick={removePhoto}
                    sx={{
                      position: "absolute",
                      top: -10,
                      right: -10,
                      bgcolor: "white",
                      border: "1px solid #ccc",
                    }}
                  >
                    <DeleteIcon fontSize="small" />
                  </IconButton>
                </Box>
              ) : (
                <label htmlFor="photo-upload">
                  <Button
                    variant="outlined"
                    component="span"
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      justifyContent: "center",
                      width: 200,
                      height: 200,
                      borderRadius: 4,
                      border: "2px dashed #1976d2",
                      color: "#1976d2",
                      backgroundColor: "#e8e8e8ff",
                    }}
                  >
                    <AddAPhotoIcon sx={{ fontSize: 40, mb: 1 }} />
                    <Typography>Добавьте фото</Typography>
                  </Button>
                </label>
              )}
              {errors.photo && (
                <FormHelperText error>{errors.photo.message}</FormHelperText>
              )}
            </Box>
          )}
        />

        <Grid container spacing={2}>
          {fields.map((field) => (
            <Grid item xs={12} sm={6} key={field.name}>
              <Controller
                name={field.name}
                control={control}
                defaultValue=""
                render={({ field: controllerField }) => (
                  <TextField
                    {...controllerField}
                    type={field.type}
                    label={field.label}
                    fullWidth
                    margin="normal"
                    error={!!errors[field.name]}
                    helperText={errors[field.name]?.message}
                  />
                )}
              />
            </Grid>
          ))}

          <Grid item xs={12} sm={6}>
            <Controller
              name="document"
              control={control}
              defaultValue={null}
              render={({ field }) => (
                <Box mb={3}>
                  <input
                    type="file"
                    accept=".pdf,.doc,.docx"
                    hidden
                    id="document-upload"
                    onChange={(e) => {
                      const file = e.target.files[0];
                      field.onChange(file || null);
                    }}
                  />
                  <label htmlFor="document-upload">
                    <Button
                      variant="outlined"
                      component="span"
                      sx={{
                        width: "100%",
                        height: 60,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        borderRadius: 2,
                        border: "2px dashed #1976d2",
                        color: "#1976d2",
                        backgroundColor: "#e8e8e8ff",
                      }}
                    >
                      {field.value
                        ? field.value.name
                        : "Добавьте PDF или Word файл"}
                    </Button>
                  </label>
                  {errors.document && (
                    <FormHelperText error>
                      {errors.document.message}
                    </FormHelperText>
                  )}
                </Box>
              )}
            />
          </Grid>
        </Grid>

        <Button
          type="submit"
          variant="contained"
          color="primary"
          fullWidth
          sx={{ mt: 3 }}
        >
          Создать
        </Button>
      </form>
    </Box>
  );
};
