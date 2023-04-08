import React, { useState, useEffect } from "react";
import "../../styles/Administrateur/Pages/AffectationSalles.css";

import { Button } from '@material-ui/core';

import { getEquipes } from "../../api/apiReact/apiAdministrateur";
import { getSalles } from "../../api/apiReact/apitools";

function AffectationSalles() {
    const [salle, setSalle] = useState("Avosti");
    const [salles, setSalles] = useState([]);

    const [equipes, setEquipes] = useState([]);

    useEffect(() => {
        const recupEquipes = async () => {
            let data = await getEquipes();
            setEquipes(data)
        };
        const recupSalles = async () => {
            let data = await getSalles();
            setSalles(data)
        };
        recupSalles();
        recupEquipes();
    }, []);

    const handleSalleChange = (event) => {
        setSalle(event.target.value);
    };

    function handleFirstChoice(choice) {
        switch (choice) {
            case "0":
                return "Salle équipée nécessaire"
        }
    }

    function handleSecondChoice(choice) {
        switch (choice) {
            case "0":
                return "Seul dans la salle"
            case "1":
                return "Avec d'autres équipes"
            default:
                return "Pas de préférence"
        }
    }

    function handleConfirmer() {
        // Code à exécuter lorsque l'utilisateur clique sur le bouton "Valider"
    }

    return (
        <div className="salles-wrapper">
            <h2>Affectation des salles</h2>
            <table className="tableau-donnees">
                <thead>
                    <tr>
                        <th>Equipe</th>
                        <th>Responsable</th>
                        <th>Mail</th>
                        <th>Nombre de membres</th>
                        <th>Promo majoritaire</th>
                        <th>Salle équipée ?</th>
                        <th>Seul dans la salle ?</th>
                        <th>Salle</th>
                    </tr>
                </thead>
                <tbody>
                    {equipes.length === 0 ? (
                        <></>
                    ) : (
                        equipes.map((equipe) => (

                            <tr key={equipe.Equipe.IdEquipe}>
                                <td>{equipe.Equipe.Nom}</td>
                                <td>{equipe.Equipe.NomChef} {equipe.Equipe.PrenomChef}</td>
                                <td>{equipe.Equipe.MailChef}</td>
                                <td>{equipe.Membres.length + 1}</td>
                                <td>{equipe.Equipe.PromoMaj}</td>
                                <td>{handleFirstChoice(equipe.Equipe.SalleEquipe)}</td>
                                <td>{handleSecondChoice(equipe.Equipe.Isole)}</td>
                                <td>
                                    <select value={salle} onChange={handleSalleChange}>
                                        {salles.length === 0 ? (
                                            <></>
                                        ) : (
                                            salles.map((salle) => (
                                                <option key={salle.IdSalle} value={salle.Nom}>{salle.Nom}</option>
                                            ))
                                        )}
                                    </select>
                                </td>
                            </tr>
                        ))
                    )}
                </tbody>
            </table>

            <Button variant="contained" color="primary" onClick={handleConfirmer}>
                Confirmer
            </Button>

            <Button variant="contained" color="primary" href="/administrateur">
                Retour
            </Button>
        </div>

    );
}

export default AffectationSalles;
