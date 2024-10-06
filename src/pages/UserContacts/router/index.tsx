import { RouteObject } from "react-router-dom";
// import { lazy } from "react";
import { TestingLibrary } from "@src/pages/TestingLibrary";

export const userContactsRouter = (): RouteObject[] => {
    // const UserContactsLayout = lazy(
    //     () => import("../components/UserContactsLayout"),
    // );
    return [
        {
            path: "",
            element: <TestingLibrary />,
        },
    ];
};
