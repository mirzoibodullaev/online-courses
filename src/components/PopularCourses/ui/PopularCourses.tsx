import { useEffect, useState } from "react";
import { Course } from "../../../types";
import { Card } from "../../Card";
import cls from "./PopularCourses.module.scss";

export const PopularCourses = () => {
    const [courses, setCourses] = useState<Course[]>([]);
    useEffect(() => {
        const fetchCourses = async () => {
            const response = await fetch("http://localhost:5000/courses");
            const data = await response.json();
            setCourses(data);
        };

        fetchCourses();
    }, []);
    return (
        <section>
            <h2 className={cls.title}>Популярные Курсы:</h2>
            <div className={cls.courses}>
                {courses.map((item) => (
                    <Card key={item.id} {...item} />
                ))}
            </div>
        </section>
    );
};
