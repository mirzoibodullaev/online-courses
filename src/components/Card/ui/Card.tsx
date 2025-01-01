import { Link } from "react-router-dom";
import cls from "./Card.module.scss";
import { Button } from "../../Button";

interface CardProps {
    id?: number;
    image?: string;
    title?: string;
    description?: string;
    rating?: number;
    cardType: "reviewCard" | "courseCard";
    name?: string;
    review?: string;
    isFree?: boolean;
    category?: string;
    level?: string;
    author?: string;
    price?: number;
    showDetails?: boolean;
}

export const Card = ({
    id,
    description,
    image,
    rating,
    title,
    cardType,
    name,
    review,
    author,
    price,
    showDetails,
}: CardProps) => {
    return (
        <div className={cls.card}>
            {cardType === "courseCard" ? (
                <>
                    <h3 className={cls.card_title}>{title}</h3>
                    <img className={cls.card_img} src={image} alt={title} />
                    <p className={cls.card_descr}>{description}</p>

                    {showDetails ? (
                        <>
                            <span className={cls.card_author}>
                                Автор: {author}
                            </span>
                            <span className={cls.card_price}>
                                Цена: {price} ₽
                            </span>
                        </>
                    ) : null}

                    <span className={cls.card_rating}>{rating} ⭐</span>
                    <Link to={`/course/${id}`}>
                        <Button label="Подробнее" variant="outline" />
                    </Link>
                </>
            ) : (
                <>
                    <img className={cls.card_photo} src={image} alt={name} />
                    <h3 className={cls.card_name}>{name}</h3>
                    <p className={cls.card_review}>"{review}"</p>
                </>
            )}
        </div>
    );
};
