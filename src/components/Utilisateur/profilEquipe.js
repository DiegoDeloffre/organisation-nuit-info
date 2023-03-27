import { useState } from "react";
import "../../styles/Utilisateur/Components/profilEquipe.css"

import ModifierProfilEquipe from "../Popup/ModifierProfilEquipe";

import editIcon from '../../assets/pencil.png';

function ProfilEquipe({profil,setProfil}) {
    const [showPopup, setShowPopup] = useState(false);
    

    const handleSave = (newDescription) => {
        setProfil(newDescription);
        setShowPopup(false);
    };
    
    return (<div className="profil-equipe">
        <div className="edit-icon-container">
            <img
                className="edit-icon"
                src={editIcon}
                alt="Edit icon"
                onClick={() => setShowPopup(true)}
            />
        </div>
        <h2> Profil Equipe</h2>
        <p>{profil}</p>
        {showPopup && (
            <ModifierProfilEquipe
                title="Profil Equipe"
                value={profil}
                onSave={handleSave}
                onClose={() => setShowPopup(false)}
            />
        )}

    </div>
    )
}

export default ProfilEquipe