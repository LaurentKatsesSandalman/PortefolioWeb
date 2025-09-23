import Sandals from "../../assets/icons/sandale_icon.png"
import styles from "./NavBar.module.css"
import { Link } from "react-router-dom";

function NavBar(){

    return(
        <div className={styles.navbar}>
       <Link to="/"> <img className={styles.logo} src={Sandals} alt="sandal icon"/></Link>
        <h1>Laurent Sandalman</h1>
        </div>
    )
}

export default NavBar