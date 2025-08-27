import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { usePublished } from "../../../app/store/reducers/admin/published/publishedSlice";
import { getSavedSearch } from "../../../app/store/reducers/admin/published/publishedThunk";
import { SearchReq } from "../../../widgets";

export const SavedSearches = () => {
  const dispatch = useDispatch();
  const { savedSearch: list } = usePublished();

  useEffect(() => {
    dispatch(getSavedSearch());
  }, []);
  return (
    <div className="container">
      <SearchReq list={list} />
    </div>
  );
};
