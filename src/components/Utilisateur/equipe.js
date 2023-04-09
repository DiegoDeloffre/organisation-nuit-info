import React, { useState, useEffect } from 'react';
import "../../styles/Utilisateur/Components/equipe.css"

import Membre from "./membre"
import AjouterMembre from "../Popup/AjouterMembre";
import ModifierNomEquipe from "../Popup/ModifierNomEquipe";

import { Button } from '@material-ui/core';

import editIcon from '../../assets/pencil.png';

import { getMembres, modifierNomEquipe, getNomEquipe } from '../../api/apiReact/apiUtilisateurs';

function Equipe() {
    const [afficherPopup, setAfficherPopup] = useState(false);
    const [showPopup, setShowPopup] = useState(false);
    const [membres, setMembres] = useState([])
    const [chef, setChef] = useState([])
    const [name, setName] = useState("Nom de l'équipe");

    useEffect(() => {
        const recupMembres = async () => {
            let data = await getMembres(localStorage.UserId);
            setMembres(data.Membres)
            setChef(data.Chef)
        };

        const recupNomEquipe = async () => {
            let data = await getNomEquipe(localStorage.UserId);
            { data.length !== 0 && setName(data[0].Nom) }

        };
        recupMembres();
        recupNomEquipe();
    }, []);

    const recupNomEquipe2 = async () => {
        let data = await getNomEquipe(localStorage.UserId);
        setName(data[0].Nom)
    };

    const modifNomEquipe = async (nom) => {
        await modifierNomEquipe(localStorage.UserId, nom);
        recupNomEquipe2()
    };

    const updateMembres = async () => {
        let data = await getMembres(localStorage.UserId);
        setMembres(data.Membres)
    };

    return (<div className="equipe">
        <div className="equipe-members">
            <div className="edit-icon-container">
                <img
                    className="edit-icon"
                    src={editIcon}
                    alt="Edit icon"
                    onClick={() => setShowPopup(true)}
                />
            </div>
            <h2>{name}</h2>
            {chef.length === 0 ? (
                <></>
            ) : (
                <Membre premier={true} nomMembre={chef[0].Nom} prenomMembre={chef[0].Prenom} filiereMembre={chef[0].Filiere} />
            )}

            {membres.length === 0 ? (
                <></>
            ) : (
                membres.map((membre) => (
                    <React.Fragment key={membre.IdMembre}>
                        <Membre
                            idMembre={membre.IdMembre}
                            premier={false}
                            nomMembre={membre.Nom}
                            prenomMembre={membre.Prenom}
                            filiereMembre={membre.filiere}
                            updateMembre={updateMembres}
                        />
                    </React.Fragment>
                ))
            )}
        </div>

        {localStorage.bloque === "false" &&
            <div className="equipe-button">
                <Button variant="contained" color="primary" onClick={() => setAfficherPopup(true)}>
                    Ajouter
                </Button>
            </div>
        }


        {afficherPopup && <AjouterMembre onClose={() => setAfficherPopup(false)} updateMembre={updateMembres} />}
        {showPopup && <ModifierNomEquipe value={name} onClose={() => setShowPopup(false)} onSave={modifNomEquipe} />}

    </div>
    )
}

export default Equipe