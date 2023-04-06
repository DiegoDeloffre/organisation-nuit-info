import React, { useState, useEffect } from "react";

import { getParticipants } from "../../api/apiReact/apiAdministrateur";

function ListeParticipants() {
    const [participants, setParticipants] = useState([]);

    useEffect(() => {
        const recupParticipants = async () => {
            let data = await getParticipants();
            setParticipants(data)
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
                {participants.length === 0 ? (
                    <></>
                ) : (
                    participants.map((participant) => (
                        <tr key={participant.Mail}>
                            {/* <td>{participant.equipe}</td> */}
                            <td>{participant.Nom}</td>
                            <td>{participant.Prenom}</td>
                            <td>{participant.Mail}</td>
                            <td>{participant.Filiere}</td>
                            {/* <td>{participant.salle}</td> */}
                        </tr>
                    ))
                )}
            </tbody>
        </table>
    );
}

export default ListeParticipants;
