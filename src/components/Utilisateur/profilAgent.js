import React, { useState, useEffect } from 'react';
import "../../styles/Utilisateur/Components/profilAgent.css"

import ModifierProfilEquipe from '../Popup/ModifierProfilEquipe';
import { getProfilChercheur, modifierProfilChercheur, getInfosChercheur } from '../../api/apiReact/apiUtilisateurs';
import editIcon from '../../assets/pencil.png';

function ProfilAgent() {
  const [showPopup, setShowPopup] = useState(false);
  const [description, setDescription] = useState("");
  const [infosChercheur, setInfosChercheur] = useState([])

  useEffect(() => {
    const recupInfosChercheur = async () => {
      let data = await getInfosChercheur(localStorage.UserId);
      setInfosChercheur(data);
    };

    const recupProfilChercheur = async () => {
      let data = await getProfilChercheur(localStorage.UserId);
      setDescription(data[0].Description);
    };
    recupProfilChercheur();
    recupInfosChercheur();
  }, []);


  const recupProfilChercheur = async () => {
    let data = await getProfilChercheur(localStorage.UserId);
    setDescription(data[0].Description);
  };

  const modifierProfil = async (newDescription) => {
    await modifierProfilChercheur(localStorage.UserId, newDescription);
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
      {infosChercheur.length !== 0 && (
        <p>{infosChercheur[0].Nom} {infosChercheur[0].Prenom} {infosChercheur[0].Filiere}</p>
      )}

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
