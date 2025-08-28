import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import InputAdornment from "@mui/material/InputAdornment";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";
import Grid from "@mui/material/Grid";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import React, { useState } from "react";
import MenuItem from "@mui/material/MenuItem";
import FormHelperText from "@mui/material/FormHelperText";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Slider from "@mui/material/Slider";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";

function valuetext(value) {
  return `${value}°C`;
}
const minDistance = 1000;

export const FilterWidget = () => {
  const handleSearchClick = () => {
    alert("Иконка поиска нажата!");
  };

  const [alignment, setAlignment] = React.useState("left");
  const [age, setAge] = React.useState("");
  const [value1, setValue1] = React.useState([100000, 1000000]);
  const [currency, setCurrency] = React.useState("som");
  const [open, setOpen] = useState(false);
  const [formData, setFormData] = useState({});

  const handleCurrency = (event, newCurrency) => {
    setCurrency(newCurrency);
  };
  const handleAlignment = (event, newAlignment) => {
    if (newAlignment !== null) {
      setAlignment(newAlignment);
    }
  };

  const handleChange = (event) => {
    setAge(event.target.value);
  };
  const handleChangeSlider = (event, newValue, activeThumb) => {
    if (activeThumb === 0) {
      setValue1([Math.min(newValue[0], value1[1] - minDistance), value1[1]]);
      console.log(value1);
    } else {
      setValue1([value1[0], Math.max(newValue[1], value1[0] + minDistance)]);
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setFormData({
      age,
      value1,
      currency,
      alignment,
    });
    setOpen(true);
  };

  const handleReset = () => {
    setAge("");
    setValue1([100000, 1000000]);
    setCurrency("som");
    setAlignment("left");
  };

  const handleClose = () => setOpen(false);

  return (
    <>
      <form onSubmit={handleSubmit} onReset={handleReset}>
        <section>
          <Grid container spacing={2} alignItems="center">
            <Grid item size={{ xs: 8 }}>
              <TextField
                id="outlined-basic"
                label="Найти вариант мечты"
                variant="outlined"
                sx={{ width: "100%" }}
                InputLabelProps={{
                  sx: {
                    width: "30%",
                    whiteSpace: "nowrap",
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                  },
                }}
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton
                        onClick={() => console.log("Search clicked")}
                        edge="end"
                        aria-label="search"
                      >
                        <SearchIcon />
                      </IconButton>
                    </InputAdornment>
                  ),
                }}
              />
            </Grid>
            <Grid item size={{ xs: 4 }}>
              <Button
                fullWidth
                variant="contained"
                color="primary"
                type="submit"
              >
                Поиск
              </Button>
            </Grid>
          </Grid>
          <Box
            sx={{
              display: { xs: "none", sm: "block" },
            }}
          >
            <ToggleButtonGroup
              value={alignment}
              exclusive
              onChange={handleAlignment}
              aria-label="text alignment"
              fullWidth
              sx={{
                width: "100%",
                margin: "18px 0px",
                fontFamily: "Roboto Condensed",
                border: "1px solid #00000066",
              }}
            >
              <ToggleButton value="left" sx={{ flex: 4 }}>
                ВСЕ ОБЪЕКТЫ
              </ToggleButton>
              <ToggleButton value="center" sx={{ flex: 4 }}>
                ВЫКУПНЫЕ ВАРИАНТЫ
              </ToggleButton>
              <ToggleButton value="right" sx={{ flex: 4 }}>
                ТОП-50
              </ToggleButton>
              <ToggleButton value="justify" sx={{ flex: 4 }}>
                ГОРЯЧИЕ ВАРИАНТЫ
              </ToggleButton>
            </ToggleButtonGroup>
          </Box>
          <Box component="section" sx={{ alignItems: "center" }}>
            <Grid
              container
              columnSpacing={2}
              sx={{
                marginTop: {
                  xs: "20px",
                  sm: "0px",
                },
                gap: "8px",
                display: "flex",
                justifyContent: "space-between",
              }}
            >
              <Grid item size={{ xs: 12, sm: 6, md: 4 }}>
                <Select
                  value={age}
                  onChange={handleChange}
                  displayEmpty
                  sx={{ width: "100%" }}
                  fullWidth
                  inputProps={{ "aria-label": "Without label" }}
                >
                  <MenuItem value="">
                    <em>Агент</em>
                  </MenuItem>
                  <MenuItem value={10}>Ten</MenuItem>
                  <MenuItem value={20}>Twenty</MenuItem>
                  <MenuItem value={30}>Thirty</MenuItem>
                </Select>
              </Grid>

              <Grid item size={{ xs: 12, sm: 6, md: 4 }}>
                <Select
                  value={age}
                  onChange={handleChange}
                  displayEmpty
                  sx={{ width: "100%" }}
                  fullWidth
                  inputProps={{ "aria-label": "Without label" }}
                >
                  <MenuItem value="">
                    <em>None</em>
                  </MenuItem>
                  <MenuItem value={10}>Ten</MenuItem>
                  <MenuItem value={20}>Twenty</MenuItem>
                  <MenuItem value={30}>Thirty</MenuItem>
                </Select>
              </Grid>

              <Grid item size={{ xs: 12, sm: 6, md: 4 }}>
                <Select
                  value={age}
                  onChange={handleChange}
                  displayEmpty
                  sx={{ width: "100%" }}
                  fullWidth
                  inputProps={{ "aria-label": "Without label" }}
                >
                  <MenuItem value="">
                    <em>None</em>
                  </MenuItem>
                  <MenuItem value={10}>Ten</MenuItem>
                  <MenuItem value={20}>Twenty</MenuItem>
                  <MenuItem value={30}>Thirty</MenuItem>
                </Select>
              </Grid>

              <Grid item size={{ xs: 12, sm: 6, md: 4 }}>
                <Select
                  value={age}
                  onChange={handleChange}
                  displayEmpty
                  sx={{ width: "100%" }}
                  fullWidth
                  inputProps={{ "aria-label": "Without label" }}
                >
                  <MenuItem value="">
                    <em>None</em>
                  </MenuItem>
                  <MenuItem value={10}>Ten</MenuItem>
                  <MenuItem value={20}>Twenty</MenuItem>
                  <MenuItem value={30}>Thirty</MenuItem>
                </Select>
              </Grid>

              <Grid item size={{ xs: 12, sm: 6, md: 4 }}>
                <Select
                  value={age}
                  onChange={handleChange}
                  displayEmpty
                  sx={{ width: "100%" }}
                  fullWidth
                  inputProps={{ "aria-label": "Without label" }}
                >
                  <MenuItem value="">
                    <em>None</em>
                  </MenuItem>
                  <MenuItem value={10}>Ten</MenuItem>
                  <MenuItem value={20}>Twenty</MenuItem>
                  <MenuItem value={30}>Thirty</MenuItem>
                </Select>
              </Grid>

              <Grid item size={{ xs: 12, sm: 6, md: 4 }}>
                <Select
                  value={age}
                  onChange={handleChange}
                  displayEmpty
                  sx={{ width: "100%" }}
                  fullWidth
                  inputProps={{ "aria-label": "Without label" }}
                >
                  <MenuItem value="">
                    <em>None</em>
                  </MenuItem>
                  <MenuItem value={10}>Ten</MenuItem>
                  <MenuItem value={20}>Twenty</MenuItem>
                  <MenuItem value={30}>Thirty</MenuItem>
                </Select>
              </Grid>
            </Grid>
          </Box>
          <Grid
            container
            spacing={2}
            sx={{
              width: "100%",
              marginTop: "18px",
            }}
          >
            <Grid item size={{ xs: 12, md: 6 }} sx={{ padding: "25px 0px" }}>
              <Box
                component="section"
                sx={{
                  padding: "0px 24px",
                  border: "1px solid #00000066",
                  borderRadius: 2,
                  gap: "8px",
                  display: "grid",
                }}
              >
                <Box
                  sx={{
                    display: "flex",
                    flexWrap: "wrap",
                    justifyContent: "space-between",
                    alignItems: "center",
                  }}
                >
                  <Typography variant="h6">Цена</Typography>
                  <Box sx={{ margin: "18px 0px" }}>
                    <Typography
                      variant="body1"
                      color="divider"
                      component="span"
                    >
                      Валюта:
                    </Typography>
                    <ToggleButtonGroup
                      value={currency}
                      exclusive
                      color="primary"
                      onChange={handleCurrency}
                      aria-label="text alignment"
                      sx={{ marginLeft: 1 }}
                    >
                      <ToggleButton
                        value="som"
                        sx={{ border: "#00000000", padding: "5px 10px" }}
                        aria-label="left aligned"
                      >
                        Сом
                      </ToggleButton>
                      <ToggleButton
                        value="dollar"
                        sx={{ border: "#00000000", padding: "5px 10px" }}
                        aria-label="centered"
                      >
                        Доллар
                      </ToggleButton>
                    </ToggleButtonGroup>
                  </Box>
                </Box>
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                  }}
                >
                  <Typography
                    color="primary"
                    sx={{
                      fontSize: { sm: "18px", md: "28px" },
                      fontWeight: { sm: 400, md: 600 },
                      fontFamily: "Roboto Condensed",
                    }}
                  >
                    От {value1[0].toLocaleString("ru-RU")} сом
                  </Typography>

                  <Typography
                    color="primary"
                    sx={{
                      fontSize: { sm: "18px", md: "28px" },
                      fontWeight: { sm: 400, md: 600 },
                      fontFamily: "Roboto Condensed",
                    }}
                  >
                    До {value1[1].toLocaleString("ru-RU")} сом
                  </Typography>
                </Box>
                <Slider
                  getAriaLabel={() => "Minimum distance"}
                  value={value1}
                  onChange={handleChangeSlider}
                  valueLabelDisplay="auto"
                  min={100000}
                  max={10000000}
                  step={100000}
                  getAriaValueText={valuetext}
                  disableSwap
                />
              </Box>
            </Grid>

            <Grid
              item
              size={{ xs: 12, md: 6 }}
              sx={{ gap: "18px", display: "grid" }}
            >
              <Select
                value={age}
                onChange={handleChange}
                displayEmpty
                sx={{ width: "100%" }}
                fullWidth
                inputProps={{ "aria-label": "Without label" }}
              >
                <MenuItem value="">
                  <em>None</em>
                </MenuItem>
                <MenuItem value={10}>Ten</MenuItem>
                <MenuItem value={20}>Twenty</MenuItem>
                <MenuItem value={30}>Thirty</MenuItem>
              </Select>
              <Select
                value={age}
                onChange={handleChange}
                displayEmpty
                sx={{ width: "100%" }}
                fullWidth
                inputProps={{ "aria-label": "Without label" }}
              >
                <MenuItem value="">
                  <em>None</em>
                </MenuItem>
                <MenuItem value={10}>Ten</MenuItem>
                <MenuItem value={20}>Twenty</MenuItem>
                <MenuItem value={30}>Thirty</MenuItem>
              </Select>
              <Select
                value={age}
                onChange={handleChange}
                displayEmpty
                sx={{ width: "100%" }}
                fullWidth
                inputProps={{ "aria-label": "Without label" }}
              >
                <MenuItem value="">
                  <em>None</em>
                </MenuItem>
                <MenuItem value={10}>Ten</MenuItem>
                <MenuItem value={20}>Twenty</MenuItem>
                <MenuItem value={30}>Thirty</MenuItem>
              </Select>
            </Grid>
          </Grid>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              gap: { xs: "5px", sm: "10px" },
              marginTop: "18px",
            }}
          >
            <Button
              variant="outlined"
              color="primary"
              type="reset"
              sx={{
                width: "100%",
                padding: { xs: "10px 2px", sm: "14px 18px" },
                fontFamily: "Roboto Condensed",
                backgroundColor: "transparent",
                color: "primary.main",
                borderColor: "primary.main",
                textDecoration: "underline",
                "&:hover": {
                  backgroundColor: "#f5faff",
                  borderColor: "primary.main",
                  color: "primary.main",
                },
                // mr: 2
              }}
            >
              Сбросить фильтры
            </Button>
            <Button
              variant="contained"
              color="primary"
              type="submit"
              sx={{
                width: "100%",
                padding: { xs: "10px 2px", sm: "14px 18px" },
                fontFamily: "Roboto Condensed",
              }}
            >
              Применить фильтры
            </Button>
          </Box>
        </section>
      </form>

      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Данные фильтра</DialogTitle>
        <DialogContent>
          <div>Возраст: {formData.age?.toString()}</div>
          <div>
            Цена: {formData.value1?.[0]?.toLocaleString()} – {formData.value1?.[1]?.toLocaleString()}
          </div>
          <div>Валюта: {formData.currency?.toString()}</div>
          <div>Тип: {formData.alignment?.toString()}</div>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>OK</Button>
        </DialogActions>
      </Dialog>
    </>
  );
};
