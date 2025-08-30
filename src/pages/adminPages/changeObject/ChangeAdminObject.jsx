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
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import {
  objectIdThunk,
  objectPatch,
} from "../../../app/store/reducers/admin/changeAdminObject/changeAdminObjectThunks";
import { useDetailObject } from "../../../app/store/reducers/admin/changeAdminObject/changeAdminObjectSlice";

export const ChangeAdminObject = () => {
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

  const { id } = useParams();
  const { detail } = useDetailObject();

  console.log(detail);

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

    dispatch(objectPatch({ id, newItem: newObject }));
  };

  useEffect(() => {
    dispatch(objectIdThunk(id));
  }, [dispatch]);

  useEffect(() => {
    if (detail) {
      setValue("photos", detail.images || []);
      setValue("description", detail.title || "");
      setValue("Square", detail.area_m2 || "");
      setValue("Floor", detail.floor || "");
      setValue("NumberRooms", detail.rooms || "");
      setValue("price", detail.price || "");
      setValue("city", detail.city || "");
      setValue("District", detail.district || "");
      setValue("IntersectionStreets", detail.street || "");
      setValue("realEstate", detail.house || "");
      setValue("number", detail.owner_phone || "");
      setValue("offers", detail.deal_type || "");
      setValue("HomeSeries", detail.house_series || "");
      setValue("repairs", detail.repair_state || "");
    }
  }, [detail, setValue]);

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

      <PhotoUpload
        setValue={setValue}
        errors={errors}
        value={detail?.images || []}
      />
      <DescriptionField control={control} errors={errors} />
      <FormFields control={control} errors={errors} />
      <Characteristics control={control} errors={errors} />
      <OwnerContacts control={control} errors={errors} />
      <SubmitButtons />
    </Box>
  );
};
