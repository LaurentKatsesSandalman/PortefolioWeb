//import { useEffect, useState } from "react";
import styles from "Home.module.css"
import { NavLink } from "react-router-dom";

function Home() {
    return (
        <>
            <div className={styles.presentationContainer}>
            <h1>Développeur Web</h1>
            <h2>Full-stack</h2>
            <p>Bonjour !</p>
            <p>
                Vous êtes sur le portefolio de Laurent Durup, aka Sandalman.
                Après plus de 20 ans dans l’univers du jeu vidéo et de
                l’animation interactive, dont 10+ comme Game Designer
                Free-To-Play Mobile, me voici à présent “jeune” Développeur Web.
                En recherche de stage, d’emploi, du Graal, du Sens de la Vie, et
                d’une nouvelle paire de sandales en cuir taille 42, je vous
                présente ici mes premiers projets.{" "}
            </p>
            <img src="PortefolioWeb/src/assets/img/temp_profil_3.png" alt="Photo de Laurent Sandalman" />
            </div>
            <div className={styles.projectsContainer}>
                <h2>Projets</h2>
                <SectionButton image="" name="Professionnel" to="/pro" alt="vers la section projet professionnel"/>
                <SectionButton image="" name="En groupe" to="/groupe" alt="vers la section projet en groupe"/>
                <SectionButton image="" name="En solo" to="/solo" alt="vers la section projet en solo"/>
            </div>
        </>
    );
}

export default Home;
