import React, { useState } from 'react';
import "../../styles/Utilisateur/Components/profilAgent.css"

import ModifierProfilEquipe from '../Popup/ModifierProfilEquipe';

import editIcon from '../../assets/pencil.png';

function ProfilAgent({ infoAgent}) {
  const [showPopup, setShowPopup] = useState(false);
  const [description, setDescription] = useState(
    "Description de l'équipe Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quam velit, vulputate eu pharetra nec, mattis ac neque. Duis vulputate commodo lectus, ac blandit elit tincidunt id. Sed rhoncus, tortor sed eleifend tristique, tortor mauris molestie elit, et lacinia ipsum quam nec dui."
  );

  const handleSave = (newDescription) => {
    setDescription(newDescription);
    setShowPopup(false);
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
          onSave={handleSave}
          onClose={() => setShowPopup(false)}
        />
      )}
    </div>
  );
}

export default ProfilAgent;
