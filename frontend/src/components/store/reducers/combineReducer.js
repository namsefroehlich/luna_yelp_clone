import {userLoginReducer} from "./userLoginReducer";
import {combineReducers} from "redux";
import {restaurantReducer} from "./restaurantReducer";
import userProfileReducer from "./userProfileReducer";


export const reducer = combineReducers({ post: userLoginReducer, restaurantReducer, userProfileReducer});