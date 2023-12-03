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
import "./edit.css";
import api from "../configs/axios-interceptors";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
interface Mahasiswa {
    id: number;
    nama: string;
    nim: string;
    created_at: string;
    updated_at: string;
}
const edit: React.FC = () => {
    const [data, setData] = useState<Mahasiswa>({} as Mahasiswa);
    const { id } = useParams<{ id: string }>();
    const handleChange = (event: any) => {
        setData({ ...data, [event.target.name]: event.target.value });
        console.log(data);
    };
    const handleSubmit = async () => {
        try {
            const response = await api.put("/mahasiswa", data);
            console.log(response.data);
        } catch (error) {
            console.log(error);
        }
    };
    const getData = async (id: Number) => {
        try {
            const response = await api.get(`/mahasiswa/${id}`);
            setData(response.data);
            console.log(response.data);
        } catch (error) {
            console.log(error);
        }
    };
    useEffect(() => {
        getData(Number(id));
    }, []);
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
                                name="nama"
                                value={data.nama}
                                onIonChange={handleChange}
                            ></IonInput>
                        </IonCol>
                    </IonRow>
                    <IonRow>
                        <IonCol className="ion-text-start">
                            <IonInput
                                placeholder="NIM"
                                fill="solid"
                                value={data.nim}
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

export default edit;
