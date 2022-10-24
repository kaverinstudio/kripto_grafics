import {applyMiddleware, combineReducers, legacy_createStore} from "redux";
import thunk from "redux-thunk";
import {composeWithDevTools} from "redux-devtools-extension";
import coinReducers from "./coinReducer";
import tweetReducers from "./tweetReducer";

const rootReducers = combineReducers({
    coins: coinReducers,
    tweets: tweetReducers
})

export const store = legacy_createStore(rootReducers, composeWithDevTools(applyMiddleware(thunk)))