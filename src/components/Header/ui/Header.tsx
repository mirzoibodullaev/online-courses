import { Link } from "react-router-dom";
import { Navbar } from "../../Navbar/ui/Navbar";
import Logo from "../../../assets/logo.png";
import cls from "./Header.module.scss";
import { Input } from "../../Input";

export const Header = () => {
    return (
        <header className={cls.header}>
            <Link to="/">
                <img className={cls.header_logo} src={Logo} alt="Logo" />
            </Link>
            <Navbar />
            <Input />
        </header>
    );
};
