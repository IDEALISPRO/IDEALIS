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
import { DetailForm } from '../../detailForm/DetailForm';

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
    <>
      <Box sx={{ padding: 4, height: "78vh" }}>
        <Grid container spacing={4} sx={{ height: "100%" }}>
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
              <IconButton
                onClick={handleDownload}
                sx={{ color: "white", width: "48px", height: "auto" }}
              >
                <DownloadIcon />
              </IconButton>
              <IconButton
                onClick={handleClose}
                sx={{ color: "white", width: "48px", height: "auto" }}
              >
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
          <Grid item xs={12} md={6} xl={6}>
            <Box sx={{ width: "100%" }}>
              {/* Большая картинка */}
              <Box
                component="img"
                src={largeImg}
                alt="Main"
                sx={{
                  width: "675px",
                  // borderRadius: 2,
                  mb: 2,
                  cursor: "pointer",
                  display: "block",
                }}
                onClick={() => handleOpen(0)}
              />

              {/* Галерея */}
              <Grid container spacing={1} sx={{ width: "100%", m: 0 }}>
                {images.slice(1).map((img, i) => (
                  <Grid
                    item
                    key={i}
                    sx={{
                      flex: `1 1 calc((100% - ${
                        (images.slice(1).length - 1) * 8
                      }px) / ${images.slice(1).length})`,
                    }}
                  >
                    <Box
                      component="img"
                      src={img}
                      alt={`thumb-${i}`}
                      sx={{
                        width: "100%",
                        height: 120,
                        objectFit: "cover",
                        cursor: "pointer",
                        display: "block",
                      }}
                      onClick={() => handleOpen(i + 1)}
                    />
                  </Grid>
                ))}
              </Grid>
            </Box>
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
                <Typography variant="caption" color="text.disabled">
                  Создано: 02.01.25
                </Typography>
                <br />
                <Typography variant="caption" color="text.disabled">
                  Изменено: 30.04.25
                </Typography>
                <br />
                <Typography variant="caption" color="text.disabled">
                  ID: 123456
                </Typography>
              </Box>
              <Box>
                <Typography variant="caption" color="text.disabled">
                  👁 27
                </Typography>
              </Box>
            </Box>
          </Grid>

          {/* Правый блок: информация */}
          <Grid
            item
            xs={12}
            md={6}
            sx={{
              display: "grid",
              justifyContent: "space-between",
              height: "100%",
              flexDirection: "column",
            }}
          >
            <Box sx={{ mb: 2 }}>
              <Card
                sx={{
                  display: "flex",
                  alignItems: "center",
                  mb: 2,
                  padding: "8px 12px",
                }}
              >
                <Avatar
                  src="/images/agent.jpg"
                  alt="Agent"
                  sx={{ mr: 2, width: "72px", height: "72px" }}
                />
                <CardContent
                  sx={{
                    p: 0,
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "start",
                    justifyContent: "center",
                    height: "100%",
                    width: "100%",
                    paddingTop: "24px",
                  }}
                >
                  <Typography variant="subtitle1">ФИО агента</Typography>
                  <Typography variant="h6">Номер клиента</Typography>
                </CardContent>
              </Card>
            </Box>
            <Box>
              <Typography variant="subtitle1" gutterBottom>
                ОСНОВНАЯ ИНФОРМАЦИЯ
              </Typography>
              <Box item sx={{ display: "flex", gap: 1, mb: 1 }}>
                <Typography color="text.disabled">
                  Количество комнат:
                </Typography>
                <Typography>3</Typography>
              </Box>
              <Box item sx={{ display: "flex", gap: 1, mb: 1 }}>
                <Typography color="text.disabled">Тип недвижимости:</Typography>
                <Typography>Элитка</Typography>
              </Box>
              <Box item sx={{ display: "flex", gap: 1, mb: 1 }}>
                <Typography color="text.disabled">
                  Название жилого комплекса:
                </Typography>
                <Typography>ЖК "Кэмбридж"</Typography>
              </Box>
              <Box item sx={{ display: "flex", gap: 1, mb: 1 }}>
                <Typography color="text.disabled">Площадь:</Typography>
                <Typography>119,55 м2</Typography>
              </Box>
              <Box item sx={{ display: "flex", gap: 1, mb: 1 }}>
                <Typography color="text.disabled">Этаж:</Typography>
                <Typography>Квартира на 12 этаже, а в доме всего 37</Typography>
              </Box>
              <Box item sx={{ display: "flex", gap: 1, mb: 1 }}>
                <Typography color="text.disabled">Состояние:</Typography>
                <Typography>"сдан ПСО" - без ремонта</Typography>
              </Box>
              <Box item sx={{ display: "flex", gap: 1, mb: 1 }}>
                <Typography color="text.disabled">Район и адрес:</Typography>
                <Typography>Южная Магистраль/Советская</Typography>
              </Box>
            </Box>
            <Box
              sx={{
                mt: 2,
                display: "flex",
                justifyContent: "space-between",
                alignItems: "flex-start",
              }}
            >
              <Typography variant="subtitle2" color="text.disabled">
                Цена
              </Typography>
              <Typography variant="h3" sx={{ mt: 0, mb: 0 }}>
                $200,000
              </Typography>
            </Box>
            {/* </Box> */}
          </Grid>
        </Grid>
      </Box>

      <DetailForm/>
    </>
  );
};
