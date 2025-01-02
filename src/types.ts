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
}

export interface Review {
    id: number;
    review: string;
    image: string;
    name: string;
}
