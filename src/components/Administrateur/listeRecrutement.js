import React, { useState, useEffect } from "react";
import "../../styles/Administrateur/Components/listeRecrutement.css";

function ListeRecrutement() {
    const [donnees, setDonnees] = useState([]);

    /*useEffect(() => {
      // Appel API vers la base de données
      fetch("https://exemple.com/api/donnees")
        .then((reponse) => reponse.json())
        .then((donneesApi) => setDonnees(donneesApi));
    }, []);*/

    return (
        <div className="recrutement-wrapper">
            <div className="recrutement-inner">
                <h2>Equipes</h2>
                <table className="tableau-donnees">
                    <thead>
                        <tr>
                            <th>Equipe</th>
                            <th>Nom</th>
                            <th>Prénom</th>
                            <th>Mail</th>
                            <th>Promo</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr key={1}>
                            <td>Equipe 1</td>
                            <td>Nom 1</td>
                            <td>Prénom 1</td>
                            <td>nom1.prenom1@etu.univ-tours.fr</td>
                            <td>DI5</td>
                        </tr>
                        <tr key={2}>
                            <td>Equipe 2</td>
                            <td>Nom 2</td>
                            <td>Prénom 2</td>
                            <td>nom2.prenom2@etu.univ-tours.fr</td>
                            <td>DI4</td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div className="recrutement-inner">
                <h2>Agents Libres</h2>
                <table className="tableau-donnees">
                    <thead>
                        <tr>
                            <th>Nom</th>
                            <th>Prénom</th>
                            <th>Mail</th>
                            <th>Promo</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr key={1}>
                            <td>Nom 1</td>
                            <td>Prénom 1</td>
                            <td>nom1.prenom1@etu.univ-tours.fr</td>
                            <td>DI5</td>
                        </tr>
                        <tr key={2}>
                            <td>Nom 2</td>
                            <td>Prénom 2</td>
                            <td>nom2.prenom2@etu.univ-tours.fr</td>
                            <td>DI4</td>
                        </tr>
                    </tbody>
                </table>
            </div>

        </div>

    );
}

export default ListeRecrutement;
