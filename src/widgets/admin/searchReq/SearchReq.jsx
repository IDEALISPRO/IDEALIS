import { useEffect, useState } from "react";
import "./searchreq.scss";
import Pagination from "@mui/material/Pagination";
import { useLocation, useNavigate } from "react-router-dom";
// import data from "./list.json";

export const SearchReq = ({ list: data }) => {
  const itemsPerPage = 9;
  const [page, setPage] = useState(1);
  const [list, setList] = useState([]);

  useEffect(() => {
    const sorted = [...data].sort((a, b) => b.req - a.req);
    setList(sorted);
  }, []);

  const startIndex = (page - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentItems = list.slice(startIndex, endIndex);

  const handleChange = (_, value) => {
    setPage(value);
  };

  const { pathname } = useLocation();

  return (
    <div className="search-req">
      <div className="title-div">
        <p className="title-text">Формулировка</p>
        <p className="title-text">Число запросов</p>
      </div>
      <div className="list">
        {currentItems.map((item, index) => (
          <div key={startIndex + index} className={`list-card`}>
            <div className="text-block">
              <p className="name-text">
                {pathname === "/admin/others-looking" ? item.term : item.query}
              </p>
            </div>
            <div className="text-block">
              <p className="req-text">{item.count}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="pagination-div">
        <Pagination
          className="pagination"
          count={Math.ceil(list.length / itemsPerPage)}
          page={page}
          onChange={handleChange}
          variant="outlined"
          size="large"
          shape="rounded"
          sx={{
            display: "flex",
            justifyContent: "center",
          }}
        />
      </div>
    </div>
  );
};
