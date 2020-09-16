import { IonButtons, IonContent, IonHeader, IonMenuButton, IonPage, IonTitle, IonToolbar, IonItem, IonLabel, IonList } from '@ionic/react';
import React from 'react';
import './Calendar.css';
import { Datepicker } from '@mobiscroll/react';
import Appsettings from '../components/Appsettings';


const Calendar: React.FC<any> = ({onCalendarChange, calendar}) => {
    return (
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonButtons slot="start">
                        <IonMenuButton />
                    </IonButtons>
                    <IonTitle>Calendar</IonTitle>
                </IonToolbar>
            </IonHeader>
            <Appsettings options={calendar} changeHandler={onCalendarChange} />
            <IonContent className="ion-padding" fullscreen>
                <IonList>
                    <IonItem>
                        <IonLabel position="stacked">Day select</IonLabel><br />
                        <Datepicker controls={['calendar']} />
                    </IonItem>
                    <IonItem>
                        <IonLabel position="stacked">Multiple day select</IonLabel><br />
                        <Datepicker controls={['calendar']} selectMultiple/>
                    </IonItem>
                </IonList>
            </IonContent>
        </IonPage>
    );
};

export default Calendar;
