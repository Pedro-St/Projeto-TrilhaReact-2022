import { ThumbsUp, Trash } from 'phosphor-react';
import { useState } from 'react';
import { Avatar } from './Avatar';
import styles from './Comment.module.css';

interface CommentProps {
    content: string;
    onDeleteComment: (comment: string) => void;
}


export function Comment({ content, onDeleteComment } : CommentProps){
  const [likeCount, setLikeCount] = useState(0);
  
    function handleDeleteComment(){ 
        onDeleteComment(content);
    }

    function handleLikeComment() {
        setLikeCount((state) => {
            return state + 1
        });
    }

    return(
        <div className={styles.comment}>
           <Avatar 
            hasBorder={false} 
            src="https://github.com/Pedro-St.png" 
            alt="" 
           />
        
            <div className={styles.commentBox}>
                <div className={styles.commentContent}>
                    <header>
                        <div className={styles.authorAndTime}>
                            <strong>Pedo Augusto</strong>
                            <time title="20 de junho às 15:24h" dateTime="2022-19-06 15:24:00">Ceca de 2h atrás</time>
                        </div>

                        <button onClick={handleDeleteComment} title="Deletar Comentário">
                            <Trash size={24} />
                        </button>
                    </header>

                    <p>{content}</p>
                </div>

                <footer>
                    <button onClick={handleLikeComment}>
                        <ThumbsUp />
                        Aplaudir <span>{likeCount}</span>
                    </button>
                </footer>
            </div>
        </div>
    );
}