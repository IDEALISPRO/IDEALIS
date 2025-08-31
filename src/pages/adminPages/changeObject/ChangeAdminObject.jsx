import { useState, useEffect } from "react";
import { Box, Typography } from "@mui/material";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
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

export const ChangeAdminObject = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const { detail } = useDetailObject();

  const [formData, setFormData] = useState({
    photos: [],
    description: "",
    Floor: "",
    IntersectionStreets: "",
    area_m2: "",
    NumberRooms: "",
    price: "",
    city: "",
    District: "",
    realEstate: "",
    number: "",
    offers: "",
    HomeSeries: "",
    repairs: "",
  });

  useEffect(() => {
    dispatch(objectIdThunk(id));
  }, [dispatch, id]);

  useEffect(() => {
    if (detail) {
      setFormData({
        photos: detail.images || [],
        description: detail.title || "",
        area_m2: detail.area_m2 || "",
        Floor: detail.floor || "",
        NumberRooms: detail.rooms || "",
        price: detail.price || "",
        city: detail.city || "",
        District: detail.district || "",
        IntersectionStreets: detail.street || "",
        realEstate: detail.house || "",
        number: detail.owner_phone || "",
        offers: detail.deal_type || "",
        HomeSeries: detail.house_series || "",
        repairs: detail.repair_state || "",
      });
    }
  }, [detail]);

  const handleChange = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const onSubmit = (e) => {
    e.preventDefault();

    const dataToSend = new FormData();

    Object.entries(formData).forEach(([key, value]) => {
      if (key !== "photos") {
        dataToSend.append(key, value ?? "");
      }
    });

    formData.photos.forEach((photo, index) => {
      dataToSend.append(`images[${index}][id]`, photo.id || "");
      dataToSend.append(`images[${index}][url]`, photo.url || "");
      dataToSend.append(
        `images[${index}][sort_order]`,
        photo.sort_order ?? index
      );
      if (photo.file) {
        dataToSend.append(`images[${index}][file]`, photo.file);
      }
    });

    dispatch(objectPatch({ id, newItem: dataToSend }));
  };

  return (
    <Box className="container" component="form" onSubmit={onSubmit}>
      <Typography
        variant="h2"
        sx={{ fontSize: "55px", fontWeight: 700, mt: "80px" }}
      >
        Изменить объект
      </Typography>

      <PhotoUpload
        value={formData.photos}
        onChange={(value) => handleChange("photos", value)}
      />

      <DescriptionField
        value={formData.description}
        onChange={(value) => handleChange("description", value)}
      />

      <FormFields formData={formData} handleChange={handleChange} />

      <Characteristics formData={formData} handleChange={handleChange} />

      <OwnerContacts formData={formData} handleChange={handleChange} />

      <SubmitButtons onSubmit={onSubmit} />
    </Box>
  );
};
