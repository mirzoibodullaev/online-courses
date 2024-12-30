import cls from "./Input.module.scss";
import SearchIcon from "../../../assets/icons/search.svg";

interface InputProps  {
    placeholder?: string;
    type?: "text"
    value?: string;
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
    onSearch?: () => void;
}

export const Input = ({
    placeholder = "Искать курсы",
    value,
    onChange,
    onSearch,
}: InputProps) => {
    return (
        <div className={cls.inputWrapper}>
            <input
                className={cls.input}
                type="text"
                placeholder={placeholder}
                value={value}
                onChange={onChange}
            />
            <button className={cls.searchButton} onClick={onSearch}>
                <img src={SearchIcon} alt="Search" className={cls.searchIcon} />
            </button>
        </div>
    );
};
