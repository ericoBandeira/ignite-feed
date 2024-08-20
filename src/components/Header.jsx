import styles from "./Header.module.css"

import igniteLogo from '../assets/IgniteSimbol.svg'

function Header() {
    return (
        <header className={styles.header} >
            <img src={igniteLogo} alt="Logotipo do Ignite"/>
        </header>
        
    );
}

export default Header