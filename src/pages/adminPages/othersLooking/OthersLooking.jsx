import { useDispatch } from "react-redux";
import { SearchReq } from "../../../widgets";
import { usePublished } from "../../../app/store/reducers/admin/published/publishedSlice";
import { useEffect } from "react";
import { getSearchTrending } from "../../../app/store/reducers/admin/published/publishedThunk";

export const OthersLooking = () => {
  const dispatch = useDispatch();
  const { searchListTrending: list } = usePublished();

  useEffect(() => {
    dispatch(getSearchTrending());
  }, []);

  return (
    <div className="container">
      <SearchReq list={list} />
    </div>
  );
};
