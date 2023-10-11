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
  coordinates: [number, number];
};

type Route = {
  name: string;
  // waypoints : Waypoint
};

const routes: Route[] = [
  {
    name: "Route 1",
  },
  {
    name: "Route 2",
  },
  {
    name: "Route 3",
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
