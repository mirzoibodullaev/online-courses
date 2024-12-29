import { Button } from "../../Button";
import cls from "./Card.module.scss";

interface CardProps {
    id?: number;
    image: string;
    title: string;
    description: string;
    rating: number;
}

export const Card = ({ description, image, rating, title }: CardProps) => {
    return (
        <div className={cls.card}>
            <h3 className={cls.card_title}>{title}</h3>
            <img className={cls.card_img} src={image} alt={title} />
            <p className={cls.card_descr}>{description}</p>
            <span className={cls.card_rating}>{rating}</span>
            <Button label="Подробнее" variant="outline" />
        </div>
    );
};
