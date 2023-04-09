import React, { useState } from 'react';
import "../../styles/Utilisateur/Components/recrue.css"

import { Button } from '@material-ui/core';

import { accepterDemande } from '../../api/apiReact/apiUtilisateurs';


function Recrue({ idChercheur, infoChercheur, description, demandeRecue, updateChercheur }) {
    const accepterDemandeChercheur = async () => {
        await accepterDemande(localStorage.UserId, idChercheur);
        updateChercheur();
        window.location.href = "/accueil2";
    };

    return (
        <div className='recrue'>
            <p className='recrue-infos'>{infoChercheur}</p>
            <p className='recrue-description'>{description}</p>
            <Button className='recrue-button-message' variant="contained" color="primary">
                Envoyer un message
            </Button>
            <div className='recrue-button-demande'>
                {
                    demandeRecue && <Button className='recrue-button-demande' variant="contained" color="primary" onClick={accepterDemandeChercheur}>
                        Accepter Demande
                    </Button>
                }
            </div>



        </div>
    );
}

export default Recrue;
