import { useEffect, useState } from "react";
import { MapContainer, Marker, Popup, TileLayer, useMap } from "react-leaflet";

export const FullMap = () => {
  const [position, setPosition] = useState<GeolocationPosition | null>(null);
  useEffect(() => {
    navigator.geolocation.getCurrentPosition((position) => {
      setPosition(position);
      console.log(position);
    });
  }, []);

  console.log(position?.coords.latitude ?? 0, position?.coords.longitude ?? 0);

  if (!position) {
    return <></>;
  }

  return (
    <MapContainer
      center={[position?.coords.latitude ?? 0, position?.coords.longitude ?? 0]}
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
