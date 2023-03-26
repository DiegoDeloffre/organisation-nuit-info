import React, { useState, useEffect } from "react";

function ListeEquipes() {
    const [donnees, setDonnees] = useState([]);

    /*useEffect(() => {
      // Appel API vers la base de données
      fetch("https://exemple.com/api/donnees")
        .then((reponse) => reponse.json())
        .then((donneesApi) => setDonnees(donneesApi));
    }, []);*/

    return (
        <table className="tableau-donnees">
            <thead>
                <tr>
                    <th>Equipe</th>
                    <th>Responsable</th>
                    <th>Mail responsable</th>
                    <th>Nombre de membres</th>
                    <th>Promo majoritaire</th>
                    <th>Salle</th>
                </tr>
            </thead>
            <tbody>
                <tr key={1}>
                    <td>Equipe 1</td>
                    <td>Nom 1 Prenom 1</td>
                    <td>nom1.prenom1@etu.univ-tours.fr</td>
                    <td>4</td>
                    <td>DI5</td>
                    <td>Lovelace</td>
                </tr>
                <tr key={2}>
                    <td>Equipe 2</td>
                    <td>Nom 2 Prénom 2</td>
                    <td>nom2.prenom2@etu.univ-tours.fr</td>
                    <td>400</td>
                    <td>DI4</td>
                    <td>Lovelace</td>
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
    );
}

export default ListeEquipes;
