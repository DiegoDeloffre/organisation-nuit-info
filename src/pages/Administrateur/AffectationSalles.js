import React, { useState, useEffect } from "react";
import "../../styles/Administrateur/Pages/AffectationSalles.css";

import { Button } from '@material-ui/core';

function AffectationSalles() {
    const [donnees, setDonnees] = useState([]);
    const [salle, setSalle] = useState("Avosti");

    /*useEffect(() => {
      // Appel API vers la base de données
      fetch("https://exemple.com/api/donnees")
        .then((reponse) => reponse.json())
        .then((donneesApi) => setDonnees(donneesApi));
    }, []);*/

    const handleSalleChange = (event) => {
        setSalle(event.target.value);
    };
 
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
                        <th>Nombre de membres</th>
                        <th>Promo majoritaire</th>
                        <th>Salle équipée ?</th>
                        <th>Seul dans la salle ?</th>
                        <th>Salle</th>
                    </tr>
                </thead>
                <tbody>
                    <tr key={1}>
                        <td>Equipe 1</td>
                        <td>Nom 1 Prénom 1</td>
                        <td>4</td>
                        <td>DI5</td>
                        <td>Oui</td>
                        <td>Non</td>
                        <td>
                            <select value={salle} onChange={handleSalleChange}>
                                <option value="Avosti">Avosti</option>
                                <option value="Lovelace">Lovelace</option>
                                <option value="Windows A">Windows A</option>
                            </select>
                        </td>
                    </tr>
                    <tr key={2}>
                        <td>Equipe 1</td>
                        <td>Nom 1 Prénom 1</td>
                        <td>8</td>
                        <td>DI5</td>
                        <td>Non</td>
                        <td>Oui</td>
                        <td>
                            <select value={salle} onChange={handleSalleChange}>
                                <option value="Avosti">Avosti</option>
                                <option value="Lovelace">Lovelace</option>
                                <option value="Windows A">Windows A</option>
                            </select>
                        </td>
                    </tr>


                    {/* {donnees.map((donneesLigne) => (
          <tr key={donneesLigne.id}>
            <td>{donneesLigne.equipe}</td>
            <td>{donneesLigne.nom}</td>
            <td>{donneesLigne.prenom}</td>
            <td>{donneesLigne.mail}</td>
            <td>{donneesLigne.promo}</td>
            <td>{donneesLigne.salle}</td>
          </tr>
        ))} */}
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
