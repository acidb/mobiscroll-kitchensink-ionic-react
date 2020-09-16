import { IonButtons, IonContent, IonHeader, IonMenuButton, IonPage, IonTitle, IonToolbar, IonItem, IonLabel, IonList } from '@ionic/react';
import React from 'react';
import './Datetime.css';
import { Datepicker } from '@mobiscroll/react';
import Appsettings from '../components/Appsettings';

const Datetime: React.FC<any> = ({onDateTimeChange, dt}) => {

    return (
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonButtons slot="start">
                        <IonMenuButton />
                    </IonButtons>
                    <IonTitle>Date & Time</IonTitle>
                </IonToolbar>
            </IonHeader>
            <Appsettings options={dt} changeHandler={onDateTimeChange} />
            <IonContent className="ion-padding" fullscreen>
                <IonList>
                    <IonItem>
                        <IonLabel position="stacked">Compact date & time picker</IonLabel><br />
                        <Datepicker controls={['datetime']} />
                    </IonItem>
                    <IonItem>
                        <IonLabel position="stacked">Expanded date & time picker</IonLabel><br />
                        <Datepicker controls={['date', 'time']} />
                    </IonItem>
                    <IonItem>
                        <IonLabel position="stacked">Date</IonLabel><br />
                        <Datepicker controls={['date']} />
                    </IonItem>
                    <IonItem>
                        <IonLabel position="stacked">Time</IonLabel><br />
                        <Datepicker controls={['time']} />
                    </IonItem>

                </IonList>
            </IonContent>
        </IonPage>
    );
    
};

export default Datetime;
