import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Pagination from "@mui/material/Pagination";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { agentsGet } from "../../app/store/reducers/admin/agents/agentsThunks";
import { useAgents } from "../../app/store/reducers/admin/agents/agentsSlice";

const rowsPerPage = 8;

const headCellStyle = {
  color: "#323232",
  fontWeight: 500,
  fontSize: { xs: "20px", md: "25px" },
};

const bodyCellStyle = {
  borderBottom: "1px solid rgba(224, 224, 224, 1)",
  whiteSpace: "nowrap",
  color: "#323232",
  paddingTop: { xs: "15px", md: "35px" },
  paddingBottom: { xs: "15px", md: "35px" },
  fontWeight: 300,
  fontSize: { xs: "12px", md: "20px" },
};

export const ListAgentsSection = () => {
  const dispatch = useDispatch();
  const [page, setPage] = React.useState(1);
  const { agents } = useAgents();
  
  const handleChange = (event, value) => {
    setPage(value);
  };

  const paginatedRows = agents.slice(
    (page - 1) * rowsPerPage,
    page * rowsPerPage
  );

  const getDriveDownloadLink = (url) => {
    const match = url.match(/\/d\/([a-zA-Z0-9_-]+)\//);
    if (match && match[1]) {
      const fileId = match[1];
      return `https://drive.google.com/uc?export=download&id=${fileId}`;
    }
    return null;
  };

  useEffect(() => {
    dispatch(agentsGet());
  }, [dispatch]);

  return (
    <>
      <TableContainer
        component={Paper}
        sx={{ width: "100%", overflowX: "auto", mt: "80px" }}
      >
        <Table sx={{ minWidth: 650 }} aria-label="agents table">
          <TableHead>
            <TableRow>
              <TableCell sx={headCellStyle}>Агентство</TableCell>
              <TableCell sx={headCellStyle}>Объекты</TableCell>
              <TableCell sx={headCellStyle}>Сдача</TableCell>
              <TableCell sx={headCellStyle}>Менеджер</TableCell>
              <TableCell sx={headCellStyle}>Контакты</TableCell>
              <TableCell sx={headCellStyle}>Документы</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {paginatedRows &&
              paginatedRows.map((row, index) => (
                <TableRow
                  key={`${row.agents}-${index}`}
                  sx={{ "& td": bodyCellStyle }}
                >
                  <TableCell>{row.agency}</TableCell>
                  <TableCell>{row.object_name}</TableCell>
                  <TableCell>{row.delivery_year}</TableCell>
                  <TableCell>{row.manager}</TableCell>
                  <TableCell>{row.contact_phone}</TableCell>
                  <TableCell
                    sx={{
                      textDecoration: "underline",
                      cursor: "pointer",
                    }}
                  >
                    {row.document_url ? (
                      <a
                        href={getDriveDownloadLink(row.document_url)}
                        target="_blank"
                        rel="noopener noreferrer"
                        download
                      >
                        Скачать
                      </a>
                    ) : (
                      "Нет документа"
                    )}
                  </TableCell>
                </TableRow>
              ))}
          </TableBody>
        </Table>
      </TableContainer>

      <Pagination
        count={Math.ceil(agents.length / rowsPerPage)}
        page={page}
        onChange={handleChange}
        variant="outlined"
        shape="rounded"
        sx={{
          mt: 2,
          display: "flex",
          justifyContent: "end",
          mb: "70px",
          "& .MuiPaginationItem-root": {
            borderRadius: "8px",
          },
          "& .MuiPaginationItem-root.Mui-selected": {
            backgroundColor: "#163659",
            color: "#fff",
            borderColor: "#163659",
          },
          "& .MuiPaginationItem-root.Mui-selected:hover": {
            backgroundColor: "#12294d",
          },
        }}
      />
    </>
  );
};
