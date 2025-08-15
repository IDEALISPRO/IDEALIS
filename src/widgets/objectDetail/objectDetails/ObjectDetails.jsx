import React from "react";
import {
  Box,
  Grid,
  Typography,
  Avatar,
  Card,
  CardContent,
} from "@mui/material";
import largeImg from "../../../shared/temp/img/03ad2f4eb35774c3ea569533ab24d48e94fd25f8.jpg";
import smallImg from "../../../shared/temp/img/3404a013138ac987d6c7aa26c296928b1da617da.jpg";
import smallImg_1 from "../../../shared/temp/img/ecfd5332a506d02d8db4ff3b28b36e1743e4467d.jpg";

export const ObjectDetails = () => {
  return (
    <Box sx={{ padding: 4 }}>
      <Grid container spacing={4}>
        {/* Левый блок: большая картинка и мини-галерея */}
        <Grid item xs={12} md={6}>
          <Box>
            {/* Большая картинка */}
            <Box
              component="img"
              src={largeImg}
              alt="Main"
              sx={{ width: "100%", borderRadius: 2, mb: 2 }}
            />
            {/* Галерея */}
            <Grid container spacing={1}>
              <Grid item xs={4}>
                <Box
                  component="img"
                  src={smallImg}
                  alt="1"
                  sx={{
                    width: "100%",
                    height: "100px",
                    objectFit: "cover",
                    borderRadius: 1,
                  }}
                />
              </Grid>
              <Grid item xs={4}>
                <Box
                  component="img"
                  src={smallImg_1}
                  alt="2"
                  sx={{
                    width: "100%",
                    height: "100px",
                    objectFit: "cover",
                    borderRadius: 1,
                  }}
                />
              </Grid>
              <Grid item xs={4}>
                <Box
                  component="img"
                  src={smallImg}
                  alt="3"
                  sx={{
                    width: "100%",
                    height: "100px",
                    objectFit: "cover",
                    borderRadius: 1,
                  }}
                />
              </Grid>
            </Grid>
          </Box>
        </Grid>

        {/* Правый блок: информация и агент */}
        <Grid item xs={12} md={6}>
          {/* Агент */}
          <Card sx={{ display: "flex", alignItems: "center", mb: 2, p: 1 }}>
            <Avatar src="/images/agent.jpg" alt="Agent" sx={{ mr: 2 }} />
            <CardContent sx={{ p: 0 }}>
              <Typography variant="subtitle1">ФИО агента</Typography>
              <Typography variant="body2">Номер клиента</Typography>
            </CardContent>
          </Card>

          {/* Основная информация */}
          <Box>
            <Typography variant="h6" gutterBottom>
              ОСНОВНАЯ ИНФОРМАЦИЯ
            </Typography>
            <Typography>Количество комнат: 3</Typography>
            <Typography>Тип недвижимости: Элитка</Typography>
            <Typography>Название жилого комплекса: ЖК "Кэмбридж"</Typography>
            <Typography>Площадь: 119,55 м2</Typography>
            <Typography>
              Этаж: Квартира на 12 этаже, а в доме всего 37
            </Typography>
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

      {/* Нижняя информация: даты и просмотры */}
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
