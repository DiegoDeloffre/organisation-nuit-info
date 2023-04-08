import React, { useState, useEffect } from "react";

import { getParticipants } from "../../api/apiReact/apiAdministrateur";

function ListeParticipants() {
    const [chefs, setChefs] = useState([]);
    const [membres, setMembres] = useState([]);
    const [chercheurs, setChercheurs] = useState([]);


    useEffect(() => {
        const recupParticipants = async () => {
            let data = await getParticipants();
            setChefs(data.Chefs)
            setMembres(data.Membres)
            setChercheurs(data.Chercheurs)
        };
        recupParticipants();
    }, []);

    return (
        <table className="tableau-donnees">
            <thead>
                <tr>
                    <th>Equipe</th>
                    <th>Nom</th>
                    <th>Prénom</th>
                    <th>Mail</th>
                    <th>Promo</th>
                    <th>Salle</th>
                </tr>
            </thead>
            <tbody>
                {chefs.length === 0 ? (
                    <></>
                ) : (
                    chefs.map((chef) => (
                        <tr key={chef.Mail}>
                            <td>{chef.NomEquipe}</td>
                            <td>{chef.Nom}</td>
                            <td>{chef.Prenom}</td>
                            <td>{chef.Mail}</td>
                            <td>{chef.Filiere}</td>
                            <td>{chef.Salle}</td>
                        </tr>
                    ))
                )}
                {membres.length === 0 ? (
                    <></>
                ) : (
                    membres.map((membre) => (
                        <tr key={membre.Mail}>
                            <td>{membre.NomEquipe}</td>
                            <td>{membre.Nom}</td>
                            <td>{membre.Prenom}</td>
                            <td>{membre.Mail}</td>
                            <td>{membre.Filiere}</td>
                            <td>{membre.Salle}</td>
                        </tr>
                    ))
                )}
                {chercheurs.length === 0 ? (
                    <></>
                ) : (
                    chercheurs.map((chercheur) => (
                        <tr key={chercheur.Mail}>
                            {<td>{chercheur.NomEquipe}</td>}
                            <td>{chercheur.Nom}</td>
                            <td>{chercheur.Prenom}</td>
                            <td>{chercheur.Mail}</td>
                            <td>{chercheur.Filiere}</td>
                            <td>{chercheur.Salle}</td>
                        </tr>
                    ))
                )}
            </tbody>
        </table>
    );
}

export default ListeParticipants;
