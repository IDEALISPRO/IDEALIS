import { createTheme } from "@mui/material/styles";

export const theme = createTheme({
  palette: {
    mode: "light", // "dark" или "light"
    primary: {
      main: "#00246B;",
      light: "#00246B",
      dark: "#5a1dbf",
      contrastText: "#fff",
    },
    secondary: {
      main: "#00000000",
      light: "#ff79b0",
      dark: "#c60055",
      contrastText: "#fff",
    },
    error: {
      main: "#f44336",
      light: "#e57373",
      dark: "#d32f2f",
      contrastText: "#fff",
    },
    warning: {
      main: "#ff9800",
      light: "#ffb74d",
      dark: "#f57c00",
      contrastText: "#000",
    },
    info: {
      main: "#2196f3",
      light: "#64b5f6",
      dark: "#1976d2",
      contrastText: "#fff",
    },
    success: {
      main: "#4caf50",
      light: "#81c784",
      dark: "#388e3c",
      contrastText: "#fff",
    },
    background: {
      default: "#fafafa",
      paper: "#fff",
    },
    text: {
      primary: "#000",
      secondary: "#555",
      disabled: "#999",
    },
    divider: "#00000099",
  },

  typography: {
    fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
    fontSize: 14,
    fontWeightLight: 300,
    fontWeightRegular: 400,
    fontWeightMedium: 500,
    fontWeightBold: 700,
    h1: {
      fontSize: "6rem",
      fontWeight: 300,
      letterSpacing: "-0.01562em",
    },
    h2: {
      fontSize: "3.75rem",
      fontWeight: 300,
      letterSpacing: "-0.00833em",
    },
    h3: {
      fontSize: "3rem",
      fontWeight: 400,
    },
    h4: {
      fontSize: "2.125rem",
      fontWeight: 400,
    },
    h5: {
      fontSize: "1.5rem",
      fontWeight: 400,
    },
    h6: {
      fontSize: "1.25rem",
      fontWeight: 500,
    },
    subtitle1: {
      fontSize: "24px",
      fontFamily: "Roboto Condensed",
      fontWeight: 600,
      leadingTrim: "none",
      lineHeight: "100%",
      letterSpacing: "-6%",

    },
    subtitle2: {
      fontSize: "0.875rem",
      fontWeight: 500,
    },
    body1: {
      fontSize: "1rem",
      fontWeight: 400,
    },
    body2: {
      fontSize: "0.875rem",
      fontWeight: 400,
    },
    button: {
      fontSize: "0.875rem",
      fontWeight: 400,
      textTransform: "uppercase",
    },
    caption: {
      fontSize: "0.75rem",
      fontWeight: 400,
    },
    overline: {
      fontSize: "0.75rem",
      fontWeight: 400,
      textTransform: "uppercase",
    },
  },

  shape: {
    borderRadius: 4,
  },

  spacing: 8, // базовое значение, 1 unit = 8px

  components: {
    // Настройка компонентов по умолчанию
    MuiButton: {
      styleOverrides: {
        root: {
          backgroundColor: "#00246B",
          padding: "14px 18px",
        },
      },
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          "& .MuiInputBase-root": {
            padding: "0px 18px", // отступы внутри поля
          },
        },
      },
    },
    MuiAppBar: {
      styleOverrides: {
        colorPrimary: {
          backgroundColor: "#8a2be2",
        },
      },
    },
    MuiToggleButton: {
      styleOverrides: {
        root: {
          border: "1px solid #00246B",
          color: "#00246B",
          fontWeight: 600,
          lineHeight: "110.00000000000001%",
          textTransform: "uppercase",
          fontStyle: "regular",
          fontSize: "18px",
          fontFamily: "Roboto Condensed",
          "&.Mui-selected": {
            backgroundColor: "#00246B",
            color: "#fff",
            "&:hover": {
              backgroundColor: "#09306A", // фикс: оставить фон при наведении
            }
          },
        },
      },
    },
    MuiSelect: {
      styleOverrides: {
        root: {
          fontFamily: "Montserrat",
          fontWeight: 500,
          fontStyle: "medium",
          borderRadius: "8px",
          fontSize: "16px",
        },
      },
    },
  },
});

