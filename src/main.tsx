import { createRoot } from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import { router } from "./routes.tsx";
import "./index.scss";

createRoot(document.getElementById("root")!).render(
    <RouterProvider router={router} />
);
