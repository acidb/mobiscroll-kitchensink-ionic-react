import {
  IonContent,
  IonItem,
  IonLabel,
  IonList,
  IonListHeader,
  IonMenu,
  IonMenuToggle
} from '@ionic/react';

import React from 'react';
import { useLocation } from 'react-router-dom';
import './Menu.css';

interface AppPage {
  url: string;
  title: string;
}

const appPages: AppPage[] = [
  {
    title: 'Home',
    url: '/page/Home'
  },
  {
    title: 'Calendar',
    url: '/page/Calendar'
  },
  {
    title: 'Date & Time',
    url: '/page/Datetime'
  },
  {
    title: 'Eventcalendar',
    url: '/page/Eventcalendar'
  },
  {
    title: 'Forms',
    url: '/page/Forms'
  },
  {
    title: 'Notifications',
    url: '/page/Notifications'
  },
  {
    title: 'About',
    url: '/page/About'
  }
];


const Menu: React.FC = () => {
  const location = useLocation();

  return (
    <IonMenu contentId="main" >
      <IonContent>
        <IonList id="inbox-list">
          <IonListHeader>Menu</IonListHeader>
          {appPages.map((appPage, index) => {
            return (
              <IonMenuToggle key={index} autoHide={false}>
                <IonItem className={location.pathname === appPage.url ? 'selected' : ''} routerLink={appPage.url} routerDirection="none" lines="none" detail={false}>
                  <IonLabel>{appPage.title}</IonLabel>
                </IonItem>
              </IonMenuToggle>
            );
          })}
        </IonList>
      </IonContent>
    </IonMenu>
  );
};

export default Menu;
