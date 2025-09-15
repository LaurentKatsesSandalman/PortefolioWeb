import Sandals from "../../assets/icons/sandale_icon.ico"
import styles from "./NavBar.module.css"

function NavBar(){

    return(
        <div className={styles.navbar}>
        <img className={styles.logo} src={Sandals}/>
        <h1>Laurent Sandalman</h1>
        </div>
    )
}

export default NavBar