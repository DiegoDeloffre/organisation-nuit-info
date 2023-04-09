import React, { useState, useEffect } from "react";

import { Button } from '@material-ui/core';

import { getAllFilieres } from "../../api/apiReact/apitools";
import { ajouterMembreEquipe } from "../../api/apiReact/apiUtilisateurs";

function AjouterMembre({ onClose, updateMembre }) {
    const [nom, setNom] = useState("");
    const [prenom, setPrenom] = useState("");
    const [mail, setMail] = useState("");
    const [filiere, setFiliere] = useState("DI5");
    const [filieres, setFilieres] = useState([]);

    useEffect(() => {
        const recupFilieres = async () => {
            let data = await getAllFilieres();
            setFilieres(data)

        };
        recupFilieres();
    }, []);

    const ajouterMembre = async () => {
        if (nom === "" || prenom === "" || mail === "") {
            window.alert("Des champs sont vides. Veuillez les remplir s'il vous plait.")
        } else {
            await ajouterMembreEquipe(parseInt(localStorage.idUser), nom, prenom, mail, filiere);
            updateMembre()
            onClose();
        }
    };

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
                            {filieres.length === 0 ? (
                                <></>
                            ) : (
                                filieres.map((fil) => (
                                    <option key={fil.IdFiliere} value={fil.Nom}>{fil.Nom}</option>
                                ))
                            )}
                        </select>
                    </div>
                </div>
                <Button variant="contained" color="primary" onClick={ajouterMembre}>
                    Ajouter
                </Button>
            </div>
        </div>
    );
}

export default AjouterMembre;
