import React, { useState } from 'react';
import "../../styles/Administrateur/Pages/ComparerListes.css";
import { FaFileCsv, FaJs } from "react-icons/fa";

import ListeRecrutement from '../../components/Administrateur/listeRecrutement';

import { Button } from '@material-ui/core';

function ComparerListes() {
    const [file, setFile] = useState(null);
    const [showComparaison, setShowComparaison] = useState(false);

    const handleComparaisonClick = () => {
        setShowComparaison(true);
    }

    const isFileAccepted = (file) => {
        return file.type === "text/csv" || file.type === "application/json" || file.type === "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet";
    };

    const handleFileChange = (e) => {
        const selectedFile = e.target.files[0];
        console.log(selectedFile);
        if (selectedFile && isFileAccepted(selectedFile)) {
            console.log("File set")
            setFile(selectedFile);
        } else {
            setFile(null);
        }
    };

    return (
        <div className='comparer-wrapper'>
            <h2>Comparer les listes</h2>
            <div className="file-input-container" onClick={() => document.getElementById('file-input').click()}>
                {file && (
                    <div className="file-preview-container">
                        {file.type === "text/csv" && <FaFileCsv className="file-preview-icon" />}
                        {(file.type === "application/json" || file.type === "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet") && <FaJs className="file-preview-icon" />}

                    </div>
                )}
                <label className="file-input-label">
                    <span className="file-placeholder">{file ? file.name : "Déposer le fichier"}</span>
                </label>
                <input
                    id="file-input"
                    type="file"
                    hidden={true}
                    onChange={handleFileChange}
                    accept=".csv, .json, .xls, .xlsx"
                />

            </div>

            <Button variant="contained" color="primary" onClick={handleComparaisonClick}>
                Comparer
            </Button>
            {showComparaison && <ListeRecrutement />}
            <Button variant="contained" color="primary" href="/administrateur">
                Retour
            </Button>
        </div>
    );
}

export default ComparerListes;
