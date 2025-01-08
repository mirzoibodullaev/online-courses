import cls from "./AboutPage.module.scss";

const AboutPage = () => {
    return (
        <div className={cls.aboutPage}>
            <h1 className={cls.title}>О нас</h1>
            <p className={cls.description}>
                Добро пожаловать на наш сайт! Мы предлагаем курсы по самым востребованным технологиям, 
                включая JavaScript, React, TypeScript, HTML и CSS. Наши уроки помогут вам освоить 
                разработку с нуля или улучшить свои навыки. 
            </p>
            <p className={cls.description}>
                Наша цель — предоставить качественное обучение, доступное каждому. Мы предлагаем 
                интерактивные задания, тесты и поддержку опытных менторов, чтобы сделать ваше обучение 
                максимально эффективным.
            </p>
            <p className={cls.description}>
                Присоединяйтесь к нам, чтобы развивать свои навыки программирования и строить успешную 
                карьеру в IT!
            </p>
        </div>
    );
};

export default AboutPage;
