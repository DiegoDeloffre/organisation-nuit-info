import React, { useState } from 'react';
import '../../styles/Formulaires.css'

import { Button } from '@material-ui/core';


function AjouterOrganisateur() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [typeUtilisayeur, setTypeUtilisayeur] = useState('');

    const handletypeUtilisayeur = (event) => {
        setTypeUtilisayeur(event.target.value);
    }


    const handleEmailChange = (event) => {
        setEmail(event.target.value);
    };

    const handlePasswordChange = (event) => {
        setPassword(event.target.value);
    };

    const handleConfirmPasswordChange = (event) => {
        setConfirmPassword(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();

    };

    return (<div className='global'>
        <h2>Ajouter un organisateur</h2>

        <div className='inscription-wrapper'>
            <div className='inscription-inner'>
                <div className='labels'>
                    <label>
                        Email : 
                    </label>
                    <label>
                        Mot de passe : 
                    </label>
                    <label>
                        Confirmer mot de passe : 
                    </label>
                    <label>
                        Type d'utilisateur : 
                    </label>
                </div>

                <div className='inputs'>
                    <input type="email" value={email} onChange={handleEmailChange} />
                    <input type="password" value={password} onChange={handlePasswordChange} />
                    <input type="password" value={confirmPassword} onChange={handleConfirmPasswordChange} />
                    <select value={typeUtilisayeur} onChange={handletypeUtilisayeur}>
                        <option value="DI3">Admin prof</option>
                        <option value="DI4">Admin étudiant</option>
                        {/* Ajouter d'autres options de promo ici si nécessaire */}
                    </select>
                </div>
            </div>
        </div>

        <br />
        <Button variant="contained" color="primary" type="submit" href='/accueil1'>
            Confirmer
        </Button>
    </div>
    )

}

export default AjouterOrganisateur