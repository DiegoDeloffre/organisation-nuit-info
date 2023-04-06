import React, { useState, useEffect } from "react";
import "../../styles/Administrateur/Components/listeRecrutement.css";

import { getChercheurs, getEquipesRecrutant } from '../../api/apiReact/apiUtilisateurs';


function ListeRecrutement() {
    const [donnees, setDonnees] = useState([]);

    const [chercheurs, setChercheurs] = useState([]);
    const [equipes, setEquipesQuiRecrutent] = useState([]);

    useEffect(() => {
        const recupChercheurs = async () => {
            let data = await getChercheurs();
            setChercheurs(data)
        };
        const getEquipesQuiRecrutent = async () => {
            let data = await getEquipesRecrutant();
            setEquipesQuiRecrutent(data);
        };
        getEquipesQuiRecrutent();
        recupChercheurs();
    }, []);

    return (
        <div className="recrutement-wrapper">
            <div className="recrutement-inner">
                <h2>Equipes</h2>
                <table className="tableau-donnees">
                    <thead>
                        <tr>
                            <th>Equipe</th>
                            <th>Responsable</th>
                            <th>Mail</th>
                            <th>Promo Majoritaire</th>
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
                                    <td>{equipe.Membres[0].filiere}</td>
                                </tr>
                            ))
                        )}
                    </tbody>
                </table>
            </div>
            <div className="recrutement-inner">
                <h2>Chercheurs</h2>
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
            </div>

        </div>

    );
}

export default ListeRecrutement;
