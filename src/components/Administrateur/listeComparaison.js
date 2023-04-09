import React from "react";
import "../../styles/Administrateur/Components/listeRecrutement.css";

import { v4 as uuidv4 } from 'uuid';

function ListeComparaison({ liste1, liste2 }) {

    return (
        <div className="recrutement-wrapper">
            <div className="recrutement-inner">
                <h2>Pas inscrits sur la nuit de l'info</h2>
                <table className="tableau-donnees">
                    <thead>
                        <tr>
                            <th>Nom</th>
                            <th>Prénom</th>
                            <th>Mail</th>
                        </tr>
                    </thead>
                    <tbody>
                        {liste1.length === 0 ? (
                            <></>
                        ) : (
                            liste1.map((etudiant) => (
                                <tr key={uuidv4()}>
                                    <td>{etudiant.nom}</td>
                                    <td>{etudiant.prenom}</td>
                                    <td>{etudiant.mail}</td>
                                </tr>
                            ))
                        )}
                    </tbody>
                </table>
            </div>
            <div className="recrutement-inner">
                <h2>Pas inscrits sur ce site</h2>
                <table className="tableau-donnees">
                    <thead>
                        <tr>
                            <th>Nom</th>
                            <th>Prénom</th>
                            <th>Mail</th>
                        </tr>
                    </thead>
                    <tbody>
                        {liste2.length === 0 ? (
                            <></>
                        ) : (
                            
                            liste2.map((etudiant2) => (
                                <tr key={uuidv4()}>
                                    <td>{etudiant2.nom}</td>
                                    <td>{etudiant2.prenom}</td>
                                    <td>{etudiant2.mail}</td>
                                </tr>
                            ))
                        )}
                    </tbody>
                </table>
            </div>

        </div>

    );
}

export default ListeComparaison;
