import { useState } from "react";
import { Lesson } from "../../../types";
import cls from "./Lessons.module.scss";

interface LessonsProps {
    lessons: Lesson[];
}

export const Lessons = ({ lessons }: LessonsProps) => {
    const [activeLessonId, setActiveLessonId] = useState<number | null>(null);

    const handleActive = (id: number) => {
        setActiveLessonId(id);
    };

    return (
        <div className={cls.lessons}>
            {lessons.map((lesson) => (
                <div
                    onClick={() => handleActive(lesson.id)}
                    className={`${cls.lesson} ${
                        activeLessonId === lesson.id
                            ? cls["lesson--active"]
                            : ""
                    }`}
                    key={lesson.id}
                >
                    <h3>{lesson.title}</h3>
                    <span>{lesson.duration} часов</span>
                </div>
            ))}
        </div>
    );
};
