export interface Lesson {
    id: number;
    title: string;
    duration: number;
    progress: number;
}

export interface Course {
    id: number;
    title: string;
    image: string;
    description: string;
    rating: number;
    type: string;
    category: string;
    author: string;
    price: number;
    level: string;
    isPopular: boolean;
    instructorImg: string;
    instructorExperience: string;
    instructorContacts: string;
    reviews: number;
    lessons: Lesson[];
}

export interface Review {
    id: number;
    review: string;
    image: string;
    name: string;
}
