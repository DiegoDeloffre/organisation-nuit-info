import React from 'react';
import '../styles/Reglement.css'

function Reglement() {
    return (
        <div className='global'>
            <div className="reglement-container">
                <h1 className="reglement-title">Règlement</h1>

                <h2 className="reglement-subtitle">Règles</h2>
                <ul className="reglement-list">
                    <li className="reglement-list-item">Entrée interdite à partir de 22h (pour des raisons de sécurité/responsabilité)</li>
                    <li className="reglement-list-item">Règle 2</li>
                    <li className="reglement-list-item">Règle 3</li>
                    <li className="reglement-list-item">Règle 4</li>
                    <li className="reglement-list-item">Règle 5</li>
                </ul>

                <h2 className="reglement-subtitle">Droits</h2>
                <ul className="reglement-list">
                    <li className="reglement-list-item">Droit 1</li>
                    <li className="reglement-list-item">Droit 2</li>
                    <li className="reglement-list-item">Droit 3</li>
                    <li className="reglement-list-item">Droit 4</li>
                    <li className="reglement-list-item">Droit 5</li>
                </ul>

                <h2 className="reglement-subtitle">Conseils</h2>
                <ul className="reglement-list">
                    <li className="reglement-list-item">Conseil 1</li>
                    <li className="reglement-list-item">Conseil 2</li>
                    <li className="reglement-list-item">Conseil 3</li>
                    <li className="reglement-list-item">Conseil 4</li>
                    <li className="reglement-list-item">Conseil 5</li>
                </ul>
            </div>
        </div>
    );
}

export default Reglement;
