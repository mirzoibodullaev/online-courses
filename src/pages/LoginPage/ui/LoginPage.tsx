import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import cls from "./LoginPage.module.scss";
import { Button } from "../../../components/Button";
import { login } from "../../../redux";
import { AppDispatch, RootState } from "../../../redux/store/store";

const LoginPage = () => {
    const [name, setName] = useState("");
    const [password, setPassword] = useState("");
    const { error } = useSelector((state: RootState) => state.auth);
    const navigate = useNavigate();
    const dispatch = useDispatch<AppDispatch>();

    const handleLogin = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        dispatch(login({ name, password }))
            .unwrap()
            .then(() => {
                navigate("/profile");
            })
            .catch((err) => {
                console.error(err);
            });
    };

    return (
        <div className={cls.loginPage}>
            <h2 className={cls.loginTitle}>Войти</h2>
            <form className={cls.loginFrom} onSubmit={handleLogin}>
                <div className={cls.loginContent}>
                    <label className={cls.loginLabel}>
                        Username:
                        <input
                            className={cls.loginInput}
                            type="text"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            required
                        />
                    </label>
                </div>
                <div className={cls.loginContent}>
                    <label className={cls.loginLabel}>
                        Password:
                        <input
                            className={cls.loginInput}
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                    </label>
                </div>
                <Button label="Войти" variant="primary" type="submit" />
            </form>
            {error && <p className={cls.loginError}>{error}</p>}
        </div>
    );
};

export default LoginPage;
