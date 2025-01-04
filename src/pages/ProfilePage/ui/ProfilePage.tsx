import { useEffect, useState } from "react";
import { Profile } from "../../../types";
import axios from "axios";
import cls from "./ProfilePage.module.scss";
import { Link } from "react-router-dom";

const ProfilePage = () => {
    const [profile, setProfile] = useState<Profile>();

    useEffect(() => {
        axios
            .get("http://localhost:5000/profile/1")
            .then((response) => setProfile(response.data))
            .catch((error) => console.error("Error fetching profile:", error));
    }, []);

    return (
        <div className={cls.profile}>
            {profile ? (
                <h1 className={cls.profileName}>Привет, {profile.name}!</h1>
            ) : (
                <p className={cls.profileLoading}>Загрузка...</p>
            )}
            <Link className={cls.settingsLink} to={"/profile/settings"}>
                Настройки Профиля
            </Link>
        </div>
    );
};
export default ProfilePage;
