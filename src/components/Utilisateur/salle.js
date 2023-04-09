import React, { useState, useEffect } from 'react';
import "../../styles/Utilisateur/Components/salle.css"

import { Button } from '@material-ui/core';


import { getChoixEquipe, getSalle, modifierChoixEquipe } from '../../api/apiReact/apiUtilisateurs';

function Salle() {
    const [isButtonDisabled, setIsButtonDisabled] = useState(true);
    const [premierChoix, setPremierChoix] = useState('Non');
    const [deuxiemeChoix, setDeuxiemeChoix] = useState('Peu importe');
    const [premierChoixOriginal, setPremierChoixOriginal] = useState('Non');
    const [deuxiemeChoixOriginal, setDeuxiemeChoixOriginal] = useState('Peu importe');
    const [salle, setSalle] = useState("");

    useEffect(() => {
        recupSalle();
        recupChoixEquipe();
    }, []);

    function handleFirstChoice(choice) {
        switch (choice) {
            case "0":
                setPremierChoix("Oui")
                setPremierChoixOriginal("Oui")
                break;
            case "1":
                setPremierChoix("Non")
                setPremierChoixOriginal("Non")
                break;
        }
    }

    function handleSecondChoice(choice) {
        switch (choice) {
            case "0":
                setDeuxiemeChoix("Seul")
                setDeuxiemeChoixOriginal("Seul")
                break;
            case "1":
                setDeuxiemeChoix("Pas Seul")
                setDeuxiemeChoixOriginal("Pas Seul")
                break;
            case "2":
                setDeuxiemeChoix("Peu importe")
                setDeuxiemeChoixOriginal("Peu importe")
                break;
        }
    }

    const recupSalle = async () => {
        let data = await getSalle(parseInt(localStorage.idUser,10));
        if(data.length !== 0){
            setSalle(data[0].Nom);
        }
        
    };

    const recupChoixEquipe = async () => {
        let data = await getChoixEquipe(parseInt(localStorage.idUser,10));
        if (data.length !== 0) {
            handleFirstChoice(data[0].SalleEquipe)
            handleSecondChoice(data[0].Isole)
        }

    };

    const modifChoixEquipe = async () => {
        let secondChoice;
        let firstChoice;
        premierChoix === "Oui" ? firstChoice = "0" : firstChoice = "1"
        switch (deuxiemeChoix) {
            case "Seul":
                secondChoice = "0"
                break;
            case "Pas Seul":
                secondChoice = "1"
                break;
            case "Peu importe":
                secondChoice = "2"
                break;
        }
        console.log(firstChoice)
        console.log(secondChoice)
        await modifierChoixEquipe(parseInt(localStorage.idUser,10), firstChoice, secondChoice);
        recupChoixEquipe();
    };

    useEffect(() => {
        if (premierChoix !== premierChoixOriginal || deuxiemeChoix !== deuxiemeChoixOriginal) {
            setIsButtonDisabled(false);
        } else {
            setIsButtonDisabled(true);
        }
    }, [premierChoix, deuxiemeChoix, premierChoixOriginal, deuxiemeChoixOriginal]);


    function handlePremierChoixChange(event) {
        setPremierChoix(event.target.value);
    }

    function handleDeuxiemeChoixChange(event) {
        setDeuxiemeChoix(event.target.value);
    }

    return (
        <div className="salle">
            <h2>Salle</h2>
            <div className={`salle-inner ${salle !== "" ? "affectee" : ""}`}>
                {salle !== "" ? (
                    <h2 className='salleAffectee'>Salle affectée : {salle}</h2>
                ) :
                    (<>
                        <div className='choice'>
                            <h3>Avez-vous besoin d'une salle équipée ?</h3>
                            <div className='choices'>
                                <label>
                                    <input type="radio" value="Oui" checked={premierChoix === 'Oui'} onChange={handlePremierChoixChange} />
                                    Oui
                                </label>
                                <label>
                                    <input type="radio" value="Non" checked={premierChoix === 'Non'} onChange={handlePremierChoixChange} />
                                    Non
                                </label>
                            </div>
                        </div >
                        <div className='choice'>
                            <h3>Souhaitez-vous être seul dans la salle ou avec d'autres équipes ?</h3>
                            <div className='choices'>
                                <label>
                                    <input type="radio" value="Seul" checked={deuxiemeChoix === 'Seul'} onChange={handleDeuxiemeChoixChange} />
                                    Seul
                                </label>
                                <label>
                                    <input type="radio" value="Pas Seul" checked={deuxiemeChoix === 'Pas Seul'} onChange={handleDeuxiemeChoixChange} />
                                    Pas Seul
                                </label>
                                <label>
                                    <input type="radio" value="Peu importe" checked={deuxiemeChoix === 'Peu importe'} onChange={handleDeuxiemeChoixChange} />
                                    Peu importe
                                </label>
                            </div>
                        </div>
                        {localStorage.bloque === "false" &&
                            <Button variant="contained" color="primary" onClick={modifChoixEquipe} disabled={isButtonDisabled}>
                                Valider
                            </Button>
                        }

                    </>
                    )
                }
            </div>


        </div >
    );
}

export default Salle