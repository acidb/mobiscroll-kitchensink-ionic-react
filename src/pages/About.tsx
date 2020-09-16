import { IonButtons, IonContent, IonHeader, IonMenuButton, IonPage, IonTitle, IonToolbar, IonList, IonItem, IonText } from '@ionic/react';
import React from 'react';
import './About.css';

const About: React.FC = () => {

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonMenuButton />
          </IonButtons>
          <IonTitle>About</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent className="ion-padding" fullscreen>
        <IonList>
            <IonItem>
                <IonText>
                    <h2>Mobiscroll Version</h2>
                    <h3>5.0.0-beta3</h3>
                </IonText>
            </IonItem>
            <IonItem>
                <IonText>
                    <h2>Ionic Version</h2>
                    <h3>5.0.0</h3>
                </IonText>
            </IonItem>
            <IonItem>
                <IonText>
                    <h2>Build Date</h2>
                    <h3>Aug 25, 2020</h3>
                </IonText>
            </IonItem>
            <IonItem>
                <IonText>
                    <h2>© 2020 Acid Media LLC</h2>
                    <h3>
                        More info on the
                        <a href="#" onClick={ () => window.open('https://mobiscroll.com/', '_system', 'location=yes') }> Mobiscroll website</a>.
                    </h3>
                </IonText>
            </IonItem>
        </IonList>
      </IonContent>
    </IonPage>
  );
};

export default About;
