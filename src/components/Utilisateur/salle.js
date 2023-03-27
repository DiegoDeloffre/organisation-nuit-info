import React, { useState, useEffect }  from 'react';
import "../../styles/Utilisateur/Components/salle.css"

import { Button } from '@material-ui/core';

function Salle({ salle, premierChoix, setPremierChoix, deuxiemeChoix, setDeuxiemeChoix, premierChoixOriginal, deuxiemeChoixOriginal}) {
    const [isButtonDisabled, setIsButtonDisabled] = useState(true);
    
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

    function handleValiderClick() {
        // Code à exécuter lorsque l'utilisateur clique sur le bouton "Valider"
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
                            <h3>Premier choix</h3>
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
                            <h3>Deuxième choix</h3>
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
                        <Button variant="contained" color="primary" onClick={handleValiderClick} disabled={isButtonDisabled}>
                            Valider
                        </Button>
                    </>
                    )
                }
            </div>


        </div >
    );
}

export default Salle