import camera from "../../shared/camera.svg";
import * as React from "react";
import {
  Box,
  FormControl,
  InputLabel,
  Typography,
  Select,
  MenuItem,
  TextField,
  Checkbox,
  Button,
} from "@mui/material";
import ExpandMoreOutlinedIcon from "@mui/icons-material/ExpandMoreOutlined";
import "./applicationForm.scss";
import { useRef } from "react";

const selectItem = [
  { name: "Площадь", number: 10 },
  { name: "Этажность", number: 10 },
  { name: "Цена", number: 10 },
];

const label = { inputProps: { "aria-label": "Checkbox demo" } };

export const ApplicationForm = () => {
  const [age, setAge] = React.useState("");
  const [floor, setFloor] = React.useState(0);

  const fileInputRef = useRef(null);

  const handleClick = () => {
    fileInputRef.current.click();
  };
  const handleChange = (event) => {
    setAge(event.target.value);
  };

  return (
    <div>
      <form action="" className="application">
        <h1 className="application-title">Добавить объект</h1>
        <div className="block1">
          <label className="block1-title">
            Загрузите фото *{" "}
            <span style={{ color: "#00000080" }}>(от 3 до 15)</span>
          </label>

          <div className="block1-photo" onClick={handleClick}>
            <input
              type="file"
              ref={fileInputRef}
              style={{ display: "none" }}
              multiple
            />
            <img src={camera} alt="" />
            <p className="block1-photo-text">ДОБАВИТЬ ФОТО</p>
          </div>
        </div>
        <h3 className="titles">
          ОПИСАНИЕ <span className="last-letter">*</span>
        </h3>
        <div className="block">
          <Box className="box">
            <FormControl fullWidth>
              <InputLabel id="demo-simple-select-label" className="box-title">
                Адрес
              </InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={age}
                label="Age"
                onChange={handleChange}
                IconComponent={ExpandMoreOutlinedIcon}
                sx={{
                  minWidth: 70,
                  "& .MuiSelect-icon": {
                    color: "black",
                    fontSize: "30px",
                  },
                }}
              >
                <MenuItem value={10}>Ten</MenuItem>
                <MenuItem value={20}>Twenty</MenuItem>
                <MenuItem value={30}>Thirty</MenuItem>
              </Select>
            </FormControl>
          </Box>
          {selectItem.map((item, i) => (
            <Box className="form-box box" key={i}>
              <Typography className="box-title">{item.name}</Typography>
              <Select
                value={floor}
                onChange={(e) => setFloor(e.target.value)}
                size="small"
                IconComponent={ExpandMoreOutlinedIcon}
                sx={{
                  minWidth: 70,
                  "& .MuiSelect-icon": {
                    color: "black",
                    fontSize: "30px",
                  },
                }}
              >
                {[...Array(item.number).keys()].map((num) => (
                  <MenuItem key={num} value={num}>
                    {num}
                  </MenuItem>
                ))}
              </Select>
            </Box>
          ))}
        </div>
        <h3 className="titles">
          НОМЕР ТЕЛЕФОНА <span className="last-letter">*</span>
        </h3>
        <div className="block">
          <Box className="box">
            <TextField
              label="Телефон"
              type="tel"
              variant="outlined"
              fullWidth
            />
          </Box>
        </div>
        <h3 className="titles">
          О ВАС <span className="last-letter">*</span>
        </h3>
        <div className="block">
          <Box className="box">
            <FormControl fullWidth>
              <InputLabel id="demo-simple-select-label" className="box-title">
                Кто вы
              </InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={age}
                label="Age"
                onChange={handleChange}
                IconComponent={ExpandMoreOutlinedIcon}
                sx={{
                  minWidth: 70,
                  "& .MuiSelect-icon": {
                    color: "black",
                    fontSize: "30px",
                  },
                }}
              >
                <MenuItem value={10}>Ten</MenuItem>
                <MenuItem value={20}>Twenty</MenuItem>
                <MenuItem value={30}>Thirty</MenuItem>
              </Select>
            </FormControl>
          </Box>
          <Box className="form-box box" maxWidth={574}>
            <Typography variant="body1">
              Срочно{" "}
              <span style={{ fontSize: "20", color: "#00000099" }}>
                (платно)
              </span>
            </Typography>
            <Checkbox {...label} />
          </Box>
        </div>
        <div className="submit">
          <button className="submit-btn">Добавить объект</button>
        </div>
      </form>
    </div>
  );
};
