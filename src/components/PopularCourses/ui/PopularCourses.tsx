import { useFetch } from "../../../hooks/useFetch";
import { Course } from "../../../types";
import { Card } from "../../Card";
import cls from "./PopularCourses.module.scss";

export const PopularCourses = () => {
    const {
        data: courses,
        error,
        isLoading,
    } = useFetch<Course[]>("http://localhost:5000/courses");

    return (
        <section className={cls.popular}>
            <h2 className={cls.title}>Популярные Курсы:</h2>
            {error ? (
                <p className={cls.error}>Ошибка при загрузке курсов: {error}</p>
            ) : isLoading ? (
                <p className={cls.loading}>Загрузка...</p>
            ) : (
                <div className={cls.courses}>
                    {courses
                        ?.filter((item) => item.isPopular)
                        .map((item) => (
                            <Card
                                cardType="courseCard"
                                key={item.id}
                                {...item}
                            />
                        ))}
                </div>
            )}
        </section>
    );
};
