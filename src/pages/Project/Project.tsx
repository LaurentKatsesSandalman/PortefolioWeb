import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { useLocation } from "react-router";
import { portefolio } from "../../data/projects";
import styles from "./Project.module.css";
import arrowIcon from "../../assets/icons/arrow.png";

function ProjectPage() {
    const { section } = useParams();
    const { project } = useParams();

    const currentSection = portefolio.find((item) => item.toParam === section);
    const currentProject = currentSection?.projects.find(
        (item) => item.toParam === project
    );

    const location = useLocation();
    const initialPage = location.state?.from;

    if (!currentSection) {
        return <p>Section not found</p>;
    }
    if (!currentProject) {
        return <p>Project not found</p>;
    }

    return (
        <>
            <Link to={initialPage} className={styles.arrow}>
                <img
                    className={styles.arrowimg}
                    alt="Arrow back pictogram"
                    src={arrowIcon}
                />
                {section}
            </Link>
            <div className={styles.main}>
            <h2>{currentProject.name}</h2>
            <Link to={currentProject.link}>
                <img
                    className={styles.projectImage}
                    src={currentProject.img}
                    alt={currentProject.alt}
                />
            </Link>
            <div className={styles.h3container}>
                <h3>Technos</h3>
                <p>{currentProject.technos}</p>
            </div>
            <div className={styles.h3container}>
            <h3>Durée</h3>
            <p>{currentProject.duration}</p></div>
             <div className={styles.h3container}>
            <h3>à propos</h3>
            {currentProject.desc.map((item, index) => (
                <p key={index}>{item}</p>
            ))}
            </div>
            </div>
        </>
    );
}

export default ProjectPage;
