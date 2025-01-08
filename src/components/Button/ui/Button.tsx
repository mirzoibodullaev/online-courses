import cls from "./Button.module.scss";

interface ButtonProps {
    label?: string;
    onClick?: () => void;
    variant: "primary" | "secondary" | "outline" | "red";
    disabled?: boolean;
    type?: "button" | "submit" | "reset" | undefined
}

export const Button = ({
    label,
    onClick,
    variant = "primary",
    disabled = false,
    type,
}: ButtonProps) => {
    return (
        <button
            type={type}
            className={`${cls.button} ${cls[variant]}`}
            onClick={onClick}
            disabled={disabled}
        >
            {label}
        </button>
    );
};
