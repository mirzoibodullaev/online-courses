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
                element: <ProfilePage />,
            },
            {
                path: "/profile/settings",
                element: <ProfileSettingsPage />,
            },
            {
                path: "/courses/:id",
                element: <CourseInfoPage />,
            },
        ],
    },
    {
        path: "*",
        element: <h1>Not Found</h1>,
    },
]);
