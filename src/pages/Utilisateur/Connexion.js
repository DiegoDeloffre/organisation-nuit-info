import React, { useState } from 'react';
import { Button } from '@material-ui/core';
import { login } from '../../api/apiReact/apitools';

function Connexion({ handleLogin, handleLogout }) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleEmailChange = (event) => {
        setEmail(event.target.value);
    };

    const handlePasswordChange = (event) => {
        setPassword(event.target.value);
    };

    const handleSubmit = async (event) => {
        let data = await login(email, password);
        // handle redirection according to user type
    };

    return (<div className='global'>
        <h2>Connexion</h2>

        <div className='inscription-wrapper'>
            <div className='inscription-inner'>
                <div className='labels'>
                    <label>
                        Email:
                    </label>
                    <label>
                        Mot de passe:
                    </label>
                </div>

                <div className='inputs'>
                    <input type="email" value={email} onChange={handleEmailChange} />
                    <input type="password" value={password} onChange={handlePasswordChange} />
                </div>
            </div>
        </div>

        <br />
        <Button variant="contained" color="primary" type="submit" href='/accueil1'>
            Se Connecter
        </Button>
        <br />
        <a href='/inscription'>Pas encore de compte. Inscrivez-vous !</a>
    </div>
    )

}

export default Connexion