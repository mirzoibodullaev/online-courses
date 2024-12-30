import { Link } from "react-router-dom";
import { Navbar } from "../../Navbar/ui/Navbar";
import { Input } from "../../Input";
import Logo from "../../../assets/logo.png";
import cls from "./Header.module.scss";

export const Header = () => {
    return (
        <header className={cls.header}>
            <Link to="/">
                <img className={cls.header_logo} src={Logo} alt="Logo" />
            </Link>
            <Navbar />
            <Input placeholder="Искать курсы"/>
        </header>
    );
};
