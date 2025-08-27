import { useDispatch } from "react-redux";
import { LawyersCard } from "../../../features";
import { useEffect } from "react";
import { lawyersGet } from "../../../app/store/reducers/admin/lawyers/lawyersThunk";
import { useLawyer } from "../../../app/store/reducers/admin/lawyers/lawyersSlice";

export const Lawyers = () => {
  const dispatch = useDispatch();
  const {data} = useLawyer();

  useEffect(() => {
    dispatch(lawyersGet());
  }, []);

  return (
    <div className="container">

      {
        data &&
        data.map(lawyer => (
          <LawyersCard key={lawyer.id} lawyer={lawyer} />
        ))
      }

    </div>
  );
};
