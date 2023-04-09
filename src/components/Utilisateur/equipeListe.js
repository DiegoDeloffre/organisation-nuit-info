import React, { useState, useEffect } from 'react';
import "../../styles/Utilisateur/Components/equipeListe.css"

import { Button } from '@material-ui/core';
import Contacter from '../Popup/Contacter';
import { envoyerDemande } from '../../api/apiReact/apiUtilisateurs';

function EquipeListe({ idEquipe, nomEquipe, description, isole, salleEquipe, membres, chef, nomChef, prenomChef, filiereChef,demandes }) {
    const [contact, setContact] = useState(false);
    const [boutonDemande, setBoutonDemande] = useState(true);

    useEffect(() => {
        handleDemande()
    }, []);

    function handleDemande() {
        // On parcourt le tableau de demandes
        for (let i = 0; i < demandes.length; i++) {
            // Si on trouve une demande dont l'IdChercheur est égal à l'id de l'utilisateur actuel
            if (demandes[i].IdChercheur === localStorage.IdUser) {

                // On met la variable d'affichage à false
                setBoutonDemande(false)
                // On sort de la boucle, puisqu'on a trouvé une demande correspondante
                break;
            }
        }
    }

    function handleCloseContact() {
        setContact(false);
    }

    function handleContact() {
        setContact(true);
    }

    const sendDemande = async () => {
        await envoyerDemande(localStorage.UserId, idEquipe);
        setBoutonDemande(false)
        window.alert("Demande envoyée !")
    }

    return (
        <div className='equipe-liste'>
            <h2>{nomEquipe}</h2>
            <p className='equipe-membre-recrute'>
                {nomChef} {prenomChef} {filiereChef}<br></br>
                {membres.length !== 0 &&
                    <React.Fragment>
                        {membres[0].Nom} {membres[0].Prenom} {membres[0].filiere}<br></br>
                        {membres.slice(1).map((membre) => (
                            <React.Fragment key={membre.IdMembre}>
                                {membre.Nom} {membre.Prenom} {membre.filiere}<br></br>
                            </React.Fragment>
                        ))}
                    </React.Fragment>
                }

            </p>
            <p className='description'>{description}</p>
            <div className='criteres'>
                <h5>{salleEquipe === "0" ? 'Salle équipee' : 'Salle non équipée'}</h5>
                <h5>{isole === "1" ? 'En équipe dans la salle' : (isole === "2" ? 'Peu importe' : 'Seul dans la salle')}</h5>
            </div>

            {contact && <Contacter onClose={handleCloseContact} mail={chef} nom={nomChef} prenom={prenomChef} />}


            <Button className='button-message' variant="contained" color="primary" onClick={handleContact}>
                Envoyer un message
            </Button>


            {boutonDemande &&
                <Button className='button-demande' variant="contained" color="primary" onClick={sendDemande}>
                    Envoyer une demande
                </Button>
            }
        </div>
    );
}

export default EquipeListe;
