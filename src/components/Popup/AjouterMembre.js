import React, { useState } from "react";

import { Button } from '@material-ui/core';

function AjouterMembre({ onClose }) {
    const [nom, setNom] = useState("");
    const [prenom, setPrenom] = useState("");
    const [mail, setMail] = useState("");
    const [filiere, setFiliere] = useState("");

    const handleNomChange = (event) => {
        setNom(event.target.value);
    };

    const handlePrenomChange = (event) => {
        setPrenom(event.target.value);
    };

    const handleMailChange = (event) => {
        setMail(event.target.value);
    };

    const handleFiliereChange = (event) => {
        setFiliere(event.target.value);
    };

    const handleAjouter = () => {
        // Effectuer une action d'ajout de membre avec les données du formulaire
        // ...
        // Fermer la popup
        onClose();
    };

    return (
        <div className="popup-container">
            <div className="popup-overlay" onClick={onClose} />
            <div className="popup">
                <span className="popup-close" onClick={onClose}></span>
                <h2>Ajouter Membre</h2>
                <div className="popup-inner">
                    <div className='labels'>
                        <label htmlFor="nom">Nom :</label>
                        <label htmlFor="prenom">Prénom :</label>
                        <label htmlFor="mail">Mail :</label>
                        <label htmlFor="filiere">Filière :</label>
                    </div>

                    <div className='inputs'>
                        <input type="text" id="nom" value={nom} onChange={handleNomChange} />
                        <input type="text" id="prenom" value={prenom} onChange={handlePrenomChange} />
                        <input type="text" id="prenom" value={mail} onChange={handleMailChange} />
                        <select id="filiere" value={filiere} onChange={handleFiliereChange}>
                            <option value="DI">DI</option>
                            <option value="DII">DII</option>
                            <option value="Peip">Peip</option>
                        </select>
                    </div>
                </div>
                <Button variant="contained" color="primary" onClick={handleAjouter}>
                    Ajouter
                </Button>
            </div>
        </div>
    );
}

export default AjouterMembre;
