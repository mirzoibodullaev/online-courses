import { useFetch } from "../../../hooks/useFetch";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import { Review } from "../../../types";
import { ReviewCard } from "../../ReviewCard";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import cls from "./Reviews.module.scss";

export const Reviews = () => {
    const {
        data: reviews,
        error,
        isLoading,
    } = useFetch<Review[]>(`http://localhost:5000/reviews`);
    if (!reviews) return <h1>Отзывы не найдены</h1>;
    if (error) return <h1>{error}</h1>;
    if (isLoading) return <p>{isLoading}</p>;
    return (
        <section className={cls.reviews}>
            <h2 className={cls.title}>Отзывы о курсах</h2>
            <Swiper
                grabCursor
                modules={[Navigation, Pagination]}
                spaceBetween={20}
                slidesPerView={4}
                pagination={{ clickable: true }}
                breakpoints={{
                    640: { slidesPerView: 1 },
                    768: { slidesPerView: 2 },
                    1024: { slidesPerView: 4 },
                }}
            >
                {reviews.map((review) => (
                    <SwiperSlide className={cls.swiper_slide} key={review.id}>
                        <ReviewCard review={review} />
                    </SwiperSlide>
                ))}
            </Swiper>
        </section>
    );
};
