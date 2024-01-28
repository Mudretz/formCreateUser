import { RouteObject } from "react-router-dom";
import { lazy } from "react";

export const userContactsRouter = (): RouteObject[] => {
    const UserContactsLayout = lazy(
        () => import("../components/UserContactsLayout"),
    );
    return [
        {
            path: "",
            element: <UserContactsLayout />,
        },
    ];
};
