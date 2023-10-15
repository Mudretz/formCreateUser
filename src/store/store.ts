import { combineReducers, configureStore } from "@reduxjs/toolkit";
import dataReducer from "./data/data";
import stepReducer from "./step/step";
import { apiReduxQuery } from "../services/apiReduxQuery";
// import authReducer from "src/components/Pages/AuthPage/store/authPage.reducer.ts";
import personalInfoReducer
    from "@/components/Pages/CreateUserPage/StepsPage/PersonalInfoPage/store/personalInfo.reducer.ts";
import authReducer from "@/components/Pages/AuthPage/store/authPage.reducer.ts";

const rootReducer = combineReducers({
    data: dataReducer,
    step: stepReducer,
    auth: authReducer,
    personalInfo: personalInfoReducer,
    [apiReduxQuery.reducerPath]: apiReduxQuery.reducer
});

const store = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(apiReduxQuery.middleware)
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;