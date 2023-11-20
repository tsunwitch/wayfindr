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
import { useSelectedRoute } from "../providers/SelectedRouteProvider";
import { Route, Waypoint } from "../types";
import { v4 as uuidv4 } from "uuid";

const routes: Route[] = [
  {
    id: uuidv4(),
    name: "Route 1",
    waypoints: [
      {
        id: uuidv4(),
        name: "Cavatina hall",
        coordinates: [49.7835438, 19.0589105],
      },
      {
        id: uuidv4(),
        name: "Wypozyczalnia rowerow jakichs",
        coordinates: [49.80949682048584, 19.055480571676213],
      },
      {
        id: uuidv4(),
        name: "Properek palarnia kawy",
        coordinates: [49.79121684091902, 19.04904182651327],
      },
    ],
  },
  {
    id: uuidv4(),
    name: "Route 2",
    waypoints: [
      {
        id: uuidv4(),
        name: "Błonia",
        coordinates: [49.7835438, 19.0589105],
      },
      {
        id: uuidv4(),
        name: "Magdonal mickiewicz",
        coordinates: [49.80949682048584, 19.055480571676213],
      },
      {
        id: uuidv4(),
        name: "SLOWAK AUUUUUUU",
        coordinates: [49.79121684091902, 19.04904182651327],
      },
    ],
  },
];

const Tab2: React.FC = () => {
  const { selectedRoute, setSelectedRoute } = useSelectedRoute();

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
          {routes.map((route: Route, routeIndex) => {
            return (
              <IonItem
                className="py-2 text-slate-100 ion-activatable"
                routerLink="/tab1"
                key={routeIndex}
                onClick={() => {
                  setSelectedRoute(route);
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
