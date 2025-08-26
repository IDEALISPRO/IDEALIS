import { useDispatch } from "react-redux";
import "./rules.scss";
import { useEffect } from "react";
import { rulesGet } from "../../../app/store/reducers/admin/rules/rulesThunks";
import { useRules } from "../../../app/store/reducers/admin/rules/rulesSlice";

export const Rules = () => {
  const dispatch = useDispatch();
  const { rules } = useRules();
  console.log(rules);

  useEffect(() => {
    dispatch(rulesGet());
  }, [dispatch]);
  return (
    <div className="container rules">
      {rules && (
        <>
          <h1>{rules.title}</h1>
          <p>{rules.content}</p>
        </>
      )}
    </div>
  );
};
