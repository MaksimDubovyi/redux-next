
// combineReducers - для обєднання всіх рудюсорів в проєкті
import { combineReducers } from "redux";
 import { postsReducer } from "./reducer/postsReducer";
export const rootReducer=combineReducers({
     postsReducer

})