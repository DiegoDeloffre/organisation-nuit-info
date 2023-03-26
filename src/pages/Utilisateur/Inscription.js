import React, { useState } from 'react';
import {
  Button
} from '@material-ui/core';

function Inscription() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [nom, setNom] = useState('');
  const [prenom, setPrenom] = useState('');
  const [creerEquipe, setCreerEquipe] = useState(true);
  const [autoriserUtilisation, setAutoriserUtilisation] = useState(true);
  const [promo, setPromo] = useState("");
  const [nomEquipe, setNomEquipe] = useState("");

  const handleNomEquipeChange = (event) => {
    setNomEquipe(event.target.value);
  }
  

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleConfirmPasswordChange = (event) => {
    setConfirmPassword(event.target.value);
  };

  const handleNomChange = (event) => {
    setNom(event.target.value);
  };

  const handlePrenomChange = (event) => {
    setPrenom(event.target.value);
  };

  const handleCreerEquipeChange = (event) => {
    setCreerEquipe(event.target.value === 'creerEquipe');
  };

  const handleAutoriserUtilisationChange = (event) => {
    setAutoriserUtilisation(event.target.value === 'autoriserUtilisation');
  };

  const handlePromoChange = (event) => {
    setPromo(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // ici, vous pouvez effectuer des validations et envoyer les données d'inscription au serveur
  };

  return (<div className='global'>
    <h2>Inscription</h2>
    <form onSubmit={handleSubmit}>


      <div className='inscription-wrapper'>
        <div className='inscription-inner'>
          <div className='labels'>
            <label>
              Email:
            </label>
            <label>
              Mot de passe:
            </label>
            <label>
              Confirmer le mot de passe:
            </label>
          </div>
          <div className='inputs'>
            <input type="email" value={email} onChange={handleEmailChange} />
            <input type="password" value={password} onChange={handlePasswordChange} />
            <input type="password" value={confirmPassword} onChange={handleConfirmPasswordChange} />
          </div>

        </div>
        <div className='inscription-inner'>
          <div className='labels'>
            <label>
              Nom:
            </label>
            <label>
              Prénom:
            </label>
            <label>
              Promo:
            </label>
          </div>
          <div className='inputs'>
            <input type="text" value={nom} onChange={handleNomChange} />
            <input type="text" value={prenom} onChange={handlePrenomChange} />
            <select value={promo} onChange={handlePromoChange}>
              <option value="DI3">DI3</option>
              <option value="DI4">DI4</option>
              <option value="DI5">DI5</option>
              {/* Ajouter d'autres options de promo ici si nécessaire */}
            </select>
          </div>


        </div>
      </div>


      <br />


      <div className='inscription-bottom'>
        <div className='inscription-bottom-inner'>
          <label>
            Souhaitez-vous créer une équipe ou en cherchez-vous une ?
          </label>
          <br />
          <label>
            <input type="radio"
              name="creerEquipe"
              value="creerEquipe"
              checked={creerEquipe}
              onChange={handleCreerEquipeChange} />
            Créer une équipe
          </label>
          <label>
            <input type="radio"
              name="creerEquipe"
              value="chercherEquipe"
              checked={!creerEquipe}
              onChange={handleCreerEquipeChange} />
            Chercher une équipe
          </label>
        </div>
        <br />
        {creerEquipe &&
        <div className='inscription-inner'>
        <div className='labels'>
          <label>
            Nom de l'équipe :
          </label>
        </div>
        <div className='inputs'>
          <input type="text" value={nomEquipe} onChange={handleNomEquipeChange} />
        </div>
      </div>
        }
        
        <br />

        {/* <div className='inscription-bottom-inner'>
          <label>
            Demande autorisation utilisation Nom et Prénom pour historique pour toute l'équipe ?
          </label>
          <br />
          <label>
            <input type="radio"
              name="autoriserUtilisation"
              value="autoriserUtilisation"
              checked={autoriserUtilisation}
              onChange={handleAutoriserUtilisationChange} />
            Autoriser
            <input type="radio"
              name="autoriserUtilisation"
              value="refuserUtilisation"
              checked={!autoriserUtilisation}
              onChange={handleAutoriserUtilisationChange} />
            Refuser
          </label>
        </div> */}


      </div>

      <br />

    </form>
    <Button variant="contained" color="primary" type="submit" href='/accueil2'>
      S'inscrire
    </Button>
  </div>
  );
}

export default Inscription; 
