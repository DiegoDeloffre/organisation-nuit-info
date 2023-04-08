import React, { useState, useEffect } from 'react';
import "../../styles/Utilisateur/Pages/AccueilAvecEquipe.css"

import Equipe from "../../components/Utilisateur/equipe"
import Salle from '../../components/Utilisateur/salle';
import ProfilEquipe from "../../components/Utilisateur/profilEquipe"
import Materiel from "../../components/Utilisateur/materiels"

import { Button, Switch } from '@material-ui/core';

import { modifierEquipeRecrute } from '../../api/apiReact/apiUtilisateurs';

function AccueilAvecEquipe() {
    const [recrute, setRecrute] = useState(false);

    useEffect(() => {
        const recupRecrute = async () => {
            //let data = await getMateriels(23);
            //setRecrute(data === 0 ? false : true)
        };
        recupRecrute();

    }, []);

    const modifierRecrute = async () => {
        await modifierEquipeRecrute(4);
        setRecrute(!recrute);
    };

    return (<div className="global">
        <h2>Accueil</h2>

        <div className='global-inner'>
            <div className="left">
                <Equipe />
                <div className="recruter" >
                    <div className='interrupteur-wrapper'>
                        <h3>Souhaitez-vous recruter d'autres membres ?</h3>
                        <div className="interrupteur-inner">
                            <h4>Non</h4>
                            <Switch checked={recrute} onChange={modifierRecrute} color="primary" />
                            <h4>Oui</h4>
                        </div>
                    </div>
                </div>
                {recrute &&
                    <Button variant="contained" color="primary" href="/recruter">
                        Recruter
                    </Button>
                }

            </div>

            <div className="right">
                <ProfilEquipe />
                <div className="bottom">
                    <Materiel />
                    <Salle />
                </div>
            </div>
        </div>
    </div>
    )
}

export default AccueilAvecEquipe