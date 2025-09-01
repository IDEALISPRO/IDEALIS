import { useEffect, useState } from "react";
import { Box, Typography, Button, IconButton } from "@mui/material";
import AddAPhotoIcon from "@mui/icons-material/AddAPhoto";
import CancelIcon from "@mui/icons-material/Cancel";

const fileToBase64 = (file) =>
  new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result);
    reader.onerror = (error) => reject(error);
  });

export const PhotoUpload = ({ value = [], onChange }) => {
  const [preview, setPreview] = useState([]);

  useEffect(() => {
    if (!value || value.length === 0) {
      setPreview([]);
      return;
    }

    const initialPreviews = value.map((photo) => {
      if (typeof photo === "string") return photo;
      if (photo.url) return photo.url;
      return "";
    });

    setPreview(initialPreviews);
  }, [value]);

  const handleFileChange = async (e) => {
    const files = e.target.files ? Array.from(e.target.files) : [];
    if (files.length === 0) return;

    const base64Files = await Promise.all(
      files.map((file) => fileToBase64(file))
    );
    const updatedValue = [...value, ...base64Files];

    if (updatedValue.length > 15) {
      console.log("Достигнут лимит в 15 фотографий");
      return;
    }

    onChange(updatedValue);
    setPreview((prev) => [...prev, ...base64Files]);
  };

  const handleRemovePhoto = (indexToRemove) => {
    const updatedPhotos = value.filter((_, index) => index !== indexToRemove);
    onChange(updatedPhotos);

    const updatedPreview = preview.filter(
      (_, index) => index !== indexToRemove
    );
    setPreview(updatedPreview);
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
        Загрузите фото *
        <Typography
          component="span"
          sx={{ color: "#00000080", fontSize: { xs: "14px", md: "18px" } }}
        >
          {" "}
          (от 3 до 15)
        </Typography>
      </Typography>

      <Box
        sx={{
          display: "flex",
          gap: "20px",
          flexDirection: { xs: "column", md: "row" },
          mt: 2,
        }}
      >
        {preview.length > 0 && (
          <Box
            sx={{
              p: 0,
              bgcolor: "#F1F1F9",
              width: { sm: "100%", md: "30%" },
              borderRadius: 2,
              overflow: "hidden",
              position: "relative",
              minHeight: "300px",
            }}
          >
            <Box
              component="img"
              src={preview[0]}
              alt="preview"
              sx={{
                width: "100%",
                height: { xs: "300px", sm: "500px", md: "300px", lg: "400px" },
                objectFit: "cover",
              }}
            />
            <IconButton
              onClick={() => handleRemovePhoto(0)}
              sx={{
                position: "absolute",
                top: 8,
                right: 8,
                bgcolor: "rgba(255,255,255,0.7)",
                "&:hover": { bgcolor: "rgba(255,255,255,0.9)" },
                zIndex: 2,
              }}
            >
              <CancelIcon color="error" />
            </IconButton>
          </Box>
        )}

        <Box
          sx={{
            width: { sm: "100%", md: preview.length > 0 ? "65%" : "100%" },
            display: "grid",
            gridTemplateColumns: {
              xs: "repeat(2,1fr)",
              sm: "repeat(auto-fill,minmax(120px,1fr))",
            },
            gap: "10px",
          }}
        >
          {preview.slice(1).map((src, index) => (
            <Box key={index} sx={{ position: "relative" }}>
              <Box
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
              <IconButton
                onClick={() => handleRemovePhoto(index + 1)}
                sx={{
                  position: "absolute",
                  top: 4,
                  right: 4,
                  bgcolor: "rgba(255,255,255,0.7)",
                  "&:hover": { bgcolor: "rgba(255,255,255,0.9)" },
                  zIndex: 2,
                }}
              >
                <CancelIcon color="error" fontSize="small" />
              </IconButton>
            </Box>
          ))}

          {preview.length < 15 && (
            <Button
              variant="contained"
              component="label"
              sx={{
                p: 0,
                bgcolor: "#F1F1F9",
                borderRadius: 2,
                minHeight: "150px",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                "&:hover": { bgcolor: "#e0e0e0" },
              }}
            >
              <AddAPhotoIcon
                sx={{
                  mb: 1,
                  fontSize: { xs: "48px", md: "64px" },
                  color: "#00000099",
                }}
              />
              <Typography
                sx={{
                  fontSize: { xs: "14px", md: "16px" },
                  fontWeight: 600,
                  color: "#000000",
                }}
              >
                Добавить фото
              </Typography>
              <input
                type="file"
                hidden
                multiple
                accept="image/*"
                onChange={handleFileChange}
              />
            </Button>
          )}
        </Box>
      </Box>
    </>
  );
};
