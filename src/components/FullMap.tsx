import { MapContainer, Marker, Popup, TileLayer, useMap } from "react-leaflet";

export const FullMap = () => {
  return (
    <MapContainer
      center={[49.7835438, 19.0589105]}
      zoom={100}
      scrollWheelZoom={false}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={[49.7835438, 19.0589105]}>
        <Popup>tutaj lukasz nadupia kod</Popup>
      </Marker>
    </MapContainer>
  );
};
