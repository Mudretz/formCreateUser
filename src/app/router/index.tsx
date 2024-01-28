import { createBrowserRouter, RouteObject } from "react-router-dom";
import { AppLayout } from "../components/AppLayout";
import { userContactsRouter } from "@src/pages/UserContacts";
import { createUserRouter } from "@src/pages/CreateUser";
import NotFoundPage from "../components/NotFoundPage/NotFoundPage";

export const appRouter = () => {
    const routes: RouteObject[] = [
        ...userContactsRouter(),
        ...createUserRouter(),
    ];
    return createBrowserRouter([
        {
            path: "/",
            errorElement: <NotFoundPage />,
            element: <AppLayout />,
            children: routes,
        },
    ]);
};
