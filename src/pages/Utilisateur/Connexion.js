import React, { useState } from 'react';
import { Button } from '@material-ui/core';
import { login, getBloque } from '../../api/apiReact/apitools';

function Connexion() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleEmailChange = (event) => {
        setEmail(event.target.value);
    };

    const handlePasswordChange = (event) => {
        setPassword(event.target.value);
    };

    const connexion = async () => {
        let data = await login(email, password);
        localStorage.setItem("loggedIn", true);
        localStorage.setItem("UserType", data.Type);
        localStorage.setItem("UserId", data.IdUser);
        isBloque()
    };

    const isBloque = async () => {
        let data = await getBloque();
        console.log(data)
        data === 1 ? localStorage.setItem("bloque", true): localStorage.setItem("bloque", false);
        console.log(localStorage.bloque)
        
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
        <Button variant="contained" color="primary" type="submit" onClick={connexion}>
            Se Connecter
        </Button>
        <br />
        <a href='/inscription'>Pas encore de compte. Inscrivez-vous !</a>
    </div>
    )

}

export default Connexion