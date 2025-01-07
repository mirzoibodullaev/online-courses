import { useState, useEffect } from "react";
import axios from "axios";
import { Results } from "../../../components/Result";
import { Question } from "../../../components/Question";
import { Questions } from "../../../types";
import { Button } from "../../../components/Button";
import cls from "./QuestionsPage.module.scss";

export type AnswerType = number | { left: string; right: string }[];

interface Feedback {
    questionId: number;
    isCorrect: boolean;
}

interface Results {
    correct: number;
    total: number;
    feedback: Feedback[];
}

const QuestionsPage = () => {
    const [questions, setQuestions] = useState<Questions[]>([]);
    const [answers, setAnswers] = useState<Record<number, string | AnswerType>>(
        {}
    );
    const [results, setResults] = useState<Results | null>(null);

    useEffect(() => {
        axios
            .get("http://localhost:5000/questions")
            .then((response) => {
                setQuestions(response.data);
            })
            .catch((error) => {
                console.error("Error fetching questions:", error);
            });
    }, []);
    
    const handleSubmit = () => {
        let correct = 0;
        const feedback = questions.map((q) => {
            let isCorrect = false;
            if (q.type === "multiple-choice" || q.type === "text-input") {
                isCorrect = q.correctAnswer === answers[q.id];
            } else if (q.type === "matching") {
                const userPairs = (answers[q.id] as { left: string; right: string }[]) || [];
                const correctPairs = q.pairs || [];
                isCorrect =
                    userPairs.length === correctPairs.length &&
                    userPairs.every((pair) =>
                        correctPairs.some(
                            (correctPair) =>
                                correctPair.left === pair.left &&
                                correctPair.right === pair.right
                        )
                    );
            }
            if (isCorrect) correct++;
            return { questionId: q.id, isCorrect };
        });
        setResults({ correct, total: questions.length, feedback });
    };
    

    return (
        <div className={cls.container}>
            <h1 className={cls.testTitle}>Тестирование</h1>
            {questions.map((q) => (
                <Question
                    key={q.id}
                    question={q}
                    answers={answers}
                    setAnswers={setAnswers}
                    feedback={results?.feedback.find(
                        (f) => f.questionId === q.id
                    )}
                />
            ))}
            <Button
                variant="outline"
                label="Отправить"
                onClick={handleSubmit}
            />
            {results && <Results results={results} />}
        </div>
    );
};

export default QuestionsPage;
