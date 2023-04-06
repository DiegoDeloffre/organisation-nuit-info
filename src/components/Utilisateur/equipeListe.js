import React, { useState } from 'react';
import "../../styles/Utilisateur/Components/equipeListe.css"

import { Button } from '@material-ui/core';
import Contacter from '../Popup/Contacter';
import { envoyerDemande } from '../../api/apiReact/apiUtilisateurs';

function EquipeListe({ idEquipe, nomEquipe, description, isole, salleEquipe, membres, chef, nomChef, prenomChef }) {
    const [contact, setContact] = useState(false);
 
    function handleCloseContact() {
        setContact(false);
    }

    function handleContact() {
        setContact(true);
    }

    const sendDemande = async () => {
        await envoyerDemande(23, idEquipe);
    }

    return (
        <div className='equipe-liste'>
            <h2>{nomEquipe}</h2>
            <p className='equipe-membre-recrute'>
                {nomChef} {prenomChef} <br></br>
                {membres[0].Nom} {membres[0].Prenom} {membres[0].filiere}<br></br>
                {membres.slice(1).map((membre) => (
                    <React.Fragment key={membre.IdMembre}>
                        {membre.Nom} {membre.Prenom} {membre.filiere}<br></br>
                    </React.Fragment>
                ))}
            </p>
            <p className='description'>{description}</p>
            <div className='criteres'>
                <h5>{salleEquipe == "0" ? 'Salle équipee' : 'Salle non équipée'}</h5>
                <h5>{isole === "1" ? 'En équipe dans la salle' : (isole === "2" ? 'Peu importe' : 'Seul dans la salle')}</h5>
            </div>

            {contact && <Contacter onClose={handleCloseContact} mail={chef} nom={nomChef} prenom={prenomChef} />}

            <Button className='button-message' variant="contained" color="primary" onClick={handleContact}>
                Envoyer un message
            </Button>

            <Button className='button-demande' variant="contained" color="primary" onClick={sendDemande}>
                Envoyer une demande
            </Button>
        </div>
    );
}

export default EquipeListe;
