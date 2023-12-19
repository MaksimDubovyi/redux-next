
// combineReducers - для обєднання всіх рудюсорів в проєкті
import { combineReducers } from "redux";
 import { likesReducer } from "./reducer/likesReducer";
 import { commentsReducer } from "./reducer/commentsReducer";
 import { postsReducer } from "./reducer/postsReducer";
export const rootReducer=combineReducers({
     likesReducer,commentsReducer,postsReducer

})