import { Box, MenuItem, TextField, Typography } from "@mui/material";
import { SelectField } from "./SelectField";
import { TextFieldController } from "./TextFieldController";
import { selectFields } from "../fields";
import { useAgents } from "../../../app/store/reducers/admin/agents/agentsSlice";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { getAgentsWithoutToken } from "../../../app/store/reducers/admin/agents/agentsThunks";
import { axiosApi } from "../../../app/services/AxiosPub";
import { Controller } from "react-hook-form";

export const FormFields = ({ control, errors }) => {
  const { list } = useAgents();
  const dispatch = useDispatch();
  const [district, setDistrict] = useState([]);

  useEffect(() => {
    dispatch(getAgentsWithoutToken());
  }, []);

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
        <SelectField
          name={"Agent"}
          control={control}
          label={"Агент"}
          options={list.map((item) => item.name)}
          error={errors["Agent"]}
        />
        {selectFields.map((field) => (
          <SelectField
            key={field.name}
            name={field.name}
            control={control}
            label={field.label}
            options={field.options}
            error={errors[field.name]}
          />
        ))}

        <Controller
          name="District"
          control={control}
          render={({ field }) => (
            <TextField
              {...field}
              select
              label="Город"
              error={!!errors.District}
              helperText={errors.District?.message}
              sx={{ width: { xs: "100%", sm: "48%", md: "48%", lg: "32%" } }}
            >
              {district.map((item) => (
                <MenuItem key={item.id} value={item.id}>
                  {item.title}
                </MenuItem>
              ))}
            </TextField>
          )}
        />

        <TextFieldController
          name="Floor"
          control={control}
          label="Этаж"
          error={errors.Floor}
        />
        <TextFieldController
          name="IntersectionStreets"
          control={control}
          label="Пересечение улиц"
          error={errors.IntersectionStreets}
        />
      </Box>
    </>
  );
};
