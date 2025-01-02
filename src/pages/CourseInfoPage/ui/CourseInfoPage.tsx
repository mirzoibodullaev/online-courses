import { useParams } from "react-router-dom";
import { useFetch } from "../../../hooks/useFetch";
import { Course } from "../../../types";
import { CourseInfo } from "../../../components/CourseInfo";
import { Reviews } from "../../../components/Reviews";
import cls from "./CourseInfoPage.module.scss";

const CourseInfoPage = () => {
    const { id } = useParams<{ id: string }>();

    const {
        data: course,
        error,
        isLoading,
    } = useFetch<Course>(`http://localhost:5000/courses/${id}`);

    if (isLoading) return <div>Загрузка...</div>;
    if (error) return <div>Ошибка загрузки данных: {error}</div>;
    if (!course) return <div>Курс не найден.</div>;

    return (
        <section className={cls.courseInfo}>
            <CourseInfo {...course} />
            <Reviews />
        </section>
    );
};

export default CourseInfoPage;
