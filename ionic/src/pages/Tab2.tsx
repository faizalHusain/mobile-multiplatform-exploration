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
import "./Tab2.css";

const Tab2: React.FC = () => {
    return (
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonTitle>Tambah Mahasiswa</IonTitle>
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

export default Tab2;
