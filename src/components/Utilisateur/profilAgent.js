import React, { useState, useEffect } from 'react';
import "../../styles/Utilisateur/Components/profilAgent.css"

import ModifierProfilEquipe from '../Popup/ModifierProfilEquipe';
import { getProfilChercheur, modifierProfilChercheur } from '../../api/apiReact/apiUtilisateurs';
import editIcon from '../../assets/pencil.png';

function ProfilAgent({ infoAgent }) {
  const [showPopup, setShowPopup] = useState(false);
  const [description, setDescription] = useState("");
  
  useEffect(() => {
    console.log("Lesgo")
    recupProfilChercheur();
  }, []);


  const recupProfilChercheur = async () => {
    let data = await getProfilChercheur(23);
    setDescription(data);
  };


  const modifierProfil = async (newDescription) => {
    console.log(newDescription)
    await modifierProfilChercheur(23, newDescription);
    recupProfilChercheur();
  };


  return (
    <div className='profil-agent'>
      <div className="edit-icon-container">
        <img
          className="edit-icon"
          src={editIcon}
          alt="Edit icon"
          onClick={() => setShowPopup(true)}
        />
      </div>
      <h2>Profil</h2>
      <p>{infoAgent}</p>
      <p>{description}</p>
      {showPopup && (
        <ModifierProfilEquipe
          title="Profil Equipe"
          value={description}
          onSave={modifierProfil}
          onClose={() => setShowPopup(false)}
        />
      )}
    </div>
  );
}

export default ProfilAgent;
