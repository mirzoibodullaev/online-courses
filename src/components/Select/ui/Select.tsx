import cls from "./Select.module.scss";

interface SelectProps {
    options: string[];
    value: string;
    onChange: (value: string) => void;
    placeholder: string;
}

export const Select = ({
    options,
    value,
    onChange,
    placeholder,
}: SelectProps) => {
    return (
        <select
            value={value}
            onChange={(e) => onChange(e.target.value)}
            className={cls.select}
        >
            <option value="">{placeholder}</option>
            {options.map((option) => (
                <option key={option} value={option}>
                    {option}
                </option>
            ))}
        </select>
    );
};
