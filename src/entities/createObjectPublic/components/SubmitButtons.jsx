import { Box, Button } from "@mui/material";

export const SubmitButtons = () => (
  <Box
    sx={{
      width: { sm: "100%", lg: "60%" },
      display: "flex",
      flexDirection: { xs: "column", sm: "row" },
      gap: { xs: "15px", sm: "20px" },
      m: { xs: "30px 0", sm: "50px auto" },
    }}
  >
    <Button
      type="submit"
      variant="contained"
      sx={{
        width: { xs: "100%", sm: "49%" },
        backgroundColor: "transparent",
        color: "#323232",
        "&:hover": { backgroundColor: "#163659", color: "#fff" },
        py: { xs: 1.5, sm: 2 },
        fontSize: { xs: "14px", sm: "16px" },
      }}
    >
      Добавить объект
    </Button>
  </Box>
);
