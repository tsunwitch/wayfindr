import { PropsWithChildren, createContext, useState } from "react";

interface ISelectedRoute {
  selectedRoute: number;
  setSelectedRoute: (routeId: number) => void;
}

const SelectedRoute = createContext({} as ISelectedRoute);

export const SelectedRouteProvider = ({ children }: PropsWithChildren) => {
  const [selectedRoute, setSelectedRoute] = useState<number>(0);

  return (
    <SelectedRoute.Provider value={{ selectedRoute, setSelectedRoute }}>
      {children}
    </SelectedRoute.Provider>
  );
};
