import { Link } from "react-router-dom";
import styles from "./SectionButton.module.css"

interface SectionButtonProps {
    image: string;
    name: string;
    to: string;
    alt: string
}

function SectionButton({image, name, to, alt}:SectionButtonProps){

    return(
        <Link to={to} className={styles.sectionLink} state={{ from: "/" }}>
        <img className={styles.sectionImage} src={image} alt={alt}/>
        <p className={styles.sectionName}>{name}</p>
        </Link>
    )
}

export default SectionButton