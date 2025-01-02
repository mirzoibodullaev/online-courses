import { useState } from "react";
import { Card } from "../../../components/Card";
import { Course } from "../../../types";
import { Filters } from "../../../components/Filters";
import { useFetch } from "../../../hooks/useFetch";
import cls from "./CoursesPage.module.scss";

const CoursesPage = () => {
    const {
        data: courses,
        error,
        isLoading,
    } = useFetch<Course[]>("http://localhost:5000/courses");

    const [categoryFilter, setCategoryFilter] = useState("");
    const [levelFilter, setLevelFilter] = useState("");
    const [typeFilter, setTypeFilter] = useState("");
    const [searchQuery, setSearchQuery] = useState("");

    const filteredCourses = (courses || []).filter((course) => {
        return (
            (categoryFilter === "" || course.category === categoryFilter) &&
            (levelFilter === "" || course.level === levelFilter) &&
            (typeFilter === "" || course.type === typeFilter) &&
            (course.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                course.description
                    .toLowerCase()
                    .includes(searchQuery.toLowerCase()))
        );
    });

    return (
        <section>
            <Filters
                categoryFilter={categoryFilter}
                setCategoryFilter={setCategoryFilter}
                levelFilter={levelFilter}
                setLevelFilter={setLevelFilter}
                typeFilter={typeFilter}
                setTypeFilter={setTypeFilter}
                searchQuery={searchQuery}
                setSearchQuery={setSearchQuery}
            />

            {error ? (
                <div className={cls.error}>
                    <p>{error}</p>
                </div>
            ) : isLoading ? (
                <p>Загрузка...</p>
            ) : (
                <div className={cls.courses}>
                    {filteredCourses.map((course) => (
                        <Card showDetails key={course.id} {...course} />
                    ))}
                </div>
            )}
        </section>
    );
};
export default CoursesPage;
