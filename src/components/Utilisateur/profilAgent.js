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
      let data = await getInfosChercheur(parseInt(localStorage.idUser,10));
      setInfosChercheur(data[0]);
    };

    const recupProfilChercheur = async () => {
      let data = await getProfilChercheur(parseInt(localStorage.idUser,10));
      setDescription(data);
    };
    recupProfilChercheur();
    recupInfosChercheur();
  }, []);


  const recupProfilChercheur = async () => {
    let data = await getProfilChercheur(parseInt(localStorage.idUser,10));
    setDescription(data);
  };

  const modifierProfil = async (newDescription) => {
    await modifierProfilChercheur(parseInt(localStorage.idUser,10), newDescription);
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
      <p>{infosChercheur.Nom} {infosChercheur.Prenom} {infosChercheur.Filiere}</p>
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
