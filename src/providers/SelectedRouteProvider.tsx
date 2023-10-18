import { PropsWithChildren, createContext, useContext, useState } from "react";
import { Route } from "../types";

interface ISelectedRoute {
  selectedRoute: Route | undefined;
  setSelectedRoute: (routeId: Route) => void;
}

const SelectedRoute = createContext({} as ISelectedRoute);

export const SelectedRouteProvider = ({ children }: PropsWithChildren) => {
  const [selectedRoute, setSelectedRoute] = useState<Route | undefined>(
    undefined
  );

  return (
    <SelectedRoute.Provider value={{ selectedRoute, setSelectedRoute }}>
      {children}
    </SelectedRoute.Provider>
  );
};

export const useSelectedRoute = () => useContext(SelectedRoute);
