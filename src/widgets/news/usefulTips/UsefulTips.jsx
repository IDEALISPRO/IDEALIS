import { useDispatch } from "react-redux";
import { useNews } from "../../../app/store/reducers/admin/news/newsSlice";
import { Acardion } from "../../../features";
import "./usefulTips.scss";
import { getUsefulTips } from "../../../app/store/reducers/admin/news/newsThunk";
import { useEffect } from "react";

export const UsefulTips = () => {
  const { usefulTips: data } = useNews();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUsefulTips());
  }, [dispatch]);
  return (
    <section className="usefulTips">
      <h2 className="title">Полезные советы</h2>

      <Acardion data={data} />
    </section>
  );
};
