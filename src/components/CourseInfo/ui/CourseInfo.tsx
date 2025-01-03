import { Button } from "../../Button";
import cls from "./CourseInfo.module.scss";

interface CourseInfoProps {
    title: string;
    image: string;
    description: string;
    rating: number;
    reviews: number;
    price: number;
    instructorImg: string;
    instructorExperience: string;
    instructorContacts: string;
}

export const CourseInfo = ({
    title,
    image,
    description,
    rating,
    reviews,
    price,
    instructorImg,
    instructorExperience,
    instructorContacts,
}: CourseInfoProps) => {
    return (
        <div className={cls.courseInfo}>
            <div className={cls.courseDetails}>
                <img src={image} alt={title} className={cls.courseImg} />
                <div className={cls.courseMeta}>
                    <h2 className={cls.courseTitle}>{title}</h2>
                    <p className={cls.courseDescr}>{description}</p>
                    <div className={cls.courseRating}>
                        <span>⭐ {rating}</span>
                        <span>({reviews} отзывов)</span>
                    </div>
                    <div className={cls.coursePrice}>
                        {price === 0 ? (
                            <span className={cls.free}>Бесплатно</span>
                        ) : (
                            <span>{price} ₽</span>
                        )}
                    </div>
                    <Button label="Записаться" variant="primary" />
                </div>
            </div>

            <div className={cls.instructorDetails}>
                <img
                    src={instructorImg}
                    alt="Instructor"
                    className={cls.instructorImg}
                />
                <div className={cls.instructorMeta}>
                    <h3 className={cls.instructorInfo}>
                        Информация о преподавателе:
                    </h3>
                    <p className={cls.instructorExp}>
                        Опыт: {instructorExperience}
                    </p>
                    <p>Контакты: {instructorContacts}</p>
                </div>
            </div>
        </div>
    );
};
