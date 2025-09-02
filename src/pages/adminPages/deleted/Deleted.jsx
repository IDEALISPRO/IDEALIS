import { useDispatch } from "react-redux";
import { DeletedCard } from "../../../features";
import "./deleted.scss";
import { usePublished } from "../../../app/store/reducers/admin/published/publishedSlice";
import { useEffect, useState } from "react";
import { publishedGet } from "../../../app/store/reducers/admin/published/publishedThunk";

export const Deleted = () => {
  const dispatch = useDispatch();
  const { list: data } = usePublished();

  const itemsPerPage = 9;
  const [page, setPage] = useState(1);

  const filteredList = data?.filter((item) => item.status === "deleted") || [];

  const startIndex = (page - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentItems = filteredList.slice(startIndex, endIndex);

  console.log(data);
  

  useEffect(() => {
    dispatch(publishedGet());
  }, [dispatch]);

  const handleChange = (_, value) => {
    setPage(value);
  };

  return (
    <div className="container deleted_card">
      {currentItems.map((item) => (
        <DeletedCard
          key={item.id}
          img={item.images[0]}
          title={item.title}
          location={`г. ${item.city}, мкр. ${item.district}, ул. ${item.street}, ${item.house}`}
          description={item.description}
          price={item.price}
          liked={item.liked}
        />
      ))}

      {filteredList.length > itemsPerPage && (
        <div className="pagination-wrapper">
          <Pagination
            count={Math.ceil(filteredList.length / itemsPerPage)}
            page={page}
            onChange={handleChange}
            variant="outlined"
            size="large"
            shape="rounded"
            sx={{ display: "flex", justifyContent: "center", mt: 4 }}
          />
        </div>
      )}
    </div>
  );
};
