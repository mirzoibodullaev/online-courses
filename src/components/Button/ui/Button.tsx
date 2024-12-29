import cls from "./Button.module.scss";

interface ButtonProps {
    label: string;
    onClick?: () => void;
    variant: "primary" | "secondary" | "outline";
    disabled?: boolean;
}

export const Button = ({
    label,
    onClick,
    variant = "primary",
    disabled = false,
}: ButtonProps) => {
    return (
        <button
            className={`${cls.button} ${cls[variant]}`}
            onClick={onClick}
            disabled={disabled}
        >
            {label}
        </button>
    );
};
