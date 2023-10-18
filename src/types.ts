export type Waypoint = {
  name?: string;
  coordinates: [number, number];
};

export type Route = {
  id: number;
  name: string;
  waypoints: Waypoint[];
};
