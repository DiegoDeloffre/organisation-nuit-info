import React, { useState, useEffect } from "react";
import "../../styles/Administrateur/Components/listeMateriels.css";
import ReactToPrint from "react-to-print";

import { Button } from '@material-ui/core';

import { getMaterielsGlobal, getMaterielsParEquipe } from "../../api/apiReact/apiAdministrateur";

function ListeMatériels() {
    const [global, setGlobal] = useState([]);
    const [parEquipe, setParEquipe] = useState([]);

    useEffect(() => {
        const recupGlobal = async () => {
            let data = await getMaterielsGlobal();
            setGlobal(data)
        };
        const recupParEquipe = async () => {
            let data = await getMaterielsParEquipe();
            setParEquipe(data);
        };
        recupGlobal();
        recupParEquipe();
    }, []);

    return (
        <div className="materiel-wrapper">
            <h2>Nombre total de matériels</h2>
            <div className="materiel-inner">
                <ul>
                    <li>Multiprises : {global.length !== 0 && global.Basiques[0].NbTotalMulti}</li>
                </ul>
                <ul>
                    <li>Ecrans : {global.length !== 0 && global.Basiques[0].NbTotalEcran}</li>
                </ul>
                <ul>
                    <li>Claviers : {global.length !== 0 && global.Basiques[0].NbTotalClavier}</li>
                </ul>
                <ul>
                    <li>Souris : {global.length !== 0 && global.Basiques[0].NbTotalSouris}</li>
                </ul>
            </div>
            <h2>Demandes spécifiques</h2>
            <div className="materiel-inner">
                {global.length === 0 ? (
                    <></>
                ) : (
                    global.Autres.map((materiel) => (
                        <ul key={materiel.Nom}>
                            <li>{materiel.autres}</li>
                        </ul>
                    ))
                )}

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
                        {parEquipe.length === 0 ? (
                            <></>
                        ) : (
                            parEquipe.map((materiel) => (
                                <tr key={materiel.IdEquipe}>
                                    <td>{materiel.Nom}</td>
                                    <td></td>
                                    <td>
                                        <ul>
                                            <li>Multiprises : {materiel.Multiprises}</li>
                                            <li>Ecrans : {materiel.Ecrans}</li>
                                            <li>Claviers : {materiel.Claviers}</li>
                                            <li>Souris : {materiel.Souris}</li>
                                        </ul>
                                        <ul>
                                            {materiel.autres !== "" && (
                                                <li>{materiel.autres}</li>
                                            )}

                                        </ul>
                                    </td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                </tr>
                            ))
                        )}
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
