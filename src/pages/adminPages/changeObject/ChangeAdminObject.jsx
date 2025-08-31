import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { Box, Typography } from "@mui/material";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { schema } from "./validation";
import { PhotoUpload } from "./components/PhotoUpload";
import { DescriptionField } from "./components/DescriptionField";
import { FormFields } from "./components/FormFields";
import { Characteristics } from "./components/Characteristics";
import { OwnerContacts } from "./components/OwnerContacts";
import { SubmitButtons } from "./components/SubmitButtons";
import {
  objectIdThunk,
  objectPatch,
} from "../../../app/store/reducers/admin/changeAdminObject/changeAdminObjectThunks";
import { useDetailObject } from "../../../app/store/reducers/admin/changeAdminObject/changeAdminObjectSlice";
import { createObjectThunk } from "../../../app/store/reducers/admin/createObject/createObjectThunk";

export const ChangeAdminObject = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const { detail } = useDetailObject();

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

  useEffect(() => {
    dispatch(objectIdThunk(id));
  }, [dispatch, id]);

  useEffect(() => {
    if (detail) {
      setValue("photos", detail.images || []);
      setValue("description", detail.title || "");
      setValue("area_m2", detail.area_m2 || "");
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

  const onSubmit = async (data) => {
    const formData = new FormData();

    data.photos.forEach((photo) => {
      if (photo instanceof File) {
        formData.append("images", photo);
      }
    });

    const existingImages = data.photos.filter(
      (photo) => typeof photo === "string"
    );
    existingImages.forEach((img) => {
      formData.append("images", img);
    });

    formData.append("title", data.description);
    formData.append("area_m2", Number(data.area_m2));
    formData.append("floor", data.Floor);
    formData.append("rooms", data.NumberRooms);
    formData.append("price", data.price);
    formData.append("city", data.city);
    formData.append("district", data.District);
    formData.append("street", data.IntersectionStreets);
    formData.append("house", data.realEstate);
    formData.append("owner_phone", data.number);
    formData.append("deal_type", data.offers);
    formData.append("house_series", data.HomeSeries);
    formData.append("repair_state", data.repairs);
    for (let pair of formData.entries()) {
      console.log(pair[0], pair[1]);
    }

    dispatch(objectPatch({ id, newItem: formData }));
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
        Изменить объект
      </Typography>

      <Controller
        name="photos"
        control={control}
        render={({ field }) => (
          <PhotoUpload
            value={field.value || []}
            onChange={field.onChange}
            errors={errors}
          />
        )}
      />

      <DescriptionField control={control} errors={errors} />
      <FormFields control={control} errors={errors} />
      <Characteristics control={control} errors={errors} />
      <OwnerContacts control={control} errors={errors} />
      <SubmitButtons />
    </Box>
  );
};
