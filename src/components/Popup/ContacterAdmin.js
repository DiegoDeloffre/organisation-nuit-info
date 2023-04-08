import React, { useState, useEffect } from "react";

import { getAdmin } from "../../api/apiReact/apitools";

function ContacterAdmin({ onClose }) {

    const [administrateurs, setAdmin] = useState([]);

    useEffect(() => {
        const recupContactsAdmin = async () => {
            let data = await getAdmin();
            console.log(data)
            setAdmin(data)
        };
        recupContactsAdmin();
    }, []);

    return (
        <div className="popup-container">
            <div className="popup-overlay" onClick={onClose} />
            <div className="popup">
                <span className="popup-close" onClick={onClose}></span>
                <h2>Liste des admins</h2>
                {administrateurs.length === 0 ? (
                    <></>
                ) : (
                    administrateurs.map((admin) => (
                        <div>
                            {admin.Mail}
                        </div>
                    ))
                )}
            </div>
        </div>
    );
}

export default ContacterAdmin;
