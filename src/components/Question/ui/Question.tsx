import { AnswerType } from "../../../pages/QuestionsPage/ui/QuestionsPage";
import { Questions } from "../../../types";
import cls from "./Question.module.scss";

interface Feedback {
    questionId: number;
    isCorrect: boolean;
}

interface QuestionProps {
    question: Questions;
    answers: Record<number, string | AnswerType>;
    setAnswers: React.Dispatch<
        React.SetStateAction<Record<number, string | AnswerType>>
    >;
    feedback?: Feedback;
}

export const Question = ({
    question,
    answers,
    setAnswers,
    feedback,
}: QuestionProps) => {
    const renderInput = () => {
        if (question.type === "multiple-choice") {
            return (
                <div className={cls.options}>
                    {question.options?.map((option, index) => (
                        <label key={option}>
                            <input
                                className={cls.multipleInput}
                                type="radio"
                                name={`question-${question.id}`}
                                value={index}
                                onChange={(e) =>
                                    setAnswers({
                                        ...answers,
                                        [question.id]: +e.target.value,
                                    })
                                }
                            />
                            {option}
                        </label>
                    ))}
                </div>
            );
        } else if (question.type === "text-input") {
            return (
                <input
                    className={cls.textInput}
                    type="text"
                    onChange={(e) =>
                        setAnswers({
                            ...answers,
                            [question.id]: e.target.value,
                        })
                    }
                />
            );
        } else if (question.type === "matching") {
            const leftItems = question.pairs?.map((pair) => pair.left) || [];
            const rightItems = question.pairs?.map((pair) => pair.right) || [];

            const handleSelect = (left: string, right: string) => {
                const currentAnswers =
                    (answers[question.id] as AnswerType) || [];
                const newAnswers = [
                    ...(Array.isArray(currentAnswers) ? currentAnswers : []),
                    { left, right },
                ];
                setAnswers({ ...answers, [question.id]: newAnswers });
            };

            return (
                <div className={cls.matching}>
                    {leftItems.map((left) => (
                        <div key={left} className={cls.pair}>
                            <span>{left}</span>
                            <select
                                onChange={(e) =>
                                    handleSelect(left, e.target.value)
                                }
                                defaultValue=""
                            >
                                <option value="" disabled>
                                    Выберите соответствие
                                </option>
                                {rightItems.map((right, rightIndex) => (
                                    <option key={rightIndex} value={right}>
                                        {right}
                                    </option>
                                ))}
                            </select>
                        </div>
                    ))}
                </div>
            );
        }
    };

    return (
        <div
            className={`${cls.question} ${
                feedback
                    ? feedback.isCorrect
                        ? cls.correctQuestion
                        : cls.incorrectQuestion
                    : ""
            }`}
        >
            <h3 className={cls.questionTitle}>
                {`${question.id}. ${question.question}`}{" "}
                {feedback && (
                    <span
                        className={
                            feedback.isCorrect ? cls.correct : cls.incorrect
                        }
                    >
                        {feedback.isCorrect ? "Верно" : "Неверно"}
                    </span>
                )}
            </h3>
            {renderInput()}
        </div>
    );
};
