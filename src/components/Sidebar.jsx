import {PencilLine} from 'phosphor-react'
import Avatar from './Avatar'

import styles from "./Sidebar.module.css"

function Sidebar() {
    return (
        <aside className={styles.sidebar}>
            <img
                className={styles.cover}
                src="https://images.unsplash.com/photo-1516820827855-3ea1bd6f79ea?q=50&w=500&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Background user img"
            />
            <div className={styles.profile}>
                <Avatar avatarUrl="https://github.com/ericoBandeira.png"/>

                <strong>Erico Bandeira</strong>
                <span>Web Developer</span>
            </div>

            <footer>
                <a href="#">
                    <PencilLine size={20}/>
                    Editar seu perfil
                </a>
            </footer>
        </aside>
        
    );
}

export default Sidebar