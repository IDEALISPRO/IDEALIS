// CreateObjectPublic.jsx
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { PhotoUpload } from "./components/PhotoUpload";
import { SubmitButtons } from "./components/SubmitButtons";
import { DescriptionField } from "./components/DescriptionField";
import { Box, Typography } from "@mui/material";
import { schema } from "./validation";
import { TextFieldController } from "./components/TextFieldController";
import "./createObjectPublic.scss";
import { createObjectThunk } from "../../app/store/reducers/admin/createObject/createObjectThunk";

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

    const newObject = {
      images: data.photos,
      title: null,
      description: data.description,
      area_m2: data.Square,
      floor: data.Floor,
      floors_total: null,
      price: data.price,
      city: null,
      district: null,
      street: data.address,
      house: null,
      owner_phone: data.number,
      deal_type: null,
      rooms: null,
      house_series: null,
      repair_state: null,
      urgent: data.urgent,
    };

    dispatch(createObjectThunk(newObject));
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
      <TextFieldController
        name="number"
        control={control}
        label="Телефон"
        error={errors.number}
      />

      <DescriptionField control={control} errors={errors} />
      <SubmitButtons />
    </Box>
  );
};
