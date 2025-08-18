import React, { useState } from "react";
import {
  Box,
  Grid,
  Typography,
  Avatar,
  Card,
  CardContent,
  Dialog,
  DialogContent,
  IconButton,
} from "@mui/material";

import CloseIcon from "@mui/icons-material/Close";
import ArrowBack from "@mui/icons-material/ArrowBack";
import ArrowForward from "@mui/icons-material/ArrowForward";
import DownloadIcon from "@mui/icons-material/Download";

import largeImg from "../../../shared/temp/img/03ad2f4eb35774c3ea569533ab24d48e94fd25f8.jpg";
import smallImg from "../../../shared/temp/img/3404a013138ac987d6c7aa26c296928b1da617da.jpg";
import smallImg_1 from "../../../shared/temp/img/ecfd5332a506d02d8db4ff3b28b36e1743e4467d.jpg";

export const ObjectDetails = () => {
  const images = [largeImg, smallImg, smallImg_1, smallImg];
  const [open, setOpen] = useState(false);
  const [index, setIndex] = useState(0);

  const handleOpen = (i) => {
    setIndex(i);
    setOpen(true);
  };

  const handleClose = () => setOpen(false);

  const goPrev = () =>
    setIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  const goNext = () =>
    setIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));

  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = images[index];
    link.download = `image-${index + 1}.jpg`;
    link.click();
  };

  return (
    <Box sx={{ padding: 4 }}>
      <Grid container spacing={4}>
        {/* Модалка с картинкой */}
        <Dialog
  open={open}
  onClose={handleClose}
  fullScreen
  PaperProps={{
    sx: {
      backgroundColor: "rgba(0,0,0,0.9)", // фон как на скрине
    },
  }}
>
  {/* Кнопки сверху */}
  <Box
    sx={{
      position: "absolute",
      top: 16,
      right: 16,
      display: "flex",
      gap: 1,
      zIndex: 10,
    }}
  >
    <IconButton onClick={handleDownload} sx={{ color: "white", width: "48px", height: "auto" }}>
      <DownloadIcon />
    </IconButton>
    <IconButton onClick={handleClose} sx={{ color: "white", width: "48px", height: "auto" }}>
      <CloseIcon />
    </IconButton>
  </Box>

  <DialogContent
    sx={{
      p: 0,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      height: "100vh",
      position: "relative",
    }}
  >
    {/* Левая стрелка */}
    <IconButton
      onClick={goPrev}
      sx={{
        position: "absolute",
        padding: "24px",
        left: 24,
        color: "white",
        backgroundColor: "#737373",
        transition: "0.6s",
        "&:hover": { backgroundColor: "#808080" },
      }}
    >
      <ArrowBack />
    </IconButton>

    {/* Картинка */}
    <img
      src={images[index]}
      alt={`full-${index}`}
      style={{
        maxWidth: "80%",
        maxHeight: "90%",
        height: "100%",
        objectFit: "cover",
        borderRadius: 8,
      }}
    />

    {/* Правая стрелка */}
    <IconButton
      onClick={goNext}
      sx={{
        position: "absolute",
        right: 24,
        padding: "24px",
        color: "white",
        backgroundColor: "#163659",
        transition: "0.6s",
        "&:hover": { backgroundColor: "#204065" },
      }}
    >
      <ArrowForward />
    </IconButton>
  </DialogContent>
</Dialog>

      {/* Левый блок: картинки */}
<Grid item xs={12} md={6}>
  <Box sx={{ width: "100%" }}>
    {/* Большая картинка */}
    <Box
      component="img"
      src={largeImg}
      alt="Main"
      sx={{
        width: "100%",
        borderRadius: 2,
        mb: 2,
        cursor: "pointer",
        display: "block",
      }}
      onClick={() => handleOpen(0)}
    />

    {/* Галерея */}
    <Grid container spacing={1} sx={{ width: "100%", m: 0 }}>
      {images.slice(1).map((img, i) => (
        <Grid item xs={6} sm={4} md={3} key={i}>
          <Box
            component="img"
            src={img}
            alt={`thumb-${i}`}
            sx={{
              width: "100%",
              height: 120,
              objectFit: "cover",   // всегда растягивается в ячейку
              borderRadius: 1,
              cursor: "pointer",
              display: "block",
            }}
            onClick={() => handleOpen(i + 1)}
          />
        </Grid>
      ))}
    </Grid>
  </Box>
</Grid>


        {/* Правый блок: информация */}
        <Grid item xs={12} md={6}>
          <Card sx={{ display: "flex", alignItems: "center", mb: 2, p: 1 }}>
            <Avatar src="/images/agent.jpg" alt="Agent" sx={{ mr: 2 }} />
            <CardContent sx={{ p: 0 }}>
              <Typography variant="subtitle1">ФИО агента</Typography>
              <Typography variant="body2">Номер клиента</Typography>
            </CardContent>
          </Card>

          <Box>
            <Typography variant="h6" gutterBottom>
              ОСНОВНАЯ ИНФОРМАЦИЯ
            </Typography>
            <Typography>Количество комнат: 3</Typography>
            <Typography>Тип недвижимости: Элитка</Typography>
            <Typography>Название жилого комплекса: ЖК "Кэмбридж"</Typography>
            <Typography>Площадь: 119,55 м2</Typography>
            <Typography>Этаж: Квартира на 12 этаже, а в доме всего 37</Typography>
            <Typography>Состояние: "сдан ПСО" - без ремонта</Typography>
            <Typography>Район и адрес: Южная Магистраль/Советская</Typography>

            <Box sx={{ mt: 2 }}>
              <Typography variant="subtitle2" color="text.secondary">
                Цена
              </Typography>
              <Typography variant="h5">$200,000</Typography>
            </Box>
          </Box>
        </Grid>
      </Grid>

      {/* Нижняя информация */}
      <Box
        sx={{
          mt: 3,
          display: "flex",
          justifyContent: "space-between",
          color: "text.secondary",
        }}
      >
        <Box>
          <Typography variant="caption">Создано: 02.01.25</Typography>
          <br />
          <Typography variant="caption">Изменено: 30.04.25</Typography>
          <br />
          <Typography variant="caption">ID: 123456</Typography>
        </Box>
        <Box>
          <Typography variant="caption">👁 27</Typography>
        </Box>
      </Box>
    </Box>
  );
};
