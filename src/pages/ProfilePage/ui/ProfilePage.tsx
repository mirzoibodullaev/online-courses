import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { ActiveCoursesCard } from "../../../components/ActiveCourses";
import { Profile } from "../../../types";
import cls from "./ProfilePage.module.scss";

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
                <div className={cls.profileContent}>
                    <h1 className={cls.profileName}>Привет, {profile.name}!</h1>
                    <img
                        className={cls.avatar}
                        src={profile.avatar}
                        alt="Avatar"
                    />
                </div>
            ) : (
                <p className={cls.profileLoading}>Загрузка...</p>
            )}
            <div>
                <h3 className={cls.courseTitle}>Активные курсы</h3>
                {profile?.activeCourses?.map((course) => (
                    <div className={cls.activeCourses} key={course.id}>
                        <ActiveCoursesCard courses={course} />
                    </div>
                ))}
            </div>
            <div>
                <Link className={cls.settingsLink} to={"/profile/settings"}>
                    Настройки Профиля
                </Link>
            </div>
        </div>
    );
};
export default ProfilePage;
