import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import axios from "axios";
import { logout } from "../../../redux";
import { ActiveCoursesCard } from "../../../components/ActiveCourses";
import { CourseList } from "../../../components/CourseList";
import { Button } from "../../../components/Button";
import { Profile } from "../../../types";
import { AppDispatch } from "../../../redux/store/store";
import cls from "./ProfilePage.module.scss";

const ProfilePage = () => {
    const [profile, setProfile] = useState<Profile>();
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);
    const dispatch = useDispatch<AppDispatch>();
    const navigate = useNavigate();

    const handleLogout = () => {
        dispatch(logout());
        navigate("/login");
    };
    useEffect(() => {
        setLoading(true);
        setError(null);
        axios
            .get("http://localhost:5000/profile/1")
            .then((response) => {
                setProfile(response.data);
                setLoading(false);
            })
            .catch(() => {
                setError("Не удалось загрузить данные профиля.");
                setLoading(false);
            });
    }, []);
    if (loading) {
        return <p className={cls.profileLoading}>Загрузка...</p>;
    }

    if (error) {
        return <p className={cls.profileError}>{error}</p>;
    }

    if (!profile) {
        return null;
    }

    return (
        <section>
            <div className={cls.profile}>
                {profile ? (
                    <div className={cls.profileContent}>
                        <h1 className={cls.profileName}>
                            Привет, {profile.name}!
                        </h1>
                        <img
                            loading="lazy"
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
                        <div key={course.id} className={cls.activeCoursesLink}>
                            <Link to={`lesson/${course.id}`} key={course.id}>
                                <ActiveCoursesCard courses={course} />
                            </Link>
                        </div>
                    ))}
                </div>
                <div className={cls.profileButtons}>
                    <Link className={cls.settingsLink} to={"/profile/settings"}>
                        Настройки Профиля
                    </Link>
                    <Link
                        className={cls.questionsLink}
                        to={"/profile/questions"}
                    >
                        Тестирование
                    </Link>
                    <Button
                        variant="red"
                        label="Выйти"
                        onClick={handleLogout}
                    />
                </div>
            </div>
            <CourseList
                buttonLabel="Скачать сертификат"
                title="Список завершенных курсов"
                courses={profile?.completedCourses || []}
            />
            <CourseList
                title="Рекомендуемые курсы"
                courses={profile?.recommendedCourses || []}
            />
        </section>
    );
};
export default ProfilePage;
