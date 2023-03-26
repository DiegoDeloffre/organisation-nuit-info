import React, { useState } from 'react';
import "../../styles/Utilisateur/Pages/AccueilAvecEquipe.css"

import Equipe from "../../components/Utilisateur/equipe"
import Salle from '../../components/Utilisateur/salle';
import ProfilEquipe from "../../components/Utilisateur/profilEquipe"
import Materiel from "../../components/Utilisateur/materiels"

import { Button, Switch } from '@material-ui/core';

import { description } from '../../assets/mockElements';

function AccueilAvecEquipe() {
    const [recrute, setRecrute] = useState(false);
    const [salle, setSalle] = useState("");
    const [profil, setProfil] = useState(description);
    const [name, setName] = useState("L'équipe");
    const [membres, setMembres] = useState([])
    const [nombreMateriels, setNombreMateriels] = useState([])
    const [premierChoix, setPremierChoix] = useState('Non');
    const [deuxiemeChoix, setDeuxiemeChoix] = useState('Peu importe');
    const [premierChoixOriginal, setPremierChoixOriginal] = useState('Non');
    const [deuxiemeChoixOriginal, setDeuxiemeChoixOriginal] = useState('Peu importe');

    const toggleRecrute = () => {
        setRecrute(!recrute);
    }

    return (<div className="global">
        <h2>Accueil</h2>

        <div className='global-inner'>
            <div className="left">
                <Equipe name={name} setName={setName} membres={membres}/>
                <div className="recruter" >
                    <div className='interrupteur-wrapper'>
                        <h3>Souhaitez-vous recruter d'autres membres ?</h3>
                        <div className="interrupteur-inner">
                            <h4>Non</h4>
                            <Switch checked={recrute} onChange={toggleRecrute} color="primary" />
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
                <ProfilEquipe profil={profil} setProfil={setProfil}/>
                <div className="bottom">
                    <Materiel nombreMateriels={nombreMateriels}/>
                    <Salle salle={salle} premierChoix={premierChoix} setPremierChoix={setPremierChoix} deuxiemeChoix={deuxiemeChoix} setDeuxiemeChoix={setDeuxiemeChoix} premierChoixOriginal={premierChoixOriginal} deuxiemeChoixOriginal={deuxiemeChoixOriginal} />
                </div>
            </div>
        </div>
    </div>
    )
}

export default AccueilAvecEquipe