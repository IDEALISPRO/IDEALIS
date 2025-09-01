import { useState, useEffect } from "react";
import { Box, Typography } from "@mui/material";
import { useDispatch } from "react-redux";
import { useParams, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
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
import Cookies from "js-cookie";

export const ChangeAdminObject = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { id } = useParams();
  const { detail } = useDetailObject();
  const role = Cookies.get("role");

  const [formData, setFormData] = useState({
    photos: [],
    description: "",
    Floor: "",
    IntersectionStreets: "",
    area_m2: "",
    NumberRooms: "",
    price: "",
    allPrice: "",
    city: "",
    District: "",
    realEstate: "",
    number: "",
    offers: "",
    HomeSeries: "",
    repairs: "",
    ObjectStatus: "",
    TypePayment: "",
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
        allPrice: detail.all_price || "",
        city: detail.city || "",
        District: detail.district || "",
        IntersectionStreets: detail.street || "",
        realEstate: detail.house || "",
        number: detail.owner_phone || "",
        offers: detail.deal_type || "",
        HomeSeries: detail.house_series || "",
        repairs: detail.repair_state || "",
        ObjectStatus: detail.status || "",
        TypePayment: detail.payment_type || "",
      });
    }
  }, [detail]);

  const handleChange = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const onSubmit = async (e) => {
    e.preventDefault();

    const imagesPayload = formData.photos.map((photo, index) => {
      if (photo.id) return { id: photo.id, sort_order: index };
      if (photo.url) return { url: photo.url, sort_order: index };
      return { url: photo, sort_order: index };
    });

    const payload = {
      title: formData.description,
      description: formData.description,
      area_m2: formData.area_m2,
      floor: Number(formData.Floor),
      price: Number(formData.price),
      all_price: Number(formData.allPrice),
      city: formData.city,
      district: formData.District,
      street: formData.IntersectionStreets,
      house: formData.realEstate,
      owner_phone: formData.number,
      deal_type: formData.offers,
      rooms: Number(formData.NumberRooms),
      house_series: formData.HomeSeries,
      repair_state: formData.repairs,
      status: formData.ObjectStatus,
      payment_type: formData.TypePayment,
      images: imagesPayload,
    };

    try {
      await dispatch(objectPatch({ id, newItem: payload })).unwrap();
      toast.success("Объект успешно обновлен!");
      navigate(-1);
    } catch (error) {
      console.error(error);
      toast.error("Что-то пошло не так. Попробуйте снова.");
    }
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

      {role === "admin" && (
        <OwnerContacts formData={formData} handleChange={handleChange} />
      )}
      <SubmitButtons onSubmit={onSubmit} />
    </Box>
  );
};
