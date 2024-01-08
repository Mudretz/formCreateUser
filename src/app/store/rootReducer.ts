import { userReducer } from "@src/entities/user/slice/user.slice";
import { rootApi } from "@src/shared/api/rootApi";
import { combineReducers } from "redux";

const rootReducer = combineReducers({
    [rootApi.reducerPath]: rootApi.reducer,
    user: userReducer,
});

export default rootReducer;
