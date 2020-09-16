import { IonButtons, IonContent, IonHeader, IonMenuButton, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import React from 'react';
import './Page.css';

const Page: React.FC = () => {

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonMenuButton />
          </IonButtons>
          <IonTitle>Home</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent className="ion-padding" fullscreen>
        <h2>Welcome to the Mobiscroll - Ionic 5 kitchen sink app</h2>
        <p>You can try the different mobiscroll v5 components from the side menu imported into a real ionic react app.</p>
        <p>Play with the theme and language configuration.</p>
      </IonContent>
    </IonPage>
  );
};

export default Page;
