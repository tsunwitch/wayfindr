import { LatLng } from "leaflet";
import { useEffect, useState } from "react";
import {
  MapContainer,
  Marker,
  Popup,
  TileLayer,
  Polyline,
} from "react-leaflet";

const response = await fetch(
  "http://router.project-osrm.org/route/v1/driving/long,lat;long2,lat2?steps=true&annotations=true&geometries=geojson&overview=full"
);

async function getRoutePoints(
  lat1: number,
  long1: number,
  lat2: number,
  long2: number
): Promise<Response> {
  const response = await fetch(
    `http://router.project-osrm.org/route/v1/driving/${long1},${lat1};${long2},${lat2}?steps=true&annotations=true&geometries=geojson&overview=full`
  );

  return response;
}

async function parseRoutePoints(response: Response) {
  const router = (await response.json())["routes"][0]["geometry"][
    "coordinates"
  ];
  const routepoints: any[] = [];

  for (let i = 0; i < router.length; i++) {
    const split = router[i]
      .toString()
      .replaceAll("[", "")
      .replaceAll("]", "")
      .split(",");

    routepoints.push([parseFloat(split[0]), parseFloat(split[1])]);
  }
}

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
    <>
      <MapContainer
        center={[
          position?.coords.latitude ?? 0,
          position?.coords.longitude ?? 0,
        ]}
        zoom={100}
        scrollWheelZoom={false}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Polyline pathOptions={{ color: "red" }} positions={[]} />
        <Marker position={[49.7835438, 19.0589105]}>
          <Popup>tutaj lukasz nadupia kod</Popup>
        </Marker>
      </MapContainer>
    </>
  );
};
