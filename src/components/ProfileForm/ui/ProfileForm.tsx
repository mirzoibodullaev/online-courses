import { ChangeEvent } from "react";
import { Profile } from "../../../types";
import cls from "./ProfileForm.module.scss";
import { Button } from "../../Button";

interface ProfileFormProps {
    profile: Profile;
    isModified: boolean;
    onChange: (e: ChangeEvent<HTMLInputElement>) => void;
    onAvatarUpload: (e: ChangeEvent<HTMLInputElement>) => void;
    handleSave: () => void;
}

export const ProfileForm = ({
    profile,
    isModified,
    onChange,
    onAvatarUpload,
    handleSave,
}: ProfileFormProps) => {
    return (
        <div className={cls.profileForm}>
            <h2 className={cls.profileTitle}>Настройки профиля</h2>
            <div>
                <label>Имя:</label>
                <input
                    type="text"
                    name="name"
                    value={profile.name}
                    onChange={onChange}
                />
            </div>
            <div>
                <label>Email:</label>
                <input
                    type="email"
                    name="email"
                    value={profile.email}
                    onChange={onChange}
                />
            </div>
            <div>
                <label>Пароль:</label>
                <input
                    type="password"
                    name="password"
                    value={profile.password}
                    onChange={onChange}
                />
            </div>
            <div>
                <label>Загрузить аватар:</label>
                <input type="file" accept="image/*" onChange={onAvatarUpload} />
            </div>
            <div>
                {profile.avatar && (
                    <img
                        className={cls.profileImg}
                        src={profile.avatar}
                        alt="Avatar Preview"
                    />
                )}
            </div>
            <Button
                label="Сохранить"
                variant="primary"
                onClick={handleSave}
                disabled={!isModified}
            />
        </div>
    );
};
