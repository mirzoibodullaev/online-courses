import { useState, useEffect, useCallback } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { ActiveCourses } from "../../../types";
import { MaterialList } from "../../../components/MaterialList";
import { VideoPlayer } from "../../../components/VideoPlayer";
import { CommentSection } from "../../../components/CommentSection";
import cls from "./LessonPage.module.scss";

const LessonPage = () => {
    const [lesson, setLesson] = useState<ActiveCourses | null>(null);
    const [newComment, setNewComment] = useState("");
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);
    const { id } = useParams();

    const fetchLessonData = useCallback(() => {
        setLoading(true);
        axios
            .get("http://localhost:5000/profile")
            .then((response) => {
                const profile = response.data[0];
                const course = profile.activeCourses.find(
                    (course: ActiveCourses) => course.id === id
                );
                if (course) {
                    setLesson(course);
                }
                setLoading(false);
            })
            .catch(() => {
                setError("Не удалось загрузить урок.");
                setLoading(false);
            });
    }, [id]);

    useEffect(() => {
        fetchLessonData();
    }, [fetchLessonData, id]);

    const handleAddComment = () => {
        if (newComment.trim() && lesson) {
            const newCommentData = {
                id: Date.now().toString(),
                author: "Текущий пользователь",
                text: newComment,
            };

            axios
                .post(`http://localhost:5000/profile`, newCommentData)
                .then(() => {
                    setLesson((prev) =>
                        prev
                            ? {
                                  ...prev,
                                  comments: [...prev.comments, newCommentData],
                              }
                            : null
                    );
                    setNewComment("");
                })
                .catch(() => {
                    setError("Не удалось добавить комментарий.");
                });
        }
    };

    if (loading) return <p>Загрузка...</p>;
    if (error) return <p>{error}</p>;
    if (!lesson) return <p>Урок не найден.</p>;

    return (
        <section className={cls.section}>
            <h1 className={cls.lessonTitle}>{lesson.title}</h1>
            <VideoPlayer
                url={`${import.meta.env.VITE_PUBLIC_URL}/videos/${
                    lesson.videoUrl
                }`}
            />
            <MaterialList materials={lesson.materials} />
            <CommentSection
                comments={lesson.comments}
                onAddComment={handleAddComment}
                newComment={newComment}
                setNewComment={setNewComment}
            />
        </section>
    );
};

export default LessonPage;
