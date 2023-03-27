import React from 'react';
import '../styles/Presentation.css'

import placeholderImage from '../assets/star.png';

function Presentation() {
    return (
        <div className="presentation-container">
            <h1 className="presentation-title">Titre de la présentation</h1>
            <h2 className="presentation-subtitle">Sous-titre de la présentation</h2>
            <p className="presentation-paragraph">La Nuit de l’Info est une compétition nationale qui réunit étudiants, enseignants et entreprises pour travailler ensemble sur le développement d’une application web.
                La Nuit se déroule tous les ans, du premier jeudi du mois de décembre, coucher du soleil, jusqu'au lever du soleil le lendemain matin.
                Les participants ont la durée d'une nuit pour proposer, implémenter et packager une application Web 2.0.</p>
            <p className="presentation-paragraph">Durant cette nuit, des partenaires lancent des défis (par exemple : interface web la plus ergonomique, meilleure architecture du système, meilleure collaboration, etc.) aux équipes participantes, et proposent des prix pour les équipes ayant le mieux réussi.
                La nuit est aussi l'occasion de rencontres et discussions avec les entreprises, les ingénieurs et les chefs d'entreprises qui viennent soutenir les étudiants, voire leur donner quelques conseils pour mieux relever les défis.</p>

            <h2 className="presentation-subtitle">Objectifs de la nuit</h2>
            <p className="presentation-paragraph">L’objectif de cette manifestation est de faire travailler ensemble les étudiants voulant participer à un défi informatique national. Ces défis portent la plupart du temps sur l’utilisation de nouvelles technologies telles que le Web 2.0, les réseaux sociaux et les technologies multimédias.
                Cette manifestation, outre son aspect unique et original, permet aux étudiants en informatique, mais aussi d’autres formations telles que la communication et le multimédia par exemple, de participer à un travail collectif de manière autonome autour de thématiques d’actualité.
                Une certaine transversalité est donc encouragée au sein des équipes pour permettre aux étudiants de concourir sur plusieurs défis connexes au défi principal, et de multiplier leurs chances de remporter un prix. Ils y rencontrent leurs enseignants dans un cadre plus convivial où l’enseignant n’est pas là pour les évaluer mais pour les aider à s’organiser face à un cahier des charges complexe, et leur permettre de mettre en application leurs connaissances informatiques et leur créativité.
                Pour les personnels, cette manifestation est l’occasion d’un décloisonnement très enrichissant où bonnes volontés, compétences et bonne humeur sont réunies.
                Par ailleurs, le soutien de partenaires donne aux défis à relever un réel intérêt pour les étudiants.</p>

            <img className="presentation-image" src={placeholderImage} alt="placeholder" />
            <p className="presentation-paragraph"></p>
            <img className="presentation-image" src={placeholderImage} alt="placeholder" />
        </div>
    );
}

export default Presentation;
