import { Link } from "react-router-dom";
import styles from "./ProjectButton.module.css"

interface ProjectButtonProps {
    image: string;
    name: string;
    to: string;
    alt: string
}

function ProjectButton({image, name, to, alt}:ProjectButtonProps){

    return(
        <Link to={to} className={styles.projectLink}>
        <img className={styles.projectImage} src={image} alt={alt}/>
        <p className={styles.projectName}>{name}</p>
        </Link>
    )
}

export default ProjectButton