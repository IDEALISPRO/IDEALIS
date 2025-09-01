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
import Cookies from "js-cookie";
import { createObjectThunk } from "../../app/store/reducers/admin/createObject/createObjectThunk";

export const CreateObjectForm = () => {
  const dispatch = useDispatch();
  const role = Cookies.get("role");
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

    const formData = new FormData();

    data.photos.forEach((file) => {
      formData.append("images", file);
    });

    formData.append("title", data.description);
    formData.append("area_m2", Number(data.Square));
    formData.append("communications", data.Communications);
    formData.append("document", data.Documents);
    formData.append("est_mebel", data.furniture);
    formData.append("floor", data.Floor);
    formData.append("floors_total", data.NumberRooms);
    formData.append("price", data.price);
    formData.append("city", data.IntersectionStreets);
    formData.append("district", data.District);
    formData.append("street", data.IntersectionStreets);
    formData.append("house", data.realEstate);
    formData.append("owner_phone", data.number);
    formData.append("deal_type", data.offers);
    formData.append("rooms", data.NumberRooms);
    formData.append("house_series", data.HomeSeries);
    formData.append("repair_state", data.repairs);
    formData.append("typepayment", data.TypePayment);

    dispatch(createObjectThunk(formData));
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
      {role === "admin" && <OwnerContacts control={control} errors={errors} />}
      <SubmitButtons />
    </Box>
  );
};
