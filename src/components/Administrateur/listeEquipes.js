import React, { useState, useEffect } from "react";

import { getEquipes } from "../../api/apiReact/apiAdministrateur";

function ListeEquipes() {
    const [equipes, setEquipes] = useState([]);

    useEffect(() => {
        const recupEquipes = async () => {
            let data = await getEquipes();
            setEquipes(data)
        };
        recupEquipes();
    }, []);

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
                {equipes.length === 0 ? (
                    <></>
                ) : (
                    equipes.map((equipe) => (
                        <tr key={equipe.Equipe.IdEquipe}>
                            <td>{equipe.Equipe.Nom}</td>
                            <td>{equipe.Equipe.NomChef} {equipe.Equipe.PrenomChef}</td>
                            <td>{equipe.Equipe.MailChef}</td>
                            <td>{equipe.Membres.length + 1}</td>
                            <td>{equipe.Membres[0].filiere}</td>
                            {/* <td>{equipe.Equipe.Salle}</td> */}
                        </tr>
                    ))
                )}
            </tbody>
        </table>
    );
}

export default ListeEquipes;
