import { useState, useEffect } from "react";
import "../../styles/Utilisateur/Components/profilEquipe.css"

import ModifierProfilEquipe from "../Popup/ModifierProfilEquipe";

import editIcon from '../../assets/pencil.png';

import { getProfilEquipe, modifierProfilEquipe } from "../../api/apiReact/apiUtilisateurs";

function ProfilEquipe() {
    const [showPopup, setShowPopup] = useState(false);
    const [profil, setProfil] = useState("Description de l'équipe");

    useEffect(() => {
        recupProfil();
    }, []);

    const recupProfil = async () => {
        let data = await getProfilEquipe(localStorage.UserId);
        {data.length !== 0 && setProfil(data[0].Description)}
        
    };

    const modifierProfil = async (description) => {
        await modifierProfilEquipe(localStorage.UserId, description);
        recupProfil();
    };
    

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
                onSave={modifierProfil}
                onClose={() => setShowPopup(false)}
            />
        )}

    </div>
    )
}

export default ProfilEquipe