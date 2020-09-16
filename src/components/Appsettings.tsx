import {
    IonItem,
    IonLabel,
    IonSegment,
    IonSegmentButton,
    IonSelect,
    IonSelectOption,
    IonContent,
} from '@ionic/react';

import React, { useState } from 'react';

import './Appsettings.css';
import { localeEn, localeAr, localeBg, localeCa, localeCs, localeHr, localeZh, localeDa, localeDe, localeEs, localeFr, localeEl, localeFi, localeHi, localeKo, localeIt, localeJa, localeLt, localeHu, localeNl, localeNo, localePl, localePtPT, localeRo, localeSk, localeSr, localeSv, localeTr, localeVi, localeRu, localeHe, localeFa } from '@mobiscroll/react';


const Appsettings: React.FC<any> = (props) => {

    const [settings, setSettings] = useState({
        languages: [
            { value: localeEn, text: "English" },
            { value: localeAr, text: "Arabic" },
            { value: localeBg, text: "Bulgarian" },
            { value: localeCa, text: "Català" },
            { value: localeCs, text: "Cestina" },
            { value: localeHr, text: "Croatian" },
            { value: localeZh, text: "Chinese" },
            { value: localeDa, text: "Dansk" },
            { value: localeDe, text: "Deutsch" },
            { value: localeEs, text: "Español" },
            { value: localeFr, text: "Français" },
            { value: localeEl, text: "Greek" },
            { value: localeFi, text: "Finnish" },
            { value: localeHi, text: "Hindi" },
            { value: localeKo, text: "Korean" },
            { value: localeIt, text: "Italiano" },
            { value: localeJa, text: "Japanese" },
            { value: localeLt, text: "Lietuvių" },
            { value: localeHu, text: "Magyar" },
            { value: localeNl, text: "Nederlands" },
            { value: localeNo, text: "Norsk" },
            { value: localePl, text: "Polski" },
            { value: localePtPT, text: "Português" },
            { value: localeRo, text: "Româna" },
            { value: localeSk, text: "Slovencina" },
            { value: localeSr, text: "Serbian" },
            { value: localeSv, text: "Svenska" },
            { value: localeTr, text: "Türkçe" },
            { value: localeVi, text: "Vietnamese" },
            { value: localeRu, text: "Русский" },
            { value: localeHe, text: "עברית" },
            { value: localeFa, text: "فارسی" },
        ],
        themes: [
            { value: 'ios', text: 'iOS' },
            { value: 'material', text: 'Material' },
            { value: 'windows', text: 'Windows' }
        ]
    })

    const langChange = (e: any) => {
        props.changeHandler({ ...props.options, locale: e.target.value });
    }

    
    const themeChange = (e: any) => {
        props.changeHandler({ ...props.options, theme: e.target.value });
    }

    const { languages, themes } = settings;

    let languagesList = languages.map((item: any, i: any) => {
        return (<IonSelectOption key={i} value={item.value}>{item.text}</IonSelectOption>);
    });

    let themesList = themes.map((item: any, i: any) => {
        return (<IonSegmentButton key={i} value={item.value}>{item.text}</IonSegmentButton>);
    });

    return (
        <div>
            <IonItem class="settings" lines="full">
                <IonSegment value={props.options.theme} onIonChange={themeChange}>
                    {themesList}
                </IonSegment>
                <IonLabel position="stacked">Language</IonLabel>
                <IonSelect value={props.options.locale} onIonChange={langChange}>
                    {languagesList}
                </IonSelect>
            </IonItem>
        </div>
    );

};

export default Appsettings;
