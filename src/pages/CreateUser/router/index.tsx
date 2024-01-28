import { RouteObject } from "react-router-dom";
import { lazy } from "react";

export const createUserRouter = (): RouteObject[] => {
    const CreateUserLayout = lazy(
        () => import("../components/CreateUserLayout"),
    );
    return [
        {
            path: "create",
            element: <CreateUserLayout />,
        },
    ];
};
