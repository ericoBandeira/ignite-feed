import { ThumbsUp, Trash } from 'phosphor-react'
import Avatar from './Avatar'
import styles from './Comment.module.css'

export function Comment({content}) {
    return (
        <div className={styles.comment}>
            <Avatar hasBorder={false} avatarUrl="https://github.com/ericoBandeira.png" alt="user image"/>
            
            <div className={styles.commentBox}>
                <div className={styles.commentContent}>
                    <header>
                        <div className={styles.authorAndTime}>
                            <strong>Erico Bandeira</strong>
                            <time title="11 de Maio às 08:13h" dataTime="2022-05-11 08:13:30">Publicado há 1h</time>
                        </div>

                        <button title="Deletar comentário">
                            <Trash size={24}/>
                        </button>
                    </header>

                    <p>{content}</p>
                </div>

                <footer>
                    <button>
                        <ThumbsUp />
                        Aplaudir <span>20</span>
                    </button>
                </footer>
            </div>
        </div>
    )
}

export default Comment