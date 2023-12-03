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
import "./create.css";
import { useState } from "react";
import api from "../configs/axios-interceptors";
interface Mahasiswa {
    nama: string;
    nim: string;
}
const create: React.FC = () => {
    const [data, setData] = useState<Mahasiswa>({} as Mahasiswa);
    const handleChange = (event: any) => {
        setData({ ...data, [event.target.name]: event.target.value });
        console.log(data);
    };
    const handleSubmit = async () => {
        try {
            const response = await api.post("/mahasiswa", data);
            console.log(response.data);
        } catch (error) {
            console.log(error);
        }
    };
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
                                name="nama"
                                onIonChange={handleChange}
                            ></IonInput>
                        </IonCol>
                    </IonRow>
                    <IonRow>
                        <IonCol className="ion-text-start">
                            <IonInput
                                placeholder="NIM"
                                fill="solid"
                                name="nim"
                                onIonChange={handleChange}
                            ></IonInput>
                        </IonCol>
                    </IonRow>
                    <IonRow>
                        <IonCol className="ion-text-center ">
                            <IonButton
                                routerLink="/list"
                                expand="full"
                                onClick={() => {
                                    handleSubmit();
                                }}
                            >
                                Simpan
                            </IonButton>
                        </IonCol>
                    </IonRow>
                </IonGrid>
            </IonContent>
        </IonPage>
    );
};

export default create;
