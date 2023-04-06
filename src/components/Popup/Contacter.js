import React from "react";

function Contacter({ onClose, mail, nom, prenom }) {

    return (
        <div className="popup-container">
            <div className="popup-overlay" onClick={onClose} />
            <div className="popup">
                <span className="popup-close" onClick={onClose}></span>
                <h2>NomEquipe</h2>
                <div className="popup-inner">
                    <div>
                        {nom} {prenom}
                    </div>
                    <div>
                        {mail}
                    </div>
                </div>


            </div>
        </div>
    );
}

export default Contacter;
