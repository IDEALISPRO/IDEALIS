import { useState } from "react";
import { Box, Button, Typography, FormHelperText } from "@mui/material";
import AddAPhotoIcon from "@mui/icons-material/AddAPhoto";

export const PhotoUpload = ({ setValue, errors }) => {
  const [preview, setPreview] = useState([]);
  const [photosBase64, setPhotosBase64] = useState([]);

  const handleFileChange = (e) => {
    const files = e.target.files ? Array.from(e.target.files) : [];
    if (files.length === 0) return;

    const newPreviews = files.map((file) => URL.createObjectURL(file));
    setPreview((prev) => [...prev, ...newPreviews]);

    let loadedCount = 0;
    const newPhotosBase64 = [];

    files.forEach((file, index) => {
      const reader = new FileReader();
      reader.onload = (event) => {
        newPhotosBase64[index] = { url: [event.target.result] };
        loadedCount++;
        if (loadedCount === files.length) {
          setPhotosBase64((prev) => {
            const updated = [...prev, ...newPhotosBase64];
            setValue("photos", updated, { shouldValidate: true });
            return updated;
          });
        }
      };
      reader.readAsDataURL(file);
    });
  };

  return (
    <>
      <Typography
        variant="h4"
        sx={{
          fontSize: { xs: "22px", md: "28px" },
          mt: "60px",
          fontWeight: 600,
        }}
      >
        Загрузите фото *{" "}
        <Typography
          component="span"
          sx={{ color: "#00000080", fontSize: { xs: "14px", md: "18px" } }}
        >
          (от 3 до 15)
        </Typography>
      </Typography>

      <Box
        sx={{
          display: "flex",
          gap: "20px",
          alignItems: "start",
          flexDirection: { xs: "column", md: "row" },
          mt: 2,
        }}
      >
        <Button
          variant="contained"
          component="label"
          sx={{
            p: 0,
            bgcolor: "#F1F1F9",
            width: { sm: "100%", md: "30%" },
          }}
        >
          {preview.length > 0 ? (
            <>
              <Box
                component="img"
                src={preview[0]}
                alt="preview"
                sx={{
                  width: "100%",
                  height: {
                    xs: "300px",
                    sm: "500px",
                    md: "300px",
                    lg: "400px",
                  },
                  objectFit: "cover",
                  borderRadius: 2,
                }}
              />
              <input
                type="file"
                hidden
                multiple
                accept="image/*"
                onChange={handleFileChange}
              />
            </>
          ) : (
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                p: { xs: 4, md: 10 },
              }}
            >
              <AddAPhotoIcon
                sx={{
                  mb: 2,
                  fontSize: { xs: "64px", md: "96px" },
                  color: "#00000099",
                }}
              />
              <Typography
                sx={{
                  fontSize: { xs: "16px", md: "18px" },
                  fontWeight: 600,
                  color: "#000000",
                }}
              >
                Добавьте фото
              </Typography>
              <input
                type="file"
                hidden
                multiple
                accept="image/*"
                onChange={handleFileChange}
              />
            </Box>
          )}
        </Button>

        {errors.photos && (
          <FormHelperText error>{errors.photos.message}</FormHelperText>
        )}

        {preview.length > 1 && (
          <Box
            sx={{
              width: { sm: "100%", md: "65%" },
              display: "grid",
              gridTemplateColumns: {
                xs: "repeat(2, 1fr)",
                sm: "repeat(auto-fill, minmax(120px, 1fr))",
              },
              gap: "10px",
            }}
          >
            {preview.slice(1).map((src, index) => (
              <Box
                key={index}
                component="img"
                src={src}
                alt={`preview-${index}`}
                sx={{
                  width: "100%",
                  height: { sm: "150px" },
                  objectFit: "cover",
                  borderRadius: 2,
                }}
              />
            ))}
          </Box>
        )}
      </Box>
    </>
  );
};
