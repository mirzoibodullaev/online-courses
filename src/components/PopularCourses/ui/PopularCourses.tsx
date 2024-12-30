import { useEffect, useState } from "react";
import { Course } from "../../../types";
import { Card } from "../../Card";
import cls from "./PopularCourses.module.scss";

export const PopularCourses = () => {
    const [courses, setCourses] = useState<Course[]>([]);

    useEffect(() => {
        const fetchCourses = async () => {
            try {
                const response = await fetch("http://localhost:5000/courses");
                const data = await response.json();
                setCourses(data);
            } catch (error) {
                console.error("Ошибка при загрузке курсов:", error);
            }
        };

        fetchCourses();
    }, []);

    return (
        <section className={cls.popular}>
            <h2 className={cls.title}>Популярные Курсы:</h2>
            <div className={cls.courses}>
                {courses
                    .filter((item) => item.isPopular)
                    .map((item) => (
                        <Card cardType="courseCard" key={item.id} {...item} />
                    ))}
            </div>
        </section>
    );
};
