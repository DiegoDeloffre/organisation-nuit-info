import React, {useState} from 'react';
import "../../styles/Utilisateur/Components/equipeListe.css"

import { Button } from '@material-ui/core';
import Contacter from '../Popup/Contacter';

function EquipeListe({ nomEquipe }) {
    const [contact, setContact] = useState(false);

    function handleCloseContact(){
        setContact(false);
    }

    function handleContact(){
        setContact(true);
    }

    return (
        <div className='equipe-liste'>
            <h2>{nomEquipe}</h2>
            <p className='equipe-membre-recrute'>
                Jean-Marie SuperLongNom Peip2<br></br>
                Nom Prénom Filière<br></br>
                Nom Prénom Filière<br></br>
                Nom Prénom Filière<br></br>
                Nom Prénom Filière<br></br>

            </p>
            <p className='description'>Description de l'équipe Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quam velit, vulputate eu pharetra nec, mattis ac neque. Duis vulputate commodo lectus, ac blandit elit tincidunt id. Sed rhoncus, tortor sed eleifend tristique, tortor mauris molestie elit, et lacinia ipsum quam nec dui.</p>
            <div className='criteres'>
                <h5>Salle Equipée</h5>
                <h5>Seul dans la salle</h5>
            </div>

            {contact && <Contacter onClose={handleCloseContact} mail={"diego.deloffre@univ-tours.fr"}/>}

            <Button className='button-message' variant="contained" color="primary" onClick={handleContact}>
                Envoyer un message
            </Button>
            
            <Button className='button-demande' variant="contained" color="primary">
                Envoyer une demande
            </Button>
        </div>
    );
}

export default EquipeListe;
