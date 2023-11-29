import { IonButton, IonIcon } from "@ionic/react";
import { useState } from "react";
import { useSelectedRoute } from "../providers/RouteProvider";
import { Waypoint } from "../types";

export const MapGuide = () => {
  const { selectedRoute } = useSelectedRoute();

  return (
    <div className="flex flex-col text-left z-[1000] absolute bg-[#1f1f1f]/80 rounded-xl bottom-16 p-8 w-[99%]">
      {selectedRoute ? (
        <>
          <label className="text-xl">{selectedRoute?.name}</label>
          <label className="opacity-80 text-sm">
            {selectedRoute.waypoints.map(
              (waypoint: Waypoint, waypointIndex: number) => {
                return (
                  <span key={waypointIndex}>
                    {waypoint.name}
                    {waypointIndex < selectedRoute.waypoints.length - 1
                      ? " ・ "
                      : ""}
                  </span>
                );
              }
            )}
          </label>
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
