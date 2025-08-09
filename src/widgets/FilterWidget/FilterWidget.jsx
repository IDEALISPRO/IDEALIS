import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import InputAdornment from "@mui/material/InputAdornment";
import IconButton from "@mui/material/IconButton";
import SearchIcon from '@mui/icons-material/Search';
import Grid from '@mui/material/Grid';

export const FilterWidget = () => {
  const handleSearchClick = () => {
    alert("Иконка поиска нажата!");
  };

  return (
    <section>
      <Grid container spacing={2} alignItems="center">
        <Grid item size={{xs: 8}}>
          <TextField
            fullWidth
            id="outlined-basic"
            label="Поиск"
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
        <Grid item size={{xs: 4}}>
          <Button fullWidth variant="contained" color="primary">
            Поиск
          </Button>
        </Grid>
      </Grid>
    </section>
  );
};
