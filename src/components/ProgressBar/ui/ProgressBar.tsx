import cls from "./ProgressBar.module.scss";

interface ProgressBarProps {
    progress: number;
}

export const ProgressBar = ({ progress }: ProgressBarProps) => {
    return (
        <div className={cls.progressBar}>
            <div
                className={cls.progressBarFill}
                style={{ width: `${progress}%` }}
            ></div>
            <span className={cls.progressLabel}>{progress}%</span>
        </div>
    );
};
