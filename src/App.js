import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";

import "./styles/Utilisateur/Utilisateur.css"
import "./styles/Administrateur/Administrateur.css"
import "./styles/Formulaires.css"
import "./styles/Utilisateur/Popup.css"

import Inscription from './pages/Utilisateur/Inscription';
import Connexion from './pages/Utilisateur/Connexion';
import Reglement from './pages/Reglement';
import Presentation from './pages/Presentation'; 
import Menu from './components/menu';
import AccueilAvecEquipe from './pages/Utilisateur/AccueilAvecEquipe';
import AccueilSansEquipe from './pages/Utilisateur/AccueilSansEquipe';
import Recrutement from './pages/Utilisateur/Recrutement';
import AccueilAdmin from './pages/Administrateur/AccueilAdmin';
import AffectationSalles from './pages/Administrateur/AffectationSalles';
import ComparerListes from './pages/Administrateur/ComparerListes';
import AjouterOrganisateur from './pages/Administrateur/AjouterOrganisateur';

export default function App() {
  
  const [loggedIn, setLoggedIn] = useState(true);
  
  /* useState(
    localStorage.getItem("loggedIn") || false
  ); */

  function handleLogin() {
    // Vérifiez les informations d'authentification de l'utilisateur ici.
    // Si l'utilisateur est authentifié, stockez les informations dans le stockage local.
    localStorage.setItem("loggedIn", true);
    setLoggedIn(true);
  }

  function handleLogout() {
    // Supprimez les informations d'authentification du stockage local.
    localStorage.removeItem("loggedIn");
    setLoggedIn(false);
  }

  return (
    <Router>
      <Menu loggedIn={loggedIn} />
      <Routes>
        <Route path="/" element={<Presentation />} />
        <Route path="inscription" element={<Inscription />} />
        <Route path="connexion" element={<Connexion onLogin={handleLogin} onLogout={handleLogout}/>} />
        <Route path="reglement" element={<Reglement />} />
        {loggedIn && (
          <>
            <Route path="accueil1" element={<AccueilAvecEquipe />} />
            <Route path="accueil2" element={<AccueilSansEquipe />} />
            <Route path="recruter" element={<Recrutement />} />
            <Route path="administrateur" element={<AccueilAdmin />} />
            <Route path="salles" element={<AffectationSalles />} />
            <Route path="comparer" element={<ComparerListes />} />
            <Route path="ajouterOrganisateur" element={<AjouterOrganisateur />} />
          </>
        )}
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
      
    </Router>
  );
}