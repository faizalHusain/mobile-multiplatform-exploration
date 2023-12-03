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
import "./list.css";
import api from "../configs/axios-interceptors";
import React from "react";
import { useState, useEffect } from "react";
import { useIonToast } from "@ionic/react";
interface Mahasiswa {
    id: number;
    nama: string;
    nim: string;
    created_at: string;
    updated_at: string;
}
const showToast = (message: string, color: string) => {
    const [present] = useIonToast();
    present({
        color: color,
        message: message,
        duration: 3000,
    });
};
const list: React.FC = () => {
    const [data, setData] = useState<Mahasiswa[]>([]);
    const getData = async () => {
        try {
            const response = await api.get("/mahasiswa");
            setData(response.data.data);
            console.log(response.data);
        } catch (error) {
            console.log(error);
        }
    };
    const deleteData = async function (id: number) {
        try {
            const response = await api.delete(`/mahasiswa`, {
                data: { id: id },
            });
            console.log(response.data);
        } catch (error) {
            console.log(error);
        }
    };
    useEffect(() => {
        getData();
    }, []);
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
                            <IonButton routerLink="/create">Tambah</IonButton>
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
                                <IonButton routerLink={`/edit/${item.id}`}>
                                    <IonIcon icon={create}></IonIcon>
                                </IonButton>
                                <IonButton
                                    onClick={() => {
                                        deleteData(item.id);
                                    }}
                                >
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

export default list;
