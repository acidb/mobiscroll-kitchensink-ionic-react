import { IonButtons, IonContent, IonHeader, IonMenuButton, IonPage, IonTitle, IonToolbar, IonButton } from '@ionic/react';
import React from 'react';
import './Notifications.css';
import { toast  } from '@mobiscroll/react';
import Appsettings from '../components/Appsettings';


const Notifications: React.FC<any> = ({onNotifyChange, not}) => {

  const showToast = () => {
    toast({
        message: 'Message sent',
        duration: 1000,
        theme: not.theme
    });
  };

  
    return (
      <IonPage>
        <IonHeader>
          <IonToolbar>
            <IonButtons slot="start">
              <IonMenuButton />
            </IonButtons>
            <IonTitle>Notifications</IonTitle>
          </IonToolbar>
        </IonHeader>
        <Appsettings options={not} changeHandler={onNotifyChange}/>
        <IonContent className="ion-padding" fullscreen>
          <IonButton expand="full" onClick={showToast}>Toast</IonButton>
        </IonContent>
      </IonPage>
    );
}

export default Notifications;
