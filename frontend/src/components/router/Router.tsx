import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { ProtectedRoute } from "./ProtectedRoute";
import { HomePage } from "../core/HomePage";
import useAuth from "../../hooks/auth/useAuth";
import { LoginPage } from "../auth/LoginPage";

const Router = () => {
    const authenticated = useAuth();

    const protectedRoutes = [
        {
            path: "/",
            element: <ProtectedRoute />,
            children: [
                {
                    path: "/",
                    element: <HomePage />,
                },
                {
                    path: "/home",
                    element: <HomePage />,
                }
            ],
        },
    ];

    const notProtectedRoutes = [
        {
            path: "/login",
            element: <LoginPage />,
        }
    ];

    const router = createBrowserRouter([
        ...(!authenticated ? notProtectedRoutes : []),
        ...protectedRoutes,
    ]);

    return <RouterProvider router={router} />;
};

export default Router;