import { useEffect, useState } from "react";
import { Route, Waypoint } from "../types";
import {
  MapContainer,
  Marker,
  Popup,
  TileLayer,
  Polyline,
} from "react-leaflet";
import { useSelectedRoute } from "../providers/RouteProvider";
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
  return routepoints;
}

export const FullMap = () => {
  const [position, setPosition] = useState<GeolocationPosition | null>(null);
  const routeProvider = useSelectedRoute();
  const [routePoints, setRoutePoints] = useState<any[]>([]);

  useEffect(() => {
    if (routeProvider.selectedRoute) {
      getRoutePoints(routeProvider.selectedRoute.waypoints, position).then(
        (response) => {
          parseRoutePoints(response).then((xd) => {
            setRoutePoints(xd);
          });
        }
      );
    }
  }, [routeProvider.selectedRoute]);

  useEffect(() => {
    navigator.geolocation.getCurrentPosition((position) => {
      setPosition(position);
    });
  }, []);

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
        {routeProvider.selectedRoute &&
          routeProvider.selectedRoute.waypoints.map(
            (waypoint: Waypoint, waypointIndex: number) => {
              return (
                <Marker
                  key={waypointIndex}
                  position={[waypoint.coordinates[0], waypoint.coordinates[1]]}
                >
                  <Popup>
                    <b>{waypoint.name}</b> <br />
                    <img
                      src="https://api.mganczarczyk.pl/tairiku/random/streetmoe?safety=true"
                      alt=""
                      className="rounded-xl w-full"
                    />
                    <br /> {waypoint.description}
                  </Popup>
                </Marker>
              );
            }
          )}
      </MapContainer>
    </>
  );
};
