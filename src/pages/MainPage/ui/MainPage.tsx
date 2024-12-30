import { Hero } from "../../../components/Hero";
import { PopularCourses } from "../../../components/PopularCourses";
import { Reviews } from "../../../components/Reviews";
import cls from "./MainPage.module.scss"

export const MainPage = () => {
    return (
        <main className={cls.main}>
            <Hero />
            <PopularCourses />
            <Reviews />
        </main>
    );
};
