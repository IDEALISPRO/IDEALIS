import { useState } from "react";
import {
  Box,
  Button,
  Typography,
  FormHelperText,
  IconButton,
} from "@mui/material";
import AddAPhotoIcon from "@mui/icons-material/AddAPhoto";
import CloseIcon from "@mui/icons-material/Close";

export const PhotoUpload = ({ setValue, errors }) => {
  const [preview, setPreview] = useState([]);
  const [photos, setPhotos] = useState([]);

  const handleFileChange = (e) => {
    const files = e.target.files ? Array.from(e.target.files) : [];
    if (!files.length) return;

    const newPreviews = files.map((file) => URL.createObjectURL(file));
    const newPhotos = [...photos, ...files];

    setPreview([...preview, ...newPreviews]);
    setPhotos(newPhotos);

    setValue("photos", newPhotos, { shouldValidate: true });
  };

  const handleRemove = (index) => {
    const newPhotos = [...photos];
    const newPreview = [...preview];
    newPhotos.splice(index, 1);
    newPreview.splice(index, 1);

    setPhotos(newPhotos);
    setPreview(newPreview);

    setValue("photos", newPhotos, { shouldValidate: true });
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
          (от 3 до 15)
        </Typography>
      </Typography>

      {errors.photos && (
        <FormHelperText error>{errors.photos.message}</FormHelperText>
      )}

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
          sx={{ p: 0, bgcolor: "#F1F1F9", width: { sm: "100%", md: "30%" } }}
        >
          {preview.length > 0 ? (
            <Box
              sx={{
                width: "100%",
                height: { xs: 300, sm: 500, md: 300, lg: 400 },
                position: "relative",
                borderRadius: 2,
                overflow: "hidden",
              }}
            >
              <Box
                component="img"
                src={preview[0]}
                alt="preview"
                sx={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  cursor: "pointer",
                }}
                onClick={() => handleRemove(0)}
              />
              <IconButton
                size="small"
                onClick={() => handleRemove(0)}
                sx={{
                  position: "absolute",
                  top: 8,
                  right: 8,
                  bgcolor: "#ffffffaa",
                }}
              >
                <CloseIcon />
              </IconButton>
              <input
                type="file"
                hidden
                multiple
                accept="image/*"
                onChange={handleFileChange}
              />
            </Box>
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

        {preview.length > 0 && (
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
                key={index + 1}
                sx={{
                  position: "relative",
                  width: "100%",
                  height: 150,
                  borderRadius: 2,
                  overflow: "hidden",
                }}
              >
                <Box
                  component="img"
                  src={src}
                  alt={`preview-${index + 1}`}
                  sx={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    cursor: "pointer",
                  }}
                  onClick={() => handleRemove(index + 1)}
                />
                <IconButton
                  size="small"
                  onClick={() => handleRemove(index + 1)}
                  sx={{
                    position: "absolute",
                    top: 4,
                    right: 4,
                    bgcolor: "#ffffffaa",
                  }}
                >
                  <CloseIcon fontSize="small" />
                </IconButton>
              </Box>
            ))}
            <Button
              variant="outlined"
              component="label"
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                height: 150,
                borderRadius: 2,
                border: "2px dashed #ccc",
                bgcolor: "#F9F9F9",
              }}
            >
              <AddAPhotoIcon />
              <input
                type="file"
                hidden
                multiple
                accept="image/*"
                onChange={handleFileChange}
              />
            </Button>
          </Box>
        )}
      </Box>
    </>
  );
};
