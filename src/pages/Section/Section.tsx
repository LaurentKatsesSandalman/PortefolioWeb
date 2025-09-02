import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { useLocation } from "react-router";
import { portefolio } from "../../data/projects";
import type { Section } from "../../interfaces/allInterfaces";
import ProjectButton from "../../components/ProjectButton/ProjectButton";
import styles from "./Section.module.css"

function SectionPage(){
    const{section}=useParams()

    const currentSection = portefolio.find((item)=>item.toParam === section)

    const location = useLocation();
    const initialPage = location.state?.from || "/";

    if(!currentSection){
        return (
            <p>Section not found</p>
        )
    }

    return(
        <>
        <Link  to={initialPage}><img  className={styles.arrow} alt="Arrow back pictogram" src="src/assets/img/arrow.png" />Accueil</Link>
        <h2>{currentSection.section}</h2>
        <p>{currentSection.desc}</p>
        {currentSection.projects.map((project)=>(
            <ProjectButton
            to={project.toParam}
            image={project.img}
            name={project.name}
            alt={project.alt}
            />
        ))}
        </>
    )

}

export default SectionPage
