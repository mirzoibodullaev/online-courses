import { Button } from "../../Button";
import cls from "./Card.module.scss";

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
                            <span className={cls.card_author}>{author}</span>
                            <span className={cls.card_price}>{price}₽</span>
                        </>
                    ) : null}

                    <span className={cls.card_rating}>{rating} ⭐</span>
                    <Button label="Подробнее" variant="outline" />
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
