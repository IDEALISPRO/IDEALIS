import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import InputAdornment from "@mui/material/InputAdornment";
import IconButton from "@mui/material/IconButton";
import SearchIcon from '@mui/icons-material/Search';
import Grid from '@mui/material/Grid';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import React from 'react';
import MenuItem from '@mui/material/MenuItem';
import FormHelperText from '@mui/material/FormHelperText';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Slider from '@mui/material/Slider';

function valuetext(value) {
  return `${value}°C`;
}

const minDistance = 1000;

export const FilterWidget = () => {
  const handleSearchClick = () => {
    alert("Иконка поиска нажата!");
  };

  const [alignment, setAlignment] = React.useState('left');
  const [age, setAge] = React.useState('');
  const [value1, setValue1] = React.useState([100000, 1000000]);


  const handleAlignment = (event, newAlignment) => {
    setAlignment(newAlignment);
  };
  const handleChange = (event) => {
    setAge(event.target.value);
  };
  const handleChangeSlider = (event, newValue, activeThumb) => {
    if (activeThumb === 0) {
      setValue1([Math.min(newValue[0], value1[1] - minDistance), value1[1]]);
      console.log(value1)
    } else {
      setValue1([value1[0], Math.max(newValue[1], value1[0] + minDistance)]);
    }
  };

  return (
    <section>
      <Grid container spacing={2} alignItems="center">
        <Grid item size={{ xs: 8 }}>
          <TextField
            fullWidth
            id="outlined-basic"
            label="Найти вариант мечты"
            variant="outlined"
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton
                    onClick={handleSearchClick}
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
          <Button fullWidth variant="contained" color="primary">
            Поиск
          </Button>
        </Grid>

      </Grid>
      <ToggleButtonGroup
        value={alignment}
        exclusive
        onChange={handleAlignment}
        aria-label="text alignment"
        fullWidth
        sx={{ width: "100%", margin: "18px 0px" }}
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
      <div style={{ display: "grid", gap: "18px" }}>
        <Grid container spacing={3} sx={{ gap: "18px" }} alignItems="center">
          <Grid item size={{ xs: 4 }}>
            <Select
              value={age}
              onChange={handleChange}
              displayEmpty
              sx={{ width: "100%" }}
              inputProps={{ 'aria-label': 'Without label' }}
            >
              <MenuItem value="">
                <em>None</em>
              </MenuItem>
              <MenuItem value={10}>Ten</MenuItem>
              <MenuItem value={20}>Twenty</MenuItem>
              <MenuItem value={30}>Thirty</MenuItem>
            </Select>
          </Grid>
          <Grid item size={{ xs: 4 }}>
            <Select
              value={age}
              onChange={handleChange}
              displayEmpty
              sx={{ width: "100%" }}
              inputProps={{ 'aria-label': 'Without label' }}
            >
              <MenuItem value="">
                <em>None</em>
              </MenuItem>
              <MenuItem value={10}>Ten</MenuItem>
              <MenuItem value={20}>Twenty</MenuItem>
              <MenuItem value={30}>Thirty</MenuItem>
            </Select>
          </Grid>
          <Grid item size={{ xs: 4 }}>
            <Select
              value={age}
              onChange={handleChange}
              displayEmpty
              sx={{ width: "100%" }}
              inputProps={{ 'aria-label': 'Without label' }}
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
        <Grid container spacing={3} sx={{ gap: "18px" }} alignItems="center">
          <Grid item size={{ xs: 4 }}>
            <Select
              value={age}
              onChange={handleChange}
              displayEmpty
              sx={{ width: "100%" }}
              inputProps={{ 'aria-label': 'Without label' }}
            >
              <MenuItem value="">
                <em>None</em>
              </MenuItem>
              <MenuItem value={10}>Ten</MenuItem>
              <MenuItem value={20}>Twenty</MenuItem>
              <MenuItem value={30}>Thirty</MenuItem>
            </Select>
          </Grid>
          <Grid item size={{ xs: 4 }}>
            <Select
              value={age}
              onChange={handleChange}
              displayEmpty
              sx={{ width: "100%" }}
              inputProps={{ 'aria-label': 'Without label' }}
            >
              <MenuItem value="">
                <em>None</em>
              </MenuItem>
              <MenuItem value={10}>Ten</MenuItem>
              <MenuItem value={20}>Twenty</MenuItem>
              <MenuItem value={30}>Thirty</MenuItem>
            </Select>
          </Grid>
          <Grid item size={{ xs: 4 }}>
            <Select
              value={age}
              onChange={handleChange}
              displayEmpty
              sx={{ width: "100%" }}
              inputProps={{ 'aria-label': 'Without label' }}
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
      </div>
      <Slider
        getAriaLabel={() => 'Minimum distance'}
        value={value1}
        onChange={handleChangeSlider}
        valueLabelDisplay="auto"
        min={100000}       // минимальное значение
        max={10000000}      // максимальное значение
        step={100000}
        getAriaValueText={valuetext}
        disableSwap
      />
    </section >
  );
};
