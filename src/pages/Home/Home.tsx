//import { useEffect, useState } from "react";
import styles from "./Home.module.css";
import SectionButton from "../../components/SectionButton/SectionButton";

function HomePage() {
    return (
        <>
            <div className={styles.presentationContainer}>
                <div>
                    <img
                        className={styles.avatar}
                        src="src/assets/img/temp_profil_3.png"
                        alt="Photo de Laurent Sandalman"
                    />
                </div>
                <div className={styles.presentationText}>
                    <h1>Développeur Web</h1>
                    <h2>Full-stack</h2>
                    <p className={styles.pblock}>Bonjour !</p>
                    <p className={styles.pblock}>
                        Vous êtes sur le portefolio de Laurent Durup, aka
                        Sandalman. Après plus de 20 ans dans l’univers du jeu
                        vidéo et de l’animation interactive, dont 10+ comme Game
                        Designer Free-To-Play Mobile, me voici à présent “jeune”
                        Développeur Web. En recherche de stage, d’emploi, du
                        Graal, du Sens de la Vie, et d’une nouvelle paire de
                        sandales en cuir taille 42, je vous présente ici mes
                        premiers projets.
                    </p>
                </div>
            </div>
            <div className={styles.projectsContainer}>
                <h2>Projets</h2>
                <SectionButton
                    image="src/assets/img/logos/logo_pro.jpg"
                    name="Professionnel"
                    to="/pro"
                    alt="vers la section projet professionnel"
                />
                <SectionButton
                    image="src/assets/img/logos/logo_groupe_wcs.png"
                    name="En groupe"
                    to="/groupe"
                    alt="vers la section projet en groupe"
                />
                <SectionButton
                    image="src/assets/img/logos/logo_solo_sandales.png"
                    name="En solo"
                    to="/solo"
                    alt="vers la section projet en solo"
                />
            </div>
        </>
    );
}

export default HomePage;
