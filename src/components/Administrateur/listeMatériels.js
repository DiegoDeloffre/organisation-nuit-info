import React, { useState, useEffect } from "react";
import "../../styles/Administrateur/Components/listeMateriels.css";
import ReactToPrint from "react-to-print";

import { Button } from '@material-ui/core';

function ListeMatériels() {
    const [donnees, setDonnees] = useState([]);

    /*useEffect(() => {
      // Appel API vers la base de données
      fetch("https://exemple.com/api/donnees")
        .then((reponse) => reponse.json())
        .then((donneesApi) => setDonnees(donneesApi));
    }, []);*/

    return (
        <div className="materiel-wrapper">
            <h2>Nombre total de matériels</h2>
            <div className="materiel-inner">
                <ul>
                    <li>Multiprises : 1</li>
                </ul>
                <ul>
                    <li>Ecrans : 1</li>
                </ul>
                <ul>
                    <li>Claviers : 1</li>
                </ul>
                <ul>
                    <li>Souris : 1</li>
                </ul>
            </div>
            <h2>Demandes spécifiques</h2>
            <div className="materiel-inner">
                <ul>
                    <li>Vidéoprojecteurs</li>
                </ul>
                <ul>
                    <li>dfdfgdfg</li>
                </ul>
                <ul>
                    <li>Clavibgfbebfggrs</li>
                </ul>
            </div>

            <div className="materiel-print">
                <h2>Liste des matériels par équipe</h2>

                <table className="tableau-donnees materiel-table" >
                    <thead>
                        <tr>
                            <th>Equipe</th>
                            <th>Etudiant</th>
                            <th>Matériel</th>
                            <th>Ajouts</th>
                            <th>Distribué</th>
                            <th>Récupéré</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr key={1}>
                            <td>Equipe 1</td>
                            <td></td>
                            <td>
                                <ul>
                                    <li>Multiprises : 1</li>
                                    <li>Ecrans : 2</li>
                                    <li>Claviers : 4</li>
                                    <li>Souris : 0</li>
                                </ul>
                                <ul>
                                    <li>Videoproj</li>
                                </ul>
                            </td>
                            <td></td>
                            <td></td>
                            <td></td>
                        </tr>
                        <tr key={2}>
                            <td>Equipe 2</td>
                            <td></td>
                            <td>
                                <ul>
                                    <li>Multiprises : 1</li>
                                    <li>Ecrans : 2</li>
                                    <li>Claviers : 4</li>
                                    <li>Souris : 0</li>
                                </ul>
                            </td>
                            <td></td>
                            <td></td>
                            <td></td>
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
            </div>
            <ReactToPrint
                trigger={() => <Button variant="contained" color="primary">
                    Imprimer
                </Button>}
                content={() => document.querySelector('.materiel-print')}
            />


        </div>
    );
}

export default ListeMatériels;
