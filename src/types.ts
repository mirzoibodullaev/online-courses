export interface Materials {
    id: string;
    title: string;
    url: string;
}

export interface Comments {
    id: string;
    author: string;
    text: string;
}

export interface ActiveCourses {
    id: string;
    title: string;
    image: string;
    progress: number;
    videoUrl: string;
    materials: Materials[];
    comments: Comments[];
}

type CompletedCourses = Omit<ActiveCourses, "progress">;

export interface Profile {
    id?: number;
    name: string;
    password: string;
    email: string;
    avatar: string;
    activeCourses?: ActiveCourses[];
    completedCourses?: CompletedCourses[];
    recommendedCourses?: CompletedCourses[];
    materials?: Materials[];
    comments?: Comments[];
}

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
