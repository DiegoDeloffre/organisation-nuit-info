import React from "react";

function ContacterAdmin({ onClose }) {

    return (
        <div className="popup-container">
            <div className="popup-overlay" onClick={onClose} />
            <div className="popup">
                <span className="popup-close" onClick={onClose}></span>
                <h2>Liste des admins</h2>
                <div>
                    Nom Prénom Promo Mail
                </div>
                <div>
                    Nom Prénom Promo Mail
                </div>
            </div>
        </div>
    );
}

export default ContacterAdmin;
