import { useState } from "react";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import { RootState } from "../../../redux/store/store";
import cls from "./Navbar.module.scss";
import DefaultAvatar from "../../../assets/default-avatar.png";

export const Navbar = () => {
    const { isLoggedIn, user } = useSelector((state: RootState) => state.auth);
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => setMenuOpen(!menuOpen);

    return (
        <nav className={cls.navbar}>
            <div
                className={`${cls.navbar_burger} ${menuOpen ? cls.open : ""}`}
                onClick={toggleMenu}
            >
                <span></span>
                <span></span>
                <span></span>
            </div>
            <ul
                className={`${cls.navbar_items} ${
                    menuOpen ? cls.show : ""
                }`}
            >
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
                {isLoggedIn ? (
                    <NavLink
                        className={({ isActive }) =>
                            isActive
                                ? `${cls.navbar_link} ${cls.active}`
                                : cls.navbar_link
                        }
                        to="/profile"
                    >
                        <img
                            src={user?.avatar || DefaultAvatar}
                            alt="Profile"
                            className={cls.profileAvatar}
                        />
                    </NavLink>
                ) : (
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
                )}
            </ul>
        </nav>
    );
};
