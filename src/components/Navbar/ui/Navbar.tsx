import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import { RootState } from "../../../redux/store/store";
import cls from "./Navbar.module.scss";
import DefaultAvatar from "../../../assets/default-avatar.png";

export const Navbar = () => {
    const { isLoggedIn, user } = useSelector((state: RootState) => state.auth);
    console.log("user avatar", user?.avatar);

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
