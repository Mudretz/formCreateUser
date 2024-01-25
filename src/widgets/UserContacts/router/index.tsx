import { RouteObject } from "react-router-dom";
import { lazy } from "react";

export const userContactsRouter = (): RouteObject[] => {
    const UserContacts = lazy(() => import(".."));
    return [
        {
            path: "",
            element: <UserContacts />,
        },
    ];
};
