import cls from "./Hero.module.scss";
import HeroBanner from "../../../assets/banner.png";
import { Link } from "react-router-dom";

export const Hero = () => {
    return (
        <section className={cls.hero}>
            <div className={cls.hero_content}>
                <h1 className={cls.hero_title}>Агрегатор онлайн-курсов</h1>
                <p className={cls.hero_paragraph}>
                    Сравниваем онлайн-курсы по digital и IT. <br /> Мы —
                    каталог-отзовик курсов. Выбирайте курсы по отзывам, цене,
                    продолжительности и другим критериям!
                </p>

                <Link className={cls.heroLink} to={"/courses"}>Начать обучение</Link>
            </div>

            <img className={cls.hero_img} src={HeroBanner} alt="" />
        </section>
    );
};
