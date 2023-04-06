import React, { useState, useEffect } from 'react';
import "../../styles/Utilisateur/Components/membre.css"

import star from "../../assets/star.png"
import minus from "../../assets/minus.png"

import { supprimerMembreEquipe } from '../../api/apiReact/apiUtilisateurs';

function Membre({ premier, idMembre, nomMembre, prenomMembre, filiereMembre, updateMembre}) {

    const supprimerMembre = async () => {
        console.log(idMembre)
        await supprimerMembreEquipe(idMembre);
        updateMembre()
    };


    return (<div className="membre">
        <div className='chef'>
            {premier && <img src={star} alt="Chef d'équipe" />}
        </div>

        <h3>{nomMembre}</h3>
        <h3>{prenomMembre}</h3>
        <h3>{filiereMembre}</h3>
        <div className='chef'>
            {!premier && <img className='removeMember' alt="Supprimer membre" src={minus} onClick={supprimerMembre}/>}
        </div>


    </div>
    )
}

export default Membre