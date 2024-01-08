import { configureStore } from "@reduxjs/toolkit";
import { rootApi } from "@src/shared/api/rootApi";
import rootReducer from "./rootReducer";

const store = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(rootApi.middleware),
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
