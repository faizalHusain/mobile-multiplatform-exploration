import {
    IonContent,
    IonHeader,
    IonPage,
    IonTitle,
    IonToolbar,
    IonInput,
    IonGrid,
    IonRow,
    IonCol,
    IonButton,
    IonIcon,
} from "@ionic/react";
import { create, trash } from "ionicons/icons";
import ExploreContainer from "../components/ExploreContainer";
import "./Tab1.css";

const Tab1: React.FC = () => {
    const data = [
        {
            nama: "Aji",
            nim: "123",
        },
        {
            nama: "Budi",
            nim: "456",
        },
        {
            nama: "Caca",
            nim: "789",
        },
    ];
    return (
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonTitle>Mahasiswa</IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent fullscreen>
                <IonGrid>
                    <IonRow>
                        <IonCol className="ion-text-start">
                            <IonButton routerLink="/tab2">Tambah</IonButton>
                        </IonCol>
                    </IonRow>
                </IonGrid>
                <IonGrid>
                    <IonRow>
                        <IonCol className="ion-text-center">Nama</IonCol>
                        <IonCol className="ion-text-center">Nim</IonCol>
                        <IonCol className="ion-text-center">Aksi</IonCol>
                    </IonRow>
                    {data.map((item) => (
                        <IonRow>
                            <IonCol className="ion-text-center">
                                {item.nama}
                            </IonCol>
                            <IonCol className="ion-text-center">
                                {item.nim}
                            </IonCol>
                            <IonCol className="ion-text-center">
                                <IonButton routerLink="/tab3">
                                    <IonIcon icon={create}></IonIcon>
                                </IonButton>
                                <IonButton>
                                    <IonIcon icon={trash}></IonIcon>
                                </IonButton>
                            </IonCol>
                        </IonRow>
                    ))}
                </IonGrid>
                {/* <ExploreContainer name="Tab 1 page" /> */}
            </IonContent>
        </IonPage>
    );
};

export default Tab1;
