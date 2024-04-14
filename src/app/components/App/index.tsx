import { Provider } from "react-redux";
import { RouterProvider } from "react-router-dom";
import { appRouter } from "@src/app/router";
import { Suspense } from "react";
import { SuspenseLoader } from "../SuspenseLoader";
import setupStore from "@src/app/store";

export const App = () => {
    return (
        <Provider store={setupStore()}>
            <Suspense fallback={<SuspenseLoader />}>
                <RouterProvider router={appRouter()} />
            </Suspense>
        </Provider>
    );
};
