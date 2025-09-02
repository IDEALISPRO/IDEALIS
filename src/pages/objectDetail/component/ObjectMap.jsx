import { MapContainer, TileLayer, Marker } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";

delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl:
    "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png",
  iconUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png",
  shadowUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png",
});

export const ObjectMap = ({ mapUrl }) => {
  if (!mapUrl) return <p>Координаты не указаны</p>;

  let coords;
  try {
    coords = typeof mapUrl === "string" ? JSON.parse(mapUrl) : mapUrl;
  } catch {
    return <p>Некорректные координаты</p>;
  }

  return (
    <MapContainer
      center={[coords.lat, coords.lng]}
      zoom={15}
      style={{
        height: "500px",
        width: "100%",
        marginTop: "0px",
        marginBottom: "100px",
        borderRadius: "20px",
      }}
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a>'
      />
      <Marker position={[coords.lat, coords.lng]} />
    </MapContainer>
  );
};
