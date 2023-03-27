import React, { useState } from 'react';
import "../../styles/Utilisateur/Components/equipe.css"

import Membre from "./membre"
import AjouterMembre from "../Popup/AjouterMembre";
import ModifierNomEquipe from "../Popup/ModifierNomEquipe";

import { Button } from '@material-ui/core';

import editIcon from '../../assets/pencil.png';
import { nomMembre, prenomMembre, filiereMembre } from "../../assets/mockElements";

function Equipe({name, setName, membres}) {
    const [afficherPopup, setAfficherPopup] = useState(false);
    const [showPopup, setShowPopup] = useState(false);
    
    const handleAfficherPopup = () => {
        setAfficherPopup(true);
    };

    const handleClosePopup = () => {
        setAfficherPopup(false);
    };

    const handleAfficherPopupEquipe = () => {
        setShowPopup(true);
    };

    const handleClosePopupEquipe = () => {
        setShowPopup(false);
    };

    const handleSave = (newName) => {
        setName(newName);
        setShowPopup(false);
    };
    return (<div className="equipe">
        <div className="equipe-members">
            <div className="edit-icon-container">
                <img
                    className="edit-icon"
                    src={editIcon}
                    alt="Edit icon"
                    onClick={handleAfficherPopupEquipe}
                />
            </div>
            <h2>{name}</h2>
            <Membre premier={true} nomMembre={nomMembre} prenomMembre={prenomMembre} filiereMembre={filiereMembre}/>
            <Membre premier={false} nomMembre={nomMembre} prenomMembre={prenomMembre} filiereMembre={filiereMembre}/>
            <Membre premier={false} nomMembre={nomMembre} prenomMembre={prenomMembre} filiereMembre={filiereMembre}/>
            <Membre premier={false} nomMembre={nomMembre} prenomMembre={prenomMembre} filiereMembre={filiereMembre}/>
            <Membre premier={false} nomMembre={nomMembre} prenomMembre={prenomMembre} filiereMembre={filiereMembre}/>
            <Membre premier={false} nomMembre={nomMembre} prenomMembre={prenomMembre} filiereMembre={filiereMembre}/>
            <Membre premier={false} nomMembre={nomMembre} prenomMembre={prenomMembre} filiereMembre={filiereMembre}/>
            <Membre premier={false} nomMembre={nomMembre} prenomMembre={prenomMembre} filiereMembre={filiereMembre}/>
            <Membre premier={false} nomMembre={nomMembre} prenomMembre={prenomMembre} filiereMembre={filiereMembre}/>

        </div>

        <div className="equipe-button">
            <Button variant="contained" color="primary" onClick={handleAfficherPopup}>
                Ajouter
            </Button>
        </div>

        {afficherPopup && <AjouterMembre onClose={handleClosePopup} />}
        {showPopup && <ModifierNomEquipe value={name} onSave={handleSave} onClose={handleClosePopupEquipe} />}

    </div>
    )
}

export default Equipe