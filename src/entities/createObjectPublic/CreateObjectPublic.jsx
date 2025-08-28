import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { PhotoUpload } from "./components/PhotoUpload";
import { FormFields } from "./components/FormFields";
import { SubmitButtons } from "./components/SubmitButtons";
import { DescriptionField } from "./components/DescriptionField";
import { Box, Typography } from "@mui/material";
import { schema } from "./validation";
import { TextFieldController } from "./components/TextFieldController";
import "./createObjectPublic.scss";

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
    },
  });

  const onSubmit = async (data) => {
    console.log("Form submitted:", data);

    // const newObject = {
    //   images: data.photos,
    //   title: data.description,
    //   area_m2: Number(data.Square),
    //   floor: data.Floor,
    //   floors_total: data.NumberRooms,
    //   price: data.price,
    //   city: data.IntersectionStreets,
    //   district: data.District,
    //   street: data.IntersectionStreets,
    //   house: data.realEstate,
    //   owner_phone: data.number,
    //   deal_type: data.offers,
    //   rooms: data.NumberRooms,
    //   house_series: data.HomeSeries,
    //   repair_state: data.repairs,
    // };

    // dispatch(createObjectThunk(newObject));
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
      <FormFields control={control} errors={errors} />
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
      {/* <Characteristics control={control} errors={errors} />
      <OwnerContacts control={control} errors={errors} /> */}
      <SubmitButtons />
    </Box>
  );
};
