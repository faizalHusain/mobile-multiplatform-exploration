import {
    IonContent,
    IonGrid,
    IonHeader,
    IonPage,
    IonTitle,
    IonToolbar,
    IonInput,
    IonRow,
    IonCol,
    IonButton,
} from "@ionic/react";
import ExploreContainer from "../components/ExploreContainer";
import "./Tab3.css";

const Tab3: React.FC = () => {
    return (
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonTitle>Edit Mahasiswa</IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent fullscreen>
                <IonGrid>
                    <IonRow>
                        <IonCol className="ion-text-start">
                            <IonInput
                                placeholder="Nama"
                                fill="solid"
                            ></IonInput>
                        </IonCol>
                    </IonRow>
                    <IonRow>
                        <IonCol className="ion-text-start">
                            <IonInput placeholder="NIM" fill="solid"></IonInput>
                        </IonCol>
                    </IonRow>
                    <IonRow>
                        <IonCol className="ion-text-center ">
                            <IonButton routerLink="/tab1" expand="full">
                                Simpan
                            </IonButton>
                        </IonCol>
                    </IonRow>
                </IonGrid>
            </IonContent>
        </IonPage>
    );
};

export default Tab3;
