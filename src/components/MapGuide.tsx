import { IonButton, IonIcon } from "@ionic/react";
import { useState } from "react";

export const MapGuide = () => {
  const [routeSelected, setRouteSelected] = useState(true);

  return (
    <div className="flex flex-col text-left z-[1000] absolute bg-[#1f1f1f]/80 rounded-xl bottom-16 p-8 w-[99%]">
      {!routeSelected ? (
        <>
          <label className="text-xl">Waypoint 1</label>
          <label className="opacity-80">Route: some route</label>
        </>
      ) : (
        <>
          <label className="text-xl">No route selected</label>
          <label className="opacity-80">Select a route to get started</label>
        </>
      )}
    </div>
  );
};
