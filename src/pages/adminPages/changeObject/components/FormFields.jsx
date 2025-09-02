import { Box, Typography, TextField, MenuItem } from "@mui/material";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useAgents } from "../../../../app/store/reducers/admin/agents/agentsSlice";
import { getAgentsWithoutToken } from "../../../../app/store/reducers/admin/agents/agentsThunks";
import { selectFields } from "../fields";
import { axiosApi } from "../../../../app/services/AxiosPub";

export const FormFields = ({ formData, handleChange }) => {
  const { list } = useAgents();
  const dispatch = useDispatch();
  const [district, setDistrict] = useState([]);

  useEffect(() => {
    dispatch(getAgentsWithoutToken());
  }, [dispatch]);

  useEffect(() => {
    axiosApi
      .get("/users/raion/")
      .then(({ data }) => setDistrict(data))
      .catch((e) => console.log(e));
  }, []);

  return (
    <>
      <Typography
        variant="h2"
        sx={{ fontSize: "28px", fontWeight: 600, mt: "80px" }}
      >
        Заполнение формы *
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
        <TextField
          select
          label="Агент"
          value={formData.agent || ""}
          onChange={(e) => handleChange("agent", e.target.value)}
          sx={{ width: { xs: "100%", sm: "48%" } }}
        >
          {list.map((item) => (
            <MenuItem key={item.id} value={item.id}>
              {item.name}
            </MenuItem>
          ))}
        </TextField>
        <TextField
          select
          label="Тип сделки"
          value={formData.deal_type || ""}
          onChange={(e) => handleChange("deal_type", e.target.value)}
          sx={{ width: { xs: "100%", sm: "48%" } }}
        >
          <MenuItem value={"Продажа"}>Продажа</MenuItem>
          <MenuItem value={"Аренда"}>Аренда</MenuItem>
        </TextField>

        {selectFields.map((field) => (
          <TextField
            key={field.name}
            select
            label={field.label}
            value={formData[field.name] || ""}
            onChange={(e) => handleChange(field.name, e.target.value)}
            sx={{ width: { xs: "100%", sm: "48%" } }}
          >
            {field.options.map((option) => (
              <MenuItem key={option} value={option}>
                {option}
              </MenuItem>
            ))}
          </TextField>
        ))}

        <TextField
          select
          label="Город"
          value={formData.city || ""}
          onChange={(e) => handleChange("city", e.target.value)}
          sx={{ width: { xs: "100%", sm: "48%" } }}
        >
          {district.map((item) => (
            <MenuItem key={item.id} value={item.title}>
              {item.title}
            </MenuItem>
          ))}
        </TextField>

        <TextField
          label="Этаж"
          type="number"
          value={formData.Floor || ""}
          onChange={(e) => handleChange("Floor", e.target.value)}
          sx={{ width: { xs: "100%", sm: "48%" } }}
        />

        <TextField
          label="Пересечение улиц"
          value={formData.IntersectionStreets || ""}
          onChange={(e) => handleChange("district", e.target.value)}
          sx={{ width: { xs: "100%", sm: "48%" } }}
        />
      </Box>
    </>
  );
};
