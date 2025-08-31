import {
  Autocomplete,
  TextField,
  Box,
  Button,
  Typography,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  TableContainer,
  Paper,
  TablePagination,
} from "@mui/material";
import { useEffect, useState } from "react";
import { axiosApi } from "../../../app/services/AxiosPub";
import { useDispatch } from "react-redux";
import {
  deleteManager,
  postTransfer,
} from "../../../app/store/reducers/admin/transfer/transferThunks";

export const AllManager = () => {
  const [allManager, setAllManager] = useState([]);
  const [deleteValue, setDeleteValue] = useState(null);
  const [transferValue, setTransferValue] = useState(null);
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);

  const dispatch = useDispatch();

  const handleApply = () => {
    if (!deleteValue || !transferValue) return;

    dispatch(postTransfer({ from_id: deleteValue.id, to_id: transferValue.id }))
      .unwrap()
      .then(() => {
        dispatch(deleteManager(deleteValue.id));
      })
      .catch((e) => {
        console.error("Ошибка при передаче:", e);
      });
  };

  useEffect(() => {
    axiosApi
      .get("/users/register-managers/")
      .then(({ data }) => setAllManager(data))
      .catch((e) => console.log(e));
  }, []);
  console.log(allManager);

  const handleChangePage = (event, newPage) => setPage(newPage);
  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  return (
    <Box className="container">
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: "repeat(2, 1fr)",
          gap: "20px",
          mb: "20px",
        }}
      >
        <Box>
          <Typography
            variant="h2"
            sx={{ fontSize: "35px", fontWeight: 700, m: "20px 0" }}
          >
            Удалить менеджера
          </Typography>
          <Autocomplete
            value={deleteValue}
            onChange={(event, newValue) => setDeleteValue(newValue)}
            options={allManager}
            getOptionLabel={(option) => option.name || ""}
            renderOption={(props, option) => (
              <li {...props} key={option.id}>
                {option.name}
              </li>
            )}
            renderInput={(params) => (
              <TextField {...params} label="Удалить менеджера" size="small" />
            )}
          />
        </Box>

        <Box>
          <Typography
            variant="h2"
            sx={{ fontSize: "35px", fontWeight: 700, m: "20px 0" }}
          >
            Передать менеджеру
          </Typography>
          <Autocomplete
            value={transferValue}
            onChange={(event, newValue) => setTransferValue(newValue)}
            options={allManager}
            getOptionLabel={(option) => option.name || ""}
            renderOption={(props, option) => (
              <li {...props} key={option.id}>
                {option.name}
              </li>
            )}
            renderInput={(params) => (
              <TextField {...params} label="Передать" size="small" />
            )}
          />
        </Box>
      </Box>

      <Button variant="contained" onClick={handleApply} sx={{ mb: 4 }}>
        Применить
      </Button>

      <Typography
        variant="h2"
        sx={{ fontSize: "30px", fontWeight: 700, mb: 2 }}
      >
        Список всех менеджеров
      </Typography>

      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>
                <b>ID</b>
              </TableCell>
              <TableCell>
                <b>Имя</b>
              </TableCell>
              <TableCell>
                <b>Email</b>
              </TableCell>
              <TableCell>
                <b>Телефон</b>
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {allManager
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((manager) => (
                <TableRow key={manager.id}>
                  <TableCell>{manager.id}</TableCell>
                  <TableCell>{manager.name}</TableCell>
                  <TableCell>{manager.email}</TableCell>
                  <TableCell>{manager.phone_number}</TableCell>
                </TableRow>
              ))}
          </TableBody>
        </Table>
        <TablePagination
          component="div"
          count={allManager.length}
          page={page}
          onPageChange={handleChangePage}
          rowsPerPage={rowsPerPage}
          onRowsPerPageChange={handleChangeRowsPerPage}
          rowsPerPageOptions={[5, 10, 20]}
          labelRowsPerPage="Строк на странице"
        />
      </TableContainer>
    </Box>
  );
};
