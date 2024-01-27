import { createBrowserRouter, RouteObject } from "react-router-dom";
import { AppLayout } from "../components/AppLayout";
import { userContactsRouter } from "@src/widgets/UserContacts";
import { createUserRouter } from "@src/widgets/CreateUser";

export const appRouter = () => {
    const routes: RouteObject[] = [
        ...userContactsRouter(),
        ...createUserRouter(),
    ];
    return createBrowserRouter([
        {
            path: "/",
            element: <AppLayout />,
            children: routes,
        },
    ]);
};
