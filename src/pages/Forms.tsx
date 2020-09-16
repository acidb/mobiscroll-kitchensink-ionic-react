import { IonButtons, IonContent, IonHeader, IonMenuButton, IonPage, IonTitle, IonToolbar, IonLabel, IonItemGroup } from '@ionic/react';
import React from 'react';
import './Forms.css';
import { Input, Textarea, Dropdown, Switch, RadioGroup, Radio, Button, SegmentedGroup, SegmentedItem } from '@mobiscroll/react';
import Appsettings from '../components/Appsettings';

const Forms: React.FC<any> = ({onFormChange, frm}) => {

    return (
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonButtons slot="start">
                        <IonMenuButton />
                    </IonButtons>
                    <IonTitle>Forms</IonTitle>
                </IonToolbar>
            </IonHeader>
            <Appsettings options={frm} changeHandler={onFormChange} />
            <IonContent className="ion-padding" fullscreen>
                <IonItemGroup>
                    <IonLabel>Single-line text</IonLabel><br />
                    <Input placeholder="Text field label" label="Label"></Input>
                    <Input placeholder="Password" passwordToggle={true} label="Password Toggle hide"></Input>
                </IonItemGroup><br />
                <IonItemGroup>
                    <IonLabel>Multi-line text</IonLabel><br />
                    <Textarea label="Label" />
                </IonItemGroup><br />
                <IonItemGroup>
                    <IonLabel>Select</IonLabel><br />
                    <Dropdown label="Label">
                        <option value="">Choose one</option>
                        <option value="volvo">Volvo</option>
                        <option value="saab">Saab</option>
                        <option value="mercedes">Mercedes</option>
                        <option value="audi">Audi</option>
                    </Dropdown>
                </IonItemGroup><br />
                <IonItemGroup>
                    <IonLabel>Switch</IonLabel><br />
                    <Switch color="danger" label="Sync on mobile data" checked />
                    <Switch color="info" label="Email notification" />
                </IonItemGroup><br />
                <IonItemGroup>
                    <IonLabel>Radio button</IonLabel><br />
                    <RadioGroup name="gender">
                        <Radio value="f" label="Female" />
                        <Radio value="m" label="Male" />
                        <Radio value="o" label="Other" />
                    </RadioGroup>
                </IonItemGroup><br />
                <IonItemGroup>
                    <IonLabel>Button</IonLabel><br />
                    <div className="mbsc-button-group">
                        <Button color="primary">Button Primary</Button>
                        <Button color="secondary" disabled>Button Secondary</Button>
                        <Button color="success">Button Success</Button>
                    </div>
                </IonItemGroup><br />
                <IonItemGroup>
                    <IonLabel>Segmented</IonLabel><br />
                    <SegmentedGroup name="controlled">
                        <SegmentedItem value="day">Day</SegmentedItem>
                        <SegmentedItem value="week">Week</SegmentedItem>
                        <SegmentedItem value="month">Month</SegmentedItem>
                        <SegmentedItem value="year">Year</SegmentedItem>
                    </SegmentedGroup>
                </IonItemGroup><br />

            </IonContent>
        </IonPage>
    );
};

export default Forms;
