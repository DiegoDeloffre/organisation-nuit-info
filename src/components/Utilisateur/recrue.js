import React, { useState } from 'react';
import "../../styles/Utilisateur/Components/recrue.css"

import { Button } from '@material-ui/core';

function Recrue({ infoAgent, description, demandeRecue }) {


    return (
        <div className='recrue'>
            <p className='recrue-infos'>{infoAgent}</p>
            <p className='recrue-description'>{description}</p>
            <Button className='recrue-button-message' variant="contained" color="primary">
                Envoyer un message
            </Button>
            <div className='recrue-button-demande'>
                {
                    demandeRecue && <Button className='recrue-button-demande' variant="contained" color="primary">
                        Accepter Demande
                    </Button>
                }
            </div>



        </div>
    );
}

export default Recrue;
