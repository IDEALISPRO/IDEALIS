import { Acardion } from "../../features/";
import { Box, Typography } from "@mui/material";
import { useServices } from "../../app/store/reducers/admin/services/servicesSlice";
import { useDispatch } from "react-redux";
import {
  getServicesBanner,
  getServicesStep,
} from "../../app/store/reducers/admin/services/servicesThunk";
import { useEffect } from "react";

export const ServicesWidget = ({ title, description }) => {
  const { stepList: data } = useServices();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getServicesStep());
  }, [dispatch]);
  return (
    <Box
      className="container "
      sx={{
        paddingTop: { xs: "97px", md: "150px" },
        mb: { xs: "80px", md: "100px" },
      }}
    >
      <h2 className="title">{title}</h2>
      <Typography
        sx={{
          fontWeight: 400,
          fontSize: { xs: "18px", sm: "20px", md: "22px", lg: "34px" },
          color: "#000",
          width: { xs: "100%", sm: "60%", md: "60%", lg: "50%" },
          marginBottom: "20px",
          ml: { xs: "0", sm: "40%", md: "40%", lg: "50%" },
        }}
        dangerouslySetInnerHTML={{ __html: description }}
      ></Typography>

      <Acardion data={data} />
    </Box>
  );
};
