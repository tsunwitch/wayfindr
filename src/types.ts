export type Waypoint = {
  id: string;
  name?: string;
  coordinates: [number, number];
};

export type Route = {
  id: string;
  name: string;
  waypoints: Waypoint[];
};
