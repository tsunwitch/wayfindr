import { useEffect, useState } from "react";
import { Route, Waypoint } from "../types";
import {
  MapContainer,
  Marker,
  Popup,
  TileLayer,
  Polyline,
} from "react-leaflet";
import { useSelectedRoute } from "../providers/SelectedRouteProvider";
import { LatLng, LatLngExpression } from "leaflet";

async function getRoutePoints(
  waypoints: Waypoint[],
  position: GeolocationPosition | null
): Promise<Response> {
  if (!position) {
    return new Response();
  }
  //parse waypoints to a single string
  let coordinateString: string = "";

  coordinateString +=
    position.coords.longitude + "," + position.coords.latitude + ";";

  waypoints.map((waypoint, index) => {
    coordinateString += waypoint.coordinates[1] + "," + waypoint.coordinates[0];

    if (index < waypoints.length - 1) {
      coordinateString += ";";
    }
  });

  console.log(coordinateString);

  const response = await fetch(
    `https://router.project-osrm.org/route/v1/driving/${coordinateString}?steps=true&annotations=true&geometries=geojson&overview=full`
  );

  return response;
}

async function parseRoutePoints(response: Response) {
  const router = (await response.json())["routes"][0]["geometry"][
    "coordinates"
  ];
  const routepoints: LatLngExpression[] = [];

  for (let i = 0; i < router.length; i++) {
    const split = router[i]
      .toString()
      .replaceAll("[", "")
      .replaceAll("]", "")
      .split(",");

    routepoints.push(new LatLng(split[1], split[0]));
  }
  console.log(`dupa ${routepoints}`);
  return routepoints;
}

export const FullMap = () => {
  const [position, setPosition] = useState<GeolocationPosition | null>(null);
  const { selectedRoute } = useSelectedRoute();
  const [routePoints, setRoutePoints] = useState<any[]>([]);

  useEffect(() => {
    if (selectedRoute) {
      getRoutePoints(selectedRoute.waypoints, position).then((response) => {
        parseRoutePoints(response).then((xd) => {
          console.log(xd);
          setRoutePoints(xd);
        });
      });
    }
  }, [selectedRoute]);

  useEffect(() => {
    navigator.geolocation.getCurrentPosition((position) => {
      setPosition(position);
      console.log(`position: ${position}`);
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
        <Polyline pathOptions={{ color: "red" }} positions={[routePoints]} />
        <Marker
          position={[position.coords.latitude, position.coords.longitude]}
        >
          <Popup>Your position</Popup>
        </Marker>
      </MapContainer>
    </>
  );
};
