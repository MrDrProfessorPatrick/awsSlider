import { CommentCard } from './CommentCard'
import type { Comment } from './CommentCard'

type CommentsSliderProps = {
    comments: Comment[]
}

export function CommentsSlider({ comments }: CommentsSliderProps) {
    return (
        <>
            {comments.map((comment: Comment, index: number) => {
                return <CommentCard comment={comment} />
            })}
        </>
    )
}
