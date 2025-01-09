import { Button } from "../../Button";
import cls from "./CourseList.module.scss";

interface Course {
    title: string;
    image: string;
}

interface CourseListProps {
    title: string;
    courses: Course[] | [];
    buttonLabel?: string;
}

export const CourseList = ({
    title,
    courses,
    buttonLabel,
}: CourseListProps) => {
    return (
        <div>
            <h3 className={cls.completedTitle}>{title}</h3>
            <div className={cls.profileCourses}>
                {courses?.map((course, index) => (
                    <div className={cls.completedContent} key={index}>
                        <p>{course.title}</p>
                        <img
                            loading="lazy"
                            className={cls.completedImg}
                            src={course.image}
                            alt={course.title}
                        />
                        {buttonLabel && (
                            <Button label={buttonLabel} variant="secondary" />
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
};
