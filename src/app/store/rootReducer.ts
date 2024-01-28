import { userReducer } from "@src/entities/user/slice/user.slice";
import { rootApi } from "@src/shared/api/rootApi";
import createUserReducer from "@src/pages/CreateUser/slice/createUser.slices";
import { combineReducers } from "redux";

const rootReducer = combineReducers({
    [rootApi.reducerPath]: rootApi.reducer,
    user: userReducer,
    createUser: createUserReducer,
});

export default rootReducer;
