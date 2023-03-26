import React, { useState } from "react";

import { Button } from '@material-ui/core';

function ModifierProfilEquipe({ value, onSave, onClose }) {
    const [description, setDescription] = useState(value);

    const handleChange = (event) => {
        setDescription(event.target.value);
    };

    const handleModifier = (event) => {
        // modifier desc
        onSave(description);
        onClose();
    };

    return (
        <div className="popup-container">
            <div className="popup-overlay" onClick={onClose} />
            <div className="popup">
                <span className="popup-close" onClick={onClose}></span>
                <h2>Profil Equipe</h2>
                <div className="popup-inner">
                    <label> Description: </label>
                    <textarea value={description} onChange={handleChange} />
                </div>
                <Button variant="contained" color="primary" onClick={handleModifier}>
                    Ajouter
                </Button>
            </div>
        </div>

    );
}

export default ModifierProfilEquipe;
