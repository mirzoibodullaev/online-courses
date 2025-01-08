import { createRoot } from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import { Suspense } from "react";
import { Provider } from "react-redux";
import { store } from "./redux/index.ts";
import { router } from "./routes.tsx";
import "./index.scss";

createRoot(document.getElementById("root")!).render(
    <Provider store={store}>
        <Suspense fallback={<div>Loading...</div>}>
            <RouterProvider router={router} />
        </Suspense>
    </Provider>
);
