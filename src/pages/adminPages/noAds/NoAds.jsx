import { Box, Pagination } from "@mui/material";
import { AdFreeCard } from "../../../features";
import { useDispatch } from "react-redux";
import { usePublished } from "../../../app/store/reducers/admin/published/publishedSlice";
import { useEffect, useState } from "react";
import { publishedGet } from "../../../app/store/reducers/admin/published/publishedThunk";

export const NoAds = () => {
  const dispatch = useDispatch();
  const { list } = usePublished();

  const itemsPerPage = 9;
  const [page, setPage] = useState(1);

  const filteredList = list?.filter((item) => item.status === "no_ads") || [];

  const startIndex = (page - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentItems = filteredList.slice(startIndex, endIndex);

  useEffect(() => {
    dispatch(publishedGet());
  }, [dispatch]);

  const handleChange = (_, value) => {
    setPage(value);
  };

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
      {currentItems.map((item, i) => (
        <AdFreeCard key={i} item={item} />
      ))}

      {filteredList.length > itemsPerPage && (
        <Pagination
          count={Math.ceil(filteredList.length / itemsPerPage)}
          page={page}
          onChange={handleChange}
          variant="outlined"
          size="large"
          shape="rounded"
          sx={{ display: "flex", justifyContent: "center" }}
        />
      )}
    </Box>
  );
};
