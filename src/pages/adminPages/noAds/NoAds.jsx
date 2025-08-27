import { Box } from "@mui/material";
import { AdFreeCard } from "../../../features";
import { useDispatch } from "react-redux";
import { usePublished } from "../../../app/store/reducers/admin/published/publishedSlice";
import { useEffect } from "react";
import { publishedGet } from "../../../app/store/reducers/admin/published/publishedThunk";

export const NoAds = () => {
  const dispatch = useDispatch();
  const { list } = usePublished();

  useEffect(() => {
    dispatch(publishedGet({ status: "no_ads" }));
  }, []);

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: "60px",
        mt: "40px",
      }}
      className="container"
    >
      {list?.map((item, i) => (
        <AdFreeCard key={i} item={item} />
      ))}
    </Box>
  );
};
