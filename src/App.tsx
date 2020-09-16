import Menu from './components/Menu';
import Page from './pages/Page';
import React, { useState } from 'react';
import { IonApp, IonRouterOutlet, IonSplitPane } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import { Redirect, Route } from 'react-router-dom';
import Calendar from './pages/Calendar';

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

import '@mobiscroll/react/dist/css/mobiscroll.min.css';


/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/* Theme variables */
import './theme/variables.css';
import Datetime from './pages/Datetime';
import Eventcalend from './pages/Eventcalend';
import Forms from './pages/Forms';
import About from './pages/About';
import Notifications from './pages/Notifications';
import { OptionsProvider, localeEn } from '@mobiscroll/react';
import Appsettings from './components/Appsettings';

const App: React.FC<any> = () => {

  const [options, setOptions] = useState({
    theme: 'ios',
    locale: localeEn
  });

  const changeOptions = (newOptions: any) => {
    setOptions({...options, theme: newOptions.theme, locale: newOptions.locale});
  }

    return (

      <IonApp>
        <IonReactRouter>
          <IonSplitPane contentId="main">
            <Menu />
            <OptionsProvider options={options}>
              <IonRouterOutlet id="main">
                <Route path="/page/Home" component={Page} exact />
                <Route path="/page/Calendar" >
                  <Calendar calendar={options} onCalendarChange={changeOptions} />
                </Route>
                <Route path="/page/Datetime">
                  <Datetime dt={options} onDateTimeChange={changeOptions} />
                </Route>
                <Route path="/page/Eventcalendar">
                  <Eventcalend  ev={options} onEventChange={changeOptions}/>
                </Route>
                <Route path="/page/Forms">
                  <Forms frm={options} onFormChange={changeOptions} />
                </Route>
                <Route path="/page/Notifications">
                  <Notifications not={options} onNotifyChange={changeOptions} />
                </Route>
                <Route path="/page/About" component={About} exact />
                <Route path="/" render={() => <Redirect to="/page/Home" />} exact={true} />
              </IonRouterOutlet>
            </OptionsProvider>
          </IonSplitPane>
        </IonReactRouter>
      </IonApp>
    );
  
};

export default App;
