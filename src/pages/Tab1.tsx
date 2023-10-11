import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, useIonViewDidEnter } from '@ionic/react';
import './Tab1.css';
import { FullMap } from '../components/FullMap';


const Tab1: React.FC = () => {

  /**
   * Trigger a 'resize' event when Page has finished rendering and animating, so leaflet map can read a consistent height value.
   */
  useIonViewDidEnter(() => {
    window.dispatchEvent(new Event('resize'));
  });

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Map</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Tab 1</IonTitle>
          </IonToolbar>
        </IonHeader>
        <div className="leaflet-container">
          <FullMap/>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Tab1;
