import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import { Review } from "../../../types";
import { Card } from "../../Card";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import cls from "./Reviews.module.scss";

export const Reviews = () => {
    const [reviews, setReviews] = useState<Review[]>([]);

    useEffect(() => {
        const fetchReviews = async () => {
            try {
                const response = await fetch("http://localhost:5000/reviews");
                const data = await response.json();
                setReviews(data);
            } catch (error) {
                console.error("Ошибка при загрузке отзывов:", error);
            }
        };

        fetchReviews();
    }, []);

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
                {reviews.map((item) => (
                    <SwiperSlide className={cls.swiper_slide} key={item.id}>
                        <Card cardType="reviewCard" {...item} />
                    </SwiperSlide>
                ))}
            </Swiper>
        </section>
    );
};
