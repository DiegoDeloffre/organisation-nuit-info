import React, { useState, useEffect } from "react";

import { getChercheurs } from '../../api/apiReact/apiUtilisateurs';

function ListeAgentsLibres() {
    const [donnees, setDonnees] = useState([]);
    const [chercheurs, setChercheurs] = useState([]);

    useEffect(() => {
        const recupChercheurs = async () => {
            let data = await getChercheurs();
            setChercheurs(data)
        };
        recupChercheurs();
    }, []);
    return (
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
                {chercheurs.length === 0 ? (
                    <></>
                ) : (
                    chercheurs.map((chercheur) => (
                        <tr key={chercheur.IdChercheur}>
                            <td>{chercheur.Nom}</td>
                            <td>{chercheur.Prenom}</td>
                            <td>{chercheur.Mail}</td>
                            <td>{chercheur.Filiere}</td>
                        </tr>
                    ))
                )}
            </tbody>
        </table>
    );
}

export default ListeAgentsLibres;
