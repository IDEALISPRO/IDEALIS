import { yupResolver } from "@hookform/resolvers/yup";
import { Controller, useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { PhotoUpload } from "./components/PhotoUpload";
import { SubmitButtons } from "./components/SubmitButtons";
import { DescriptionField } from "./components/DescriptionField";
import { Box, TextField, Typography } from "@mui/material";
import { schema } from "./validation";
import { TextFieldController } from "./components/TextFieldController";
import "./createObjectPublic.scss";
import { createObjectPublicThunk } from "../../app/store/reducers/admin/createObject/createObjectPublicThunks";

export const CreateObjectPublic = () => {
  const dispatch = useDispatch();
  const {
    control,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
    defaultValues: {
      photos: [],
      TypePayment: "",
      description: "",
      Floor: "",
      IntersectionStreets: "",
      ObjectStatus: "",
      Square: "",
      repairs: "",
      Documents: "",
      Communications: "",
      offers: "",
      furniture: "",
      deal: "",
      realEstate: "",
      NumberRooms: "",
      Agent: "",
      District: "",
      HomeSeries: "",
      userName: "",
      number: "",
      allPrice: "",
      price: "",
      city: "",
      address: "",
      urgent: false,
    },
  });

  const onSubmit = async (data) => {
    console.log("Form submitted:", data);

    const formData = new FormData();

    data.photos.forEach((file) => {
      formData.append("images", file);
    });

    formData.append("description", data.description);
    formData.append("area_m2", data.Square);
    formData.append("floor", data.Floor);
    formData.append("price", data.price);
    formData.append("street", data.address);
    formData.append("owner_phone", data.number);
    formData.append("urgent", data.urgent);

    console.log([...formData]); // проверить что все поля на месте

    // диспатчим уже formData
    dispatch(createObjectPublicThunk(formData));
  };

  return (
    <Box
      className="container"
      component="form"
      onSubmit={handleSubmit(onSubmit)}
    >
      <Typography
        variant="h2"
        sx={{ fontSize: "55px", fontWeight: 700, mt: "80px" }}
      >
        Добавить объект
      </Typography>

      <PhotoUpload setValue={setValue} errors={errors} />
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
          name="address"
          control={control}
          label="Адрес"
          error={errors.address}
        />
        <TextFieldController
          name="Square"
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
          name="price"
          control={control}
          label="Цена"
          error={errors.price}
        />
      </Box>

      <Typography
        variant="h2"
        sx={{ fontSize: "28px", fontWeight: 600, mt: "80px" }}
      >
        Номер телефона *
      </Typography>

      <Controller
        name="number"
        control={control}
        render={({ field }) => (
          <TextField
            sx={{ width: "50%" }}
            {...field}
            label="Телефон"
            error={!!errors.number}
            helperText={errors.number?.message}
            onFocus={(e) => {
              if (!field.value || !field.value.startsWith("+996")) {
                field.onChange("+996");
              }
            }}
            onChange={(e) => {
              let value = e.target.value;
              if (!value.startsWith("+996")) {
                value = "+996" + value.replace(/\+996/g, "");
              }
              field.onChange(value);
            }}
          />
        )}
      />

      <DescriptionField control={control} errors={errors} />
      <SubmitButtons />
    </Box>
  );
};
