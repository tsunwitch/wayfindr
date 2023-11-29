import {
  PropsWithChildren,
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";
import { Route } from "../types";

export const RouteContext = createContext({} as any);

export const RouteProvider = ({ children }: PropsWithChildren) => {
  const [selectedRoute, setSelectedRoute] = useState<Route | undefined>(
    undefined
  );

  const [routes, setRoutes] = useState<Route[]>([]);

  const get_routes = async () => {
    if (routes.length > 0) return routes;
  };

  useEffect(() => {
    initializetheproviderwithroutesdatacontent();
  }, []);

  const initializetheproviderwithroutesdatacontent = async () => {
    const content = await getAllRoutes();
    setRoutes(content);
  };

  const getAllRoutes = async () => {
    if (routes.length > 0) return routes;

    const resp = await fetch("http://localhost:3000/routes");
    const data = await resp.json();
    routes.length = 0;
    routes.push(...data);

    return routes;
  };

  return (
    <RouteContext.Provider
      value={{ selectedRoute, setSelectedRoute, routes, getAllRoutes }}
    >
      {children}
    </RouteContext.Provider>
  );
};

export const useSelectedRoute = () => useContext(RouteContext);
