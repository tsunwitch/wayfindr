import { PropsWithChildren, createContext, useContext, useState } from "react";
import { Route } from "../types";

export const routes: Route[] = [];

export const RouteContext = createContext({} as any);

export const RouteProvider = ({ children }: PropsWithChildren) => {
  const [selectedRoute, setSelectedRoute] = useState<Route | undefined>(
    undefined
  );

  return (
    <RouteContext.Provider
      value={{ selectedRoute, setSelectedRoute, routes, getAllRoutes }}
    >
      {children}
    </RouteContext.Provider>
  );
};

export const getAllRoutes = async () => {
  if (routes.length > 0) return routes;

  const resp = await fetch("http://localhost:3000/routes");
  const data = await resp.json();
  routes.length = 0;
  routes.push(...data);

  return routes;
};

export const useSelectedRoute = () => useContext(RouteContext);
