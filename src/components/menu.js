import React, { useState, useEffect } from 'react';
import '../styles/menu.css'
import Joyride from 'react-joyride';

import { Link } from "react-router-dom";
import { Button } from '@material-ui/core';

import { tutoEquipe, tutoChercheur, tutoRecrutement } from '../assets/tutos';
import ContacterAdmin from './Popup/ContacterAdmin';

const Menu = ({ loggedIn }) => {
  const [showDropdown, setShowDropdown] = useState(false);
  const [joyrideKey, setJoyrideKey] = useState(0); // ajouter une clé unique
  const [steps, setSteps] = useState([]);
  const [afficherPopupContact, setAfficherPopupContact] = useState(false);


  const handleAfficherPopupContact = () => {
    setAfficherPopupContact(true);
    setShowDropdown(false);
  };

  const handleClosePopupContact = () => {
    setAfficherPopupContact(false);
  };

  const toggleDropdown = () => setShowDropdown(!showDropdown);

  function isConnected() {
    if (!loggedIn) {
      window.location.href = "/";
    }
    setSteps([]);
  }


  function handleHelpClick() {
    setShowDropdown(false);
    setSteps([]);

    if (window.location.pathname === "/accueil1") {
      setSteps(tutoEquipe.steps);
      setJoyrideKey(joyrideKey + 1);
    } else if (window.location.pathname === "/accueil2") {
      setSteps(tutoChercheur.steps);
      setJoyrideKey(joyrideKey + 1);
    } else if (window.location.pathname === "/accueil2") {
      setSteps(tutoRecrutement.steps);
      setJoyrideKey(joyrideKey + 1);
    }

  }

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (showDropdown && !event.target.closest('.menu__dropdown')) {
        setShowDropdown(false);
      }
    };

    document.addEventListener('click', handleClickOutside);

    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, [showDropdown]);

  return (
    <div className="menu">
      <div className="menu__left">
        <Link to="/">Présentation</Link>
        <Link to="/inscription">inscription</Link>
        <Link to="/connexion">Connexion</Link>
        <Link to="/reglement">Reglement</Link>
        <Link to="/accueil1" onClick={isConnected}>Accueil Equipe</Link>
        <Link to="/accueil2" onClick={isConnected}>Accueil Solo</Link>
        <Link to="/recruter" onClick={isConnected}>Recruter</Link>
        <Link to="/administrateur" onClick={isConnected}>Accueil Admin</Link>
        <Link to="/salles" onClick={isConnected}>Gérer Salles</Link>
        <Link to="/comparer" onClick={isConnected}>Comparer</Link>
      </div>
      <div className="menu__right">
        {isConnected ? (
          <div className="menu__dropdown">
            <button onClick={toggleDropdown}>Mon compte</button>
            {showDropdown && (
              <div className="menu__dropdown-content">
                <Button variant="contained" color="primary" /* onClick={handleLogout} */>
                  <Link to="/">Se déconnecter</Link>
                </Button>
                <Button variant="contained" color="primary" /* onClick={handleDeleteAccount} */>
                  <Link to="/">Supprimer mon compte</Link>
                </Button>
                <Button variant="contained" color="primary" onClick={handleHelpClick}>
                  Aide
                </Button>
                <Button variant="contained" color="primary" onClick={handleAfficherPopupContact}>
                  Contact Admin
                </Button>

              </div>
            )}
          </div>
        ) : (
          <Link to="/connexion">Se connecter</Link>
        )}
      </div>
      {afficherPopupContact && <ContacterAdmin onClose={handleClosePopupContact} />}
      <Joyride
        key={joyrideKey}
        steps={steps}
        continuous={true}
        showProgress={true}
        showSkipButton={true}
        disableScrolling={true}
        run={steps.length > 0}
        styles={{
          options: {
            backdropColor: 'blue',
            arrowColor: '#B8B8B8',
            backgroundColor: '#FFFFFF',
            overlayColor: 'rgba(255,255, 255, 0.9)',
            spotlightShadow: '0 0 15px rgba(0, 0, 0, 0.5)',
            primaryColor: '#000E83',
            textColor: '#111111',
            width: 800,
            zIndex: 1000,
          }
        }}
      />
    </div>
  );
};

export default Menu;
