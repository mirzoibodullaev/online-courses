import { useState, useEffect } from "react";
import { Card } from "../../../components/Card";
import { Course } from "../../../types";
import { Filters } from "../../../components/Filters";
import cls from "./CoursePage.module.scss";

export const CoursePage = () => {
    const [courses, setCourses] = useState<Course[]>([]);
    const [categoryFilter, setCategoryFilter] = useState("");
    const [levelFilter, setLevelFilter] = useState("");
    const [typeFilter, setTypeFilter] = useState("");
    const [searchQuery, setSearchQuery] = useState("");

    useEffect(() => {
        fetch("http://localhost:5000/courses")
            .then((response) => response.json())
            .then((data) => setCourses(data));
    }, []);
    console.log(courses);

    const filteredCourses = courses.filter((course) => {
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

            <div className={cls.courses}>
                {filteredCourses.map((course) => (
                    <Card
                        showDetails
                        cardType="courseCard"
                        key={course.id}
                        {...course}
                    />
                ))}
            </div>
        </section>
    );
};
