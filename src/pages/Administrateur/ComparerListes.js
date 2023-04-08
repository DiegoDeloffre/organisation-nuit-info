import React, { useState } from 'react';
import "../../styles/Administrateur/Pages/ComparerListes.css";
import { FaFileCsv, FaJs } from "react-icons/fa";

import ListeComparaison from '../../components/Administrateur/listeComparaison';

import { Button } from '@material-ui/core';

import { comparerListes } from '../../api/apiReact/apiAdministrateur';

function ComparerListes() {
    const [file, setFile] = useState(null);
    const [liste1, setListe1] = useState([]);
    const [liste2, setListe2] = useState([]);
    const [showComparaison, setShowComparaison] = useState(false);

    const isFileAccepted = (file) => {
        return file.type === "text/csv" || file.type === "application/json" || file.type === "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet";
    };

    const handleFileChange = (e) => {
        const selectedFile = e.target.files[0];
        if (selectedFile && isFileAccepted(selectedFile)) {
            setFile(selectedFile);
        } else {
            setFile(null);
        }
    };

    const handleComparaisonClick = async () => {
        if (file) {
            const reader = new FileReader();

            reader.onload = async() => {
                const csvData = reader.result;
                const csvArray = csvData.split('\n');
                const headers = csvArray[0].split(';');
                const jsonArray = [];

                for (let i = 1; i < csvArray.length; i++) {
                    const obj = {};
                    const currentRow = csvArray[i].split(';');

                    for (let j = 0; j < headers.length; j++) {
                        obj[headers[j]] = currentRow[j];
                    }

                    jsonArray.push(obj);
                }

                const jsonData = JSON.stringify(jsonArray);

                let data = await comparerListes(jsonData)
                setListe1(data.not_in_csv_list)
                setListe2(data.not_in_site_list)
                setShowComparaison(true)
            };

            reader.readAsText(file);
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
            {showComparaison && <ListeComparaison liste1={liste1} liste2={liste2} />}
            <Button variant="contained" color="primary" href="/administrateur">
                Retour
            </Button>
        </div>
    );
}

export default ComparerListes;
