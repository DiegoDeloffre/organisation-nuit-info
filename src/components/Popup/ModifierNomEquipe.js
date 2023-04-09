import React, { useState } from "react";

import { Button } from '@material-ui/core';

function ModifierNomEquipe({ value, onSave, onClose }) {
    const [nomEquipe, setEquipe] = useState(value);

    const handleChange = (event) => {
        setEquipe(event.target.value);
    };
 
    const handleModifier = (event) => {
        onSave(nomEquipe);
        onClose();
    };

    return (
        <div className="popup-container">
            <div className="popup-overlay" onClick={onClose} />
            <div className="popup">
                <span className="popup-close" onClick={onClose}></span>
                <h2>Nom Equipe</h2>
                <div className="popup-inner">
                    <input type="text" value={nomEquipe} onChange={handleChange} />
                </div>
                <Button variant="contained" color="primary" onClick={handleModifier}>
                    Confirmer
                </Button>
            </div>
        </div>

    );
}

export default ModifierNomEquipe;
