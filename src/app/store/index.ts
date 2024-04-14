import { configureStore } from "@reduxjs/toolkit";
import { rootApi } from "@src/shared/api/rootApi";
import rootReducer from "./rootReducer";

const setupStore = (preloadedState?: Partial<RootState>) => {
    return configureStore({
        reducer: rootReducer,
        middleware: (getDefaultMiddleware) =>
            getDefaultMiddleware().concat(rootApi.middleware),
        preloadedState,
    });
};

export default setupStore;

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore["dispatch"];
