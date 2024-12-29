import { createBrowserRouter } from "react-router-dom";
import { CoursePage } from "./pages/CoursesPage";
import { LoginPage } from "./pages/LoginPage";
import { ContactsPage } from "./pages/ContactsPage";
import { AboutPage } from "./pages/AboutPage";
import { Layout } from "./components/Layout/Layout";
import { MainPage } from "./pages/MainPage";

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
                element: <CoursePage />,
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
        ],
    },
    {
        path: "*",
        element: <h1>Not Found</h1>,
    },
]);
