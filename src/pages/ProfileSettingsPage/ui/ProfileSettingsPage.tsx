import { useState, useEffect, ChangeEvent } from "react";
import axios from "axios";
import { Profile } from "../../../types";
import { ProfileForm } from "../../../components/ProfileForm";
import cls from "./ProfileSettingsPage.module.scss";

const ProfileSettingsPage = () => {
    const [profile, setProfile] = useState<Profile>({
        id: "",
        name: "",
        email: "",
        password: "",
        avatar: "",
    });
    const [initialProfile, setInitialProfile] = useState<Profile>({
        id: "",
        name: "",
        email: "",
        password: "",
        avatar: "",
    });
    const [isModified, setIsModified] = useState(false);

    useEffect(() => {
        axios
            .get("http://localhost:5000/profile/1")
            .then((response) => {
                setProfile(response.data);
                setInitialProfile(response.data);
            })
            .catch((error) =>
                console.error("Ошибка при получении пользователя:", error)
            );
    }, []);

    useEffect(() => {
        const hasChanges =
            JSON.stringify(profile) !== JSON.stringify(initialProfile);
        setIsModified(hasChanges);
    }, [profile, initialProfile]);

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setProfile({ ...profile, [name]: value });
    };

    const handleAvatarUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
        const files = e.target.files;
        if (files && files.length > 0) {
            const file = files[0];
            const reader = new FileReader();
            reader.onloadend = () => {
                setProfile({ ...profile, avatar: reader.result as string });
            };
            reader.readAsDataURL(file);
        } else {
            console.error("Файл не выбран или введен неверный адрес.");
        }
    };

    const handleSave = () => {
        axios
            .put("http://localhost:5000/profile/1", profile)
            .then(() => {
                alert("Профиль успешно обновлен!");
                window.location.reload();
            })
            .catch((error) =>
                console.error("Ошибка обновления профиля:", error)
            );
    };

    return (
        <div className={cls.profileSettings}>
            <ProfileForm
                handleSave={handleSave}
                isModified={isModified}
                profile={profile}
                onChange={handleChange}
                onAvatarUpload={handleAvatarUpload}
            />
        </div>
    );
};

export default ProfileSettingsPage;
