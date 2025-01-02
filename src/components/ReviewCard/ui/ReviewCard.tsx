import { Review } from "../../../types";
import cls from "./ReviewCard.module.scss";
import DeafultAvatar from "../../../assets/default-avatar.png";

interface ReviewCardProps {
    review: Review;
}

export const ReviewCard = ({ review }: ReviewCardProps) => {
    return (
        <div className={cls.card}>
            <div className={cls.header}>
                <img
                    src={review.image || DeafultAvatar}
                    alt={`${review.name}'s avatar`}
                    className={cls.avatar}
                />
                <div>
                    <h3 className={cls.name}>{review.name}</h3>
                </div>
            </div>
            <p className={cls.text}>"{review.review}"</p>
        </div>
    );
};
