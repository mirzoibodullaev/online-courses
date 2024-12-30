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
}

export interface Review {
    id: number;
    review: string;
    image: string;
}
