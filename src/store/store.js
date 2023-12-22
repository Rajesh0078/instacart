import { createStore, applyMiddleware, combineReducers } from "redux"
import { thunk } from "redux-thunk"
import userReducer from "./reducers/fetchUser"

const rootReducers = combineReducers({ userReducer })

export const store = createStore(rootReducers, applyMiddleware(thunk))