import cls from "./Result.module.scss";

interface Feedback {
    questionId: number;
    isCorrect: boolean;
}

interface ResultProps {
    results: {
        correct: number;
        total: number;
        feedback: Feedback[];
    };
}

export const Results = ({ results }: ResultProps) => {
    return (
        <div className={cls.results}>
            <h2>Результаты</h2>
            <p>
                Вы ответили правильно на {results.correct} из {results.total}{" "}
                вопросов.
            </p>
        </div>
    );
};
