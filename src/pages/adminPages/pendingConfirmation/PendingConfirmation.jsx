import { Box } from "@mui/material";
import { AdFreeCard } from "../../../features";
import { useDispatch } from "react-redux";
import { usePublished } from "../../../app/store/reducers/admin/published/publishedSlice";
import { publishedGet } from "../../../app/store/reducers/admin/published/publishedThunk";
import { useEffect } from "react";

export const PendingConfirmation = () => {
  const dispatch = useDispatch();
  const { list } = usePublished();

  useEffect(() => {
    dispatch(publishedGet({ status: "pending" }));
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
