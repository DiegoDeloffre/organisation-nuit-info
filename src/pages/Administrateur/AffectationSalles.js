import React, { useState, useEffect } from "react";
import "../../styles/Administrateur/Pages/AffectationSalles.css";

import { Button } from '@material-ui/core';

import { getEquipes, affecterSalle } from "../../api/apiReact/apiAdministrateur";
import { getSalles } from "../../api/apiReact/apitools";

function AffectationSalles() {
    const [salles, setSalles] = useState([]);
    const [equipes, setEquipes] = useState([]);
    const [affectations, setAffectations] = useState({});

    useEffect(() => {
        const recupEquipes = async () => {
            let data = await getEquipes();
            console.log(data)
            setEquipes(data)
        };
        const recupSalles = async () => {
            let data = await getSalles();
            setSalles(data)
        };
        recupSalles();
        recupEquipes();
    }, []);

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

    const handleSalleChange = (event, idEquipe) => {
        const nouvelleAffectation = { ...affectations, [idEquipe]: event.target.value };
        setAffectations(nouvelleAffectation);
        console.log(nouvelleAffectation)
    };

    const affecterSalles = async () => {
        for (const [idEquipe, idSalle] of Object.entries(affectations)) {
            // Affectation de la salle correspondante à l'équipe
            console.log(idEquipe)
            console.log(idSalle)
            await affecterSalle(idEquipe, idSalle);
        }
    };

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
                    {equipes.map((equipe) => (
                        <tr key={equipe.Equipe.IdEquipe}>
                            <td>{equipe.Equipe.Nom}</td>
                            <td>{equipe.Equipe.NomChef} {equipe.Equipe.PrenomChef}</td>
                            <td>{equipe.Equipe.MailChef}</td>
                            <td>{equipe.Membres.length + 1}</td>
                            <td>{equipe.Equipe.PromoMaj}</td>
                            <td>{handleFirstChoice(equipe.Equipe.SalleEquipe)}</td>
                            <td>{handleSecondChoice(equipe.Equipe.Isole)}</td>
                            <td>
                                <select
                                    value={affectations[equipe.Equipe.IdEquipe] || ''}
                                    onChange={(event) => handleSalleChange(event, equipe.Equipe.IdEquipe)}
                                >
                                    {equipe.Equipe.Salle !== ""
                                        ?
                                        (<option key={equipe.Equipe.Salle} value={equipe.Equipe.Salle}>{equipe.Equipe.Salle}</option>)
                                        :
                                        (<option value="">Choisir une salle</option>)
                                    }
                                    {salles
                                        .filter((salle) => salle.Nom !== equipe.Equipe.Salle)
                                        .map((salle) => (
                                            <option key={salle.IdSalle} value={salle.IdSalle}>{salle.Nom}</option>
                                        ))
                                    }
                                </select>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>

            <Button variant="contained" color="primary" onClick={affecterSalles}>
                Confirmer
            </Button>

            <Button variant="contained" color="primary" href="/administrateur">
                Retour
            </Button>
        </div>
    );
}

export default AffectationSalles;
