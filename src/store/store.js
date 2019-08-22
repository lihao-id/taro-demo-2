import { combineReducers } from "redux";
import * as index from "store/index/reducer";
import * as home from "@/store/home/reducer";
import * as search from 'store/search/reducer';

export default combineReducers({
    ...index,
    ...home,
    ...search
});
