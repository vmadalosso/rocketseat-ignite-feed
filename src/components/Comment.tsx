import { ThumbsUp, Trash } from "phosphor-react"
import { useState } from "react"
import { Avatar } from "./Avatar"

import styles from "./Comment.module.css"

interface CommentProps {
  content: string
  onDeleteComment(comment: string): void
}

export function Comment({ content, onDeleteComment }: CommentProps) {
  const [likeCount, setLikeCount] = useState(0)

  function handleDeleteComment() {
    onDeleteComment(content)
  }

  function handleLikeComment() {
    setLikeCount((state) => {
      return state + 1
    })
  }

  return (
    <div className={styles.comment}>
      <Avatar
        hasBorder={false}
        src="https://github.com/vmadalosso.png"
        alt=""
      />

      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.authorAndTime}>
              <strong>Vitor Madalosso</strong>
              <time
                title="24 de Fevereiro às 05:45h"
                dateTime="2024-02-24 05:45:30"
              >
                Cerca de 1h atrrás
              </time>
            </div>

            <button onClick={handleDeleteComment} title="Deletar comentario">
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
  )
}
