import { ProgressBar } from "../../ProgressBar";
import { ActiveCourses } from "../../../types";
import cls from "./ActiveCoursesCard.module.scss";

interface ActiveCoursesProps {
    courses: ActiveCourses;
}

export const ActiveCoursesCard = ({ courses }: ActiveCoursesProps) => {
    if (!courses) {
        return <p className={cls.noCourses}>Нет активных курсов</p>;
    }

    return (
        <div className={cls.activeCourses}>
            <div className={cls.courseItem}>
                <p className={cls.courseTitle}>{courses.title}</p>
                <img
                    className={cls.courseImg}
                    src={courses.image}
                    alt={courses.title}
                />
                <ProgressBar progress={courses.progress} />
            </div>
        </div>
    );
};
