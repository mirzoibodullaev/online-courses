import { Button } from "../../../components/Button";
import cls from "./CommentSection.module.scss";
import { Comments } from "../../../types";

interface CommentSectionProps {
    comments: Comments[];
    onAddComment: () => void;
    newComment: string;
    setNewComment: (value: string) => void;
}

export const CommentSection = ({
    comments,
    onAddComment,
    newComment,
    setNewComment,
}: CommentSectionProps) => {
    return (
        <div className={cls.commentsSection}>
            <h2>Комментарии</h2>
            <div>
                <textarea
                    value={newComment}
                    onChange={(e) => setNewComment(e.target.value)}
                    placeholder="Введите ваш комментарий..."
                />
                <Button
                    label="Отправить"
                    variant="primary"
                    onClick={onAddComment}
                />
            </div>
            <ul className={cls.commentsList}>
                {comments.map((comment) => (
                    <li key={comment.id}>
                        <strong>{comment.author}:</strong> {comment.text}
                    </li>
                ))}
            </ul>
        </div>
    );
};
