import {
  IonContent,
  IonHeader,
  IonIcon,
  IonItem,
  IonLabel,
  IonList,
  IonListHeader,
  IonPage,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import "./Tab2.css";
import { useSelectedRoute } from "../providers/RouteProvider";
import { Route, Waypoint } from "../types";
import { useEffect, useState } from "react";

const Tab2: React.FC = () => {
  const routeProvider = useSelectedRoute();
  const [fetchedRoutes, setFetchedRoutes] = useState<Route[]>([]);

  useEffect(() => {
    const fetchRoutes = async () => {
      try {
        const routes = await routeProvider.getAllRoutes();
        setFetchedRoutes(routes);
      } catch (error) {
        console.error("Error fetching routes:", error);
      }
    };

    fetchRoutes();
  }, [routeProvider]);

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Your Routes</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Tab 2</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonList>
          <IonListHeader>
            <IonLabel>Choose a route you want to follow</IonLabel>
          </IonListHeader>
          {fetchedRoutes &&
            fetchedRoutes.map((route: Route, routeIndex) => {
              return (
                <IonItem
                  className="py-2 text-slate-100 ion-activatable"
                  routerLink="/tab1"
                  key={routeIndex}
                  onClick={() => {
                    routeProvider.setSelectedRoute(route);
                  }}
                >
                  <div className="flex flex-col my-2">
                    <IonLabel key={route.id}>{route.name}</IonLabel>
                    <p className="mt-2 text-[12px] text-gray-400">
                      {route.waypoints.map(
                        (waypoint: Waypoint, waypointIndex: number) => {
                          return (
                            <span key={waypointIndex}>
                              {waypoint.name}
                              {waypointIndex < route.waypoints.length - 1
                                ? " ・ "
                                : ""}
                            </span>
                          );
                        }
                      )}
                    </p>
                  </div>
                </IonItem>
              );
            })}
        </IonList>
      </IonContent>
    </IonPage>
  );
};

export default Tab2;
