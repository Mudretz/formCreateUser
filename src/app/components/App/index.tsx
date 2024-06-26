import { Provider } from "react-redux";
import { RouterProvider } from "react-router-dom";
import { appRouter } from "@src/app/router";
import { Suspense } from "react";
import { SuspenseLoader } from "../SuspenseLoader";
import setupStore from "@src/app/store";
import { Feedback } from "feedback-se";
import "feedback-se/dist/style.css";

export const App = () => {
    return (
        <Provider store={setupStore()}>
            <Suspense fallback={<SuspenseLoader />}>
                <Feedback appId={1} />
                <RouterProvider router={appRouter()} />
            </Suspense>
        </Provider>
    );
};
