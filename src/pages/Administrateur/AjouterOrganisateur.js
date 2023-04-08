import React, { useState } from 'react';
import '../../styles/Formulaires.css'

import { Button } from '@material-ui/core';

import { ajouterOrganisateur } from '../../api/apiReact/apiAdministrateur';

function AjouterOrganisateur() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [typeUtilisateur, setTypeUtilisateur] = useState('');
 
    const addOrganisateur = async () => {
        console.log(email)
        console.log(password)
        console.log(typeUtilisateur)
        await ajouterOrganisateur(email, password, typeUtilisateur);
    };

    const handletypeUtilisateur = (event) => {
        setTypeUtilisateur(event.target.value);
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
                    <select value={typeUtilisateur} onChange={handletypeUtilisateur}>
                        <option value="Admin">Admin prof</option>
                        <option value="Organisateur">Admin étudiant</option>
                    </select>
                </div>
            </div>
        </div>

        <br />
        <Button variant="contained" color="primary" type="submit" onClick={addOrganisateur}>
            Confirmer
        </Button>
    </div>
    )

}

export default AjouterOrganisateur