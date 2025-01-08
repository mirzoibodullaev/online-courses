import { createBrowserRouter } from "react-router-dom";
import { Layout } from "./components/Layout/Layout";
import { CoursesPage } from "./pages/CoursesPage";
import { LoginPage } from "./pages/LoginPage";
import { AboutPage } from "./pages/AboutPage";
import { ContactsPage } from "./pages/ContactsPage";
import { CourseInfoPage } from "./pages/CourseInfoPage";
import { MainPage } from "./pages/MainPage";
import { ProfilePage } from "./pages/ProfilePage";
import { ProfileSettingsPage } from "./pages/ProfileSettingsPage";
import { LessonPage } from "./pages/LessonPage";
import { QuestionsPage } from "./pages/QuestionsPage";
import { ProtectedRoute } from "./components/ProtectedRoute";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout />,
        children: [
            {
                path: "/",
                element: <MainPage />,
            },
            {
                path: "/courses",
                element: <CoursesPage />,
            },
            {
                path: "/login",
                element: <LoginPage />,
            },
            {
                path: "/contacts",
                element: <ContactsPage />,
            },
            {
                path: "/about",
                element: <AboutPage />,
            },
            {
                path: "/profile",
                element: (
                    <ProtectedRoute>
                        <ProfilePage />
                    </ProtectedRoute>
                ),
            },
            {
                path: "/profile/settings",
                element: (
                    <ProtectedRoute>
                        <ProfileSettingsPage />
                    </ProtectedRoute>
                ),
            },
            {
                path: "/profile/questions",
                element: (
                    <ProtectedRoute>
                        <QuestionsPage />
                    </ProtectedRoute>
                ),
            },
            {
                path: "/profile/lesson/:id",
                element: (
                    <ProtectedRoute>
                        <LessonPage />
                    </ProtectedRoute>
                ),
            },
            {
                path: "/courses/:id",
                element: <CourseInfoPage />,
            },
        ],
    },
    {
        path: "*",
        element: <h1>Page Not Found</h1>,
    },
]);
