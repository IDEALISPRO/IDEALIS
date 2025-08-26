import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { Box, Typography } from "@mui/material";
import { useDispatch } from "react-redux";

import { schema } from "./validation";
import { PhotoUpload } from "./components/PhotoUpload";
import { DescriptionField } from "./components/DescriptionField";
import { FormFields } from "./components/FormFields";
import { Characteristics } from "./components/Characteristics";
import { OwnerContacts } from "./components/OwnerContacts";
import { SubmitButtons } from "./components/SubmitButtons";

import { createObjectThunk } from "../../app/store/reducers/admin/createObject/createObjectThunk";

export const CreateObjectForm = () => {
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
    },
  });

  const onSubmit = async (data) => {
    console.log("Form submitted:", data);

    const newObject = {
      images: data.photos, 
      title: data.description,
      area_m2: Number(data.Square),
      floor: data.Floor,
      floors_total: data.NumberRooms,
      price: data.price,
      city: data.IntersectionStreets,
      district: data.District,
      street: data.IntersectionStreets,
      house: data.realEstate,
      owner_phone: data.number,
      deal_type: data.offers,
      rooms: data.NumberRooms,
      house_series: data.HomeSeries,
      repair_state: data.repairs,
    };

    dispatch(createObjectThunk(newObject));
  };

  return (
    <Box component="form" onSubmit={handleSubmit(onSubmit)}>
      <Typography
        variant="h2"
        sx={{ fontSize: "55px", fontWeight: 700, mt: "80px" }}
      >
        Добавить объект
      </Typography>

      <PhotoUpload setValue={setValue} errors={errors} />
      <DescriptionField control={control} errors={errors} />
      <FormFields control={control} errors={errors} />
      <Characteristics control={control} errors={errors} />
      <OwnerContacts control={control} errors={errors} />
      <SubmitButtons />
    </Box>
  );
};
