import React from "react";
import "../../styles/Administrateur/Components/onglet.css";

function Onglet({ nom, actif, onClick }) {
    return (
      <div
        className={`onglet ${actif ? "actif" : ""}`}
        onClick={onClick}
      >
        <p>{nom}</p>
      </div>
    );
  }

export default Onglet;