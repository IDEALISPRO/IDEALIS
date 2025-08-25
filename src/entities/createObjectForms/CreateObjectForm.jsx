import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { Box, Typography } from "@mui/material";

import { schema } from "./validation";
import { PhotoUpload } from "./components/PhotoUpload";
import { DescriptionField } from "./components/DescriptionField";
import { FormFields } from "./components/FormFields";
import { Characteristics } from "./components/Characteristics";
import { OwnerContacts } from "./components/OwnerContacts";
import { SubmitButtons } from "./components/SubmitButtons";

export const CreateObjectForm = () => {
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
  };

  console.log(errors);
  

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
      <SubmitButtons onSubmit={handleSubmit(onSubmit)}/>
    </Box>
  );
};
