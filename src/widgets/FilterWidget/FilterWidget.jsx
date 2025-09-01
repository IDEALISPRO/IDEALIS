import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import InputAdornment from "@mui/material/InputAdornment";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";
import Grid from "@mui/material/Grid";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import React, { useEffect, useState } from "react";
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
import { useDispatch } from "react-redux";
import {
  doFilters,
  doHomeSearch,
} from "../../app/store/reducers/admin/homeSlice/homeThunk";
import { useAgents } from "../../app/store/reducers/admin/agents/agentsSlice";
import { getAgentsWithoutToken } from "../../app/store/reducers/admin/agents/agentsThunks";

function valuetext(value) {
  return `${value}°C`;
}
const minDistance = 1000;

export const FilterWidget = ({ handleSubmit }) => {
  const [value1, setValue1] = React.useState([100000, 1000000]);
  const [currency, setCurrency] = React.useState("KGS");
  const [alignment, setAlignment] = useState("all");

  const [state, setState] = useState({
    filters: {
      dealType: "",
      propertyType: "",
      rooms: "",
      district: "",
      series: "",
      agent: "",
      price_min: value1[0],
      price_max: value1[1],
      currency: currency,
      alignment: alignment,
      status: "",
      repair: "",
      extra: "",
    },
    sort: "price:asc",
    page: 1,
    limit: 20,
  });
  const [search, setSearch] = useState({
    search: "",
  });
  const handleSearchClick = () => {
    alert("Иконка поиска нажата!");
  };

  const dispatch = useDispatch();

  const [age, setAge] = React.useState("");
  const [open, setOpen] = useState(false);
  const [formData, setFormData] = useState({});

  // отдельные состояния для каждого селекта
  // const [dealType, setDealType] = useState("");
  // const [propertyType, setPropertyType] = useState("");
  // const [rooms, setRooms] = useState("");
  // const [district, setDistrict] = useState("");
  // const [series, setSeries] = useState("");
  // const [agent, setAgent] = useState("");
  // const [status, setStatus] = useState("");
  // const [extra, setExtra] = useState("");
  // const [repair, setRepair] = useState("");

  // // обработчики
  // const handleDealType = (e) => setDealType(e.target.value);
  // const handlePropertyType = (e) => setPropertyType(e.target.value);
  // const handleRooms = (e) => setRooms(e.target.value);
  // const handleDistrict = (e) => setDistrict(e.target.value);
  // const handleSeries = (e) => setSeries(e.target.value);
  // const handleAgent = (e) => setAgent(e.target.value);
  // const handleStatus = (e) => setStatus(e.target.value);
  // const handleExtra = (e) => setExtra(e.target.value);
  // const handleRepair = (e) => setRepair(e.target.value);

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
    } else {
      setValue1([value1[0], Math.max(newValue[1], value1[0] + minDistance)]);
    }
  };

  const handleReset = () => {
    setAge("");
    setValue1([100000, 1000000]);
    setCurrency("som");
    setAlignment("left");
  };

  const handleSelectChange = (event) => {
    const { name, value } = event.target;
    setState((prev) => ({
      ...prev,
      filters: { ...prev.filters, [name]: value },
    }));
  };
  const onChange = (e) => {
    const { name, value } = e.target;
    setSearch((prev) => ({
      ...prev,
      [name]: value,
    }));
  };
  const onSearchSubmit = (e) => {
    e.preventDefault();
    dispatch(doHomeSearch(search));
  };
  const { list } = useAgents();

  useEffect(() => {
    dispatch(getAgentsWithoutToken());
  }, []);

  const handleClose = () => setOpen(false);
  useEffect(() => {
    setState((prev) => ({
      ...prev,
      filters: {
        ...prev.filters,

        price_min: value1[0],
        price_max: value1[1],
        currency: currency,
        alignment: alignment,
      },
    }));
  }, [value1, currency, alignment]);

  const onFormSubmit = async (e) => {
    e.preventDefault();

    try {
      const result = await handleSubmit(state.filters);

      if (result?.error) {
        console.log("Ошибка от сервера:", result.error);
        return;
      }

      // navigate("/");
    } catch (err) {
      console.log("Ошибка при отправке:", err);
    }
  };

  return (
    <>
      <form onSubmit={onSearchSubmit}>
        <Grid container spacing={2} alignItems="center">
          <Grid item size={{ xs: 8 }}>
            <TextField
              id="outlined-basic"
              label="Найти вариант мечты"
              variant="outlined"
              sx={{ width: "100%" }}
              onChange={onChange}
              name="search"
              value={search.search}
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
            <Button fullWidth variant="contained" color="primary" type="submit">
              Поиск
            </Button>
          </Grid>
        </Grid>
      </form>
      <form onSubmit={onFormSubmit} onReset={handleReset}>
        <section>
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
              <ToggleButton value="all" sx={{ flex: 4 }}>
                ВСЕ ОБЪЕКТЫ
              </ToggleButton>
              <ToggleButton value="buyout" sx={{ flex: 4 }}>
                ВЫКУПНЫЕ ВАРИАНТЫ
              </ToggleButton>
              <ToggleButton value="top50" sx={{ flex: 4 }}>
                ТОП-50
              </ToggleButton>
              <ToggleButton value="hot" sx={{ flex: 4 }}>
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
                  value={state.filters.dealType}
                  name="dealType"
                  onChange={handleSelectChange}
                  displayEmpty
                  sx={{ width: "100%" }}
                  fullWidth
                  inputProps={{ "aria-label": "Without label" }}
                >
                  <MenuItem value="">
                    <em>Тип сделки</em>
                  </MenuItem>
                  <MenuItem value={"Продажа"}>Продажа</MenuItem>
                  <MenuItem value={"Аренда"}>Аренда</MenuItem>
                </Select>
              </Grid>

              <Grid item size={{ xs: 12, sm: 6, md: 4 }}>
                <Select
                  value={state.filters.propertyType}
                  name="propertyType"
                  onChange={handleSelectChange}
                  displayEmpty
                  sx={{ width: "100%" }}
                  fullWidth
                  inputProps={{ "aria-label": "Without label" }}
                >
                  <MenuItem value="">
                    <em>Тип недвижимости</em>
                  </MenuItem>

                  <MenuItem value={"flat"}>Квартира</MenuItem>
                  <MenuItem value={"house"}>Дом</MenuItem>
                  <MenuItem value={"office"}>Офис</MenuItem>
                  <MenuItem value={"land"}>Земельный участок</MenuItem>
                </Select>
              </Grid>

              <Grid item size={{ xs: 12, sm: 6, md: 4 }}>
                <Select
                  value={state.filters.rooms}
                  name="rooms"
                  onChange={handleSelectChange}
                  displayEmpty
                  sx={{ width: "100%" }}
                  fullWidth
                  inputProps={{ "aria-label": "Without label" }}
                >
                  <MenuItem value="">
                    <em>Количество комнат :</em>
                  </MenuItem>
                  <MenuItem value={"1"}>1 комната</MenuItem>
                  <MenuItem value={"2"}>2 комнаты</MenuItem>
                  <MenuItem value={"3"}>3 комнаты</MenuItem>
                  <MenuItem value={"4"}>4 комнаты</MenuItem>
                </Select>
              </Grid>

              <Grid item size={{ xs: 12, sm: 6, md: 4 }}>
                <Select
                  value={state.filters.district}
                  name="district"
                  onChange={handleSelectChange}
                  displayEmpty
                  sx={{ width: "100%" }}
                  fullWidth
                  inputProps={{ "aria-label": "Without label" }}
                >
                  <MenuItem value="">
                    <em>Район</em>
                  </MenuItem>
                  <MenuItem value={"1"}>Ten</MenuItem>
                  <MenuItem value={"2"}>Twenty</MenuItem>
                  <MenuItem value={"3"}>Thirty</MenuItem>
                </Select>
              </Grid>

              <Grid item size={{ xs: 12, sm: 6, md: 4 }}>
                <Select
                  value={state.filters.series}
                  name="series"
                  onChange={handleSelectChange}
                  displayEmpty
                  sx={{ width: "100%" }}
                  fullWidth
                  inputProps={{ "aria-label": "Without label" }}
                >
                  <MenuItem value="">
                    <em>Серия дома</em>
                  </MenuItem>
                  <MenuItem value="elitka">Элитка</MenuItem>
                  <MenuItem value="kirpich">Кирпичный</MenuItem>
                  <MenuItem value="panel">Панельный</MenuItem>
                  <MenuItem value="monolit">Монолитный</MenuItem>
                  <MenuItem value="blok">Блочный</MenuItem>
                  <MenuItem value="stalin">Сталинка</MenuItem>
                  <MenuItem value="hrush">Хрущёвка</MenuItem>
                  <MenuItem value="kirpich-monolit">
                    Кирпично-монолитный
                  </MenuItem>
                  <MenuItem value="taunhaus">Таунхаус</MenuItem>
                </Select>
              </Grid>

              <Grid item size={{ xs: 12, sm: 6, md: 4 }}>
                <Select
                  value={state.filters.agent}
                  name="agent"
                  onChange={handleSelectChange}
                  displayEmpty
                  sx={{ width: "100%" }}
                  fullWidth
                  inputProps={{ "aria-label": "Without label" }}
                >
                  <MenuItem value="">
                    <em>Агенты</em>
                  </MenuItem>
                  {list.map((item) => (
                    <MenuItem value={item.name}>{item.name}</MenuItem>
                  ))}
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
                        value="KGS"
                        sx={{ border: "#00000000", padding: "5px 10px" }}
                        aria-label="left aligned"
                      >
                        Сом
                      </ToggleButton>
                      <ToggleButton
                        value="USDT"
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
                    От {value1[0].toLocaleString("ru-RU")}{" "}
                    {currency === "KGS" ? "сом" : "доллар"}
                  </Typography>

                  <Typography
                    color="primary"
                    sx={{
                      fontSize: { sm: "18px", md: "28px" },
                      fontWeight: { sm: 400, md: 600 },
                      fontFamily: "Roboto Condensed",
                    }}
                  >
                    До {value1[1].toLocaleString("ru-RU")}{" "}
                    {currency === "KGS" ? "сом" : "доллар"}
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
                value={state.filters.status}
                name="status"
                onChange={handleSelectChange}
                displayEmpty
                sx={{ width: "100%" }}
                fullWidth
                inputProps={{ "aria-label": "Without label" }}
              >
                <MenuItem value="">
                  <em>Статус объекта</em>
                </MenuItem>
                <MenuItem value={"rented"}>Сдан</MenuItem>
                <MenuItem value={"Under_construction"}>
                  На стадии строительства
                </MenuItem>
                {/* <MenuItem value={30}>Thirty</MenuItem> */}
              </Select>
              <Select
                value={state.filters.extra}
                name="extra"
                onChange={handleSelectChange}
                displayEmpty
                sx={{ width: "100%" }}
                fullWidth
                inputProps={{ "aria-label": "Without label" }}
              >
                <MenuItem value="">
                  <em>Дополнительные фильтры</em>
                </MenuItem>
                <MenuItem value={10}>Срочный вариант</MenuItem>
                <MenuItem value={20}>Эксклюзивные договора</MenuItem>
                <MenuItem value={30}>Выкупной вариант</MenuItem>
                <MenuItem value={30}>Без рекламы</MenuItem>
              </Select>
              <Select
                value={state.filters.repair}
                name="repair"
                onChange={handleSelectChange}
                displayEmpty
                sx={{ width: "100%" }}
                fullWidth
                inputProps={{ "aria-label": "Without label" }}
              >
                <MenuItem value="">
                  <em>Состояние ремонта</em>
                </MenuItem>
                <MenuItem value={10}>ПСО</MenuItem>
                <MenuItem value={20}>Евроремонт</MenuItem>
                <MenuItem value={30}>Косметический ремонт</MenuItem>
                <MenuItem value={30}>Дизайнерский ремонт</MenuItem>
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
            Цена: {formData.value1?.[0]?.toLocaleString()} –{" "}
            {formData.value1?.[1]?.toLocaleString()}
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
