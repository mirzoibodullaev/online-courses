import { Link } from "react-router-dom";
import cls from "./Card.module.scss";
import { Button } from "../../Button";

interface CardProps {
    id?: number;
    image?: string;
    title?: string;
    description?: string;
    rating?: number;
    name?: string;
    review?: string;
    category?: string;
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
    author,
    price,
    showDetails,
}: CardProps) => {
    return (
        <div className={cls.card}>
            <h3 className={cls.card_title}>{title}</h3>
            <img loading="lazy" className={cls.card_img} src={image} alt={title} />
            <p className={cls.card_descr}>{description}</p>

            {showDetails ? (
                <>
                    <span className={cls.card_author}>Автор: {author}</span>
                    <span className={cls.card_price}>Цена: {price} ₽</span>
                </>
            ) : null}

            <span className={cls.card_rating}>{rating} ⭐</span>
            <Link to={`/courses/${id}`}>
                <Button label="Подробнее" variant="outline" />
            </Link>
        </div>
    );
};
