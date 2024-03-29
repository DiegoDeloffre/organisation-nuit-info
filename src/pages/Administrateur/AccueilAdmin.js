import React, { useState } from "react";
import "../../styles/Administrateur/Pages/AccueilAdmin.css";

import Onglet from "../../components/Administrateur/onglet";
import ListeParticipants from "../../components/Administrateur/listeParticipants";
import ListeAgentsLibres from "../../components/Administrateur/listeAgentsLibres";
import ListeMatériels from "../../components/Administrateur/listeMatériels";
import ListeRecrutement from "../../components/Administrateur/listeRecrutement";
import ListeEquipes from "../../components/Administrateur/listeEquipes";

import { Button } from '@material-ui/core';

import { bloquerInscriptions, resetDatabase } from "../../api/apiReact/apiAdministrateur";

function AccueilAdmin() {
    const [ongletActif, setOngletActif] = useState("Participants");
    const [isProf, setIsProf] = useState(true);

    const handleClickOnglet = (onglet) => {
        setOngletActif(onglet);
    };

    const getContenuOnglet = () => {
        switch (ongletActif) {
            case "Participants":
                return <ListeParticipants />;
            case "Equipes":
                return <ListeEquipes />;
            case "Agents Libres":
                return <ListeAgentsLibres />;
            case "Matériels":
                return <ListeMatériels />;
            case "Aider Recrutement":
                return <ListeRecrutement />;
            default:
                return <ListeParticipants />;
        }
    };

    const bloquer = async () => {
        localStorage.bloque === "true" ? localStorage.setItem("bloque", false) : localStorage.setItem("bloque", true)
        await bloquerInscriptions();
        window.location.href = "/administrateur";

    }

    const reset = async () => {
        await resetDatabase();
    };

    return (
        <div className="administrateur">
            <h1>Accueil Administrateur</h1>
            <div className="barre-onglets">
                <Onglet
                    nom="Participants"
                    actif={ongletActif === "Participants"}
                    onClick={() => handleClickOnglet("Participants")}
                />
                <Onglet
                    nom="Equipes"
                    actif={ongletActif === "Equipes"}
                    onClick={() => handleClickOnglet("Equipes")}
                />
                <Onglet
                    nom="Agents Libres"
                    actif={ongletActif === "Agents Libres"}
                    onClick={() => handleClickOnglet("Agents Libres")}
                />
                <Onglet
                    nom="Matériels"
                    actif={ongletActif === "Matériels"}
                    onClick={() => handleClickOnglet("Matériels")}
                />
                <Onglet
                    nom="Aider Recrutement"
                    actif={ongletActif === "Aider Recrutement"}
                    onClick={() => handleClickOnglet("Aider Recrutement")}
                />
            </div>
            <div className="contenu-onglet">{getContenuOnglet()}</div>

            <div className="buttons">
                <Button variant="contained" color="primary" href="/comparer">
                    Comparer Listes
                </Button>

            </div>
            {isProf &&

                <div className="buttons">
                    <Button variant="contained" color="primary" href="/salles">
                        Affectation Salles
                    </Button>
                    <Button variant="contained" color="primary" onClick={reset}>
                        Reset database
                    </Button>
                    <Button variant="contained" color="primary" href="/ajouterOrganisateur">
                        Ajouter un organisateur
                    </Button>
                    <Button variant="contained" color="primary" onClick={bloquer}>
                        {localStorage.bloque === "false" ? "Bloquer inscriptions" : "Débloquer inscriptions"}
                    </Button>
                </div>

            }
        </div>
    );
}

export default AccueilAdmin;
