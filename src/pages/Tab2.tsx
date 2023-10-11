import {
  IonContent,
  IonHeader,
  IonItem,
  IonLabel,
  IonList,
  IonListHeader,
  IonPage,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import ExploreContainer from "../components/ExploreContainer";
import "./Tab2.css";

type Waypoint = {
  name?: string;
  coordinates: [number, number];
};

type Route = {
  name: string;
  waypoints: Waypoint[];
};

const routes: Route[] = [
  {
    name: "Route 1",
    waypoints: [
      {
        name: "Cavatina hall",
        coordinates: [49.7835438, 19.0589105],
      },
      {
        name: "Wypozyczalnia rowerow jakichs",
        coordinates: [49.80949682048584, 19.055480571676213],
      },
      {
        name: "Properek palarnia kawy",
        coordinates: [49.79121684091902, 19.04904182651327],
      },
    ],
  },
];

const Tab2: React.FC = () => {
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
          {routes.map((route: Route) => {
            return (
              <IonItem>
                <IonLabel>{route.name}</IonLabel>
              </IonItem>
            );
          })}
        </IonList>
      </IonContent>
    </IonPage>
  );
};

export default Tab2;
