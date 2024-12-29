import { NavLink } from "react-router-dom";
import cls from "./Navbar.module.scss";

export const Navbar = () => {
    return (
        <nav className={cls.navbar}>
            <ul className={cls.navbar_items}>
                <NavLink
                    className={({ isActive }) =>
                        isActive
                            ? `${cls.navbar_link} ${cls.active}`
                            : cls.navbar_link
                    }
                    to="/courses"
                >
                    Курсы
                </NavLink>
                <NavLink
                    className={({ isActive }) =>
                        isActive
                            ? `${cls.navbar_link} ${cls.active}`
                            : cls.navbar_link
                    }
                    to="/about"
                >
                    О нас
                </NavLink>
                <NavLink
                    className={({ isActive }) =>
                        isActive
                            ? `${cls.navbar_link} ${cls.active}`
                            : cls.navbar_link
                    }
                    to="/contacts"
                >
                    Контакты
                </NavLink>
                <NavLink
                    className={({ isActive }) =>
                        isActive
                            ? `${cls.navbar_link} ${cls.active}`
                            : cls.navbar_link
                    }
                    to="/login"
                >
                    Вход/Регистрация
                </NavLink>
            </ul>
        </nav>
    );
};

