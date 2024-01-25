import {
    createBrowserRouter,
    RouteObject,
} from "react-router-dom";
import { AppLayout } from "../components/AppLayout";
import { userContactsRouter } from "@src/widgets/UserContacts/router";

export const appRouter = () => {
    const routes: RouteObject[] = [...userContactsRouter()];
    return createBrowserRouter([
        {
            path: "/",
            element: <AppLayout />,
            children: routes,
        },
    ]);
};
